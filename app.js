/**
 * Lógica Principal de la Plataforma de Estudio - Procuraduría 243-2026
 * Arquitectura Vanilla JS sin dependencias externas (Compatible 100% con GitHub Pages)
 */

(function () {
  "use strict";

  const STORAGE_KEYS = {
    COMPLETED: "pgn243_completed_topics_v1",
    ACTIVE_TOPIC: "pgn243_active_topic_v1",
    SOLVED_CASES: "pgn243_solved_cases_v1",
    NOTES: "pgn243_topic_notes_v1",
    THEME: "pgn243_theme_v1"
  };

  // Aplanar listado de temas para navegación secuencial rápida
  const allTopicsFlat = [];
  COURSE_DATA.modules.forEach((mod) => {
    mod.topics.forEach((topic) => {
      allTopicsFlat.push({
        ...topic,
        moduleId: mod.id,
        moduleCode: mod.code,
        moduleTitle: mod.title
      });
    });
  });

  // Estado Reactivo de la Aplicación
  const state = {
    completedTopics: new Set(loadJSON(STORAGE_KEYS.COMPLETED, [])),
    activeTopicId: localStorage.getItem(STORAGE_KEYS.ACTIVE_TOPIC) || allTopicsFlat[0].id,
    solvedCases: loadJSON(STORAGE_KEYS.SOLVED_CASES, {}),
    topicNotes: loadJSON(STORAGE_KEYS.NOTES, {}),
    collapsedModules: new Set(),
    filterStatus: "all", // 'all' | 'pending' | 'completed'
    searchQuery: "",
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || "light"
  };

  // Validar que el activeTopicId exista
  if (!allTopicsFlat.some((t) => t.id === state.activeTopicId)) {
    state.activeTopicId = allTopicsFlat[0].id;
  }

  // Referencias al DOM
  const dom = {
    sidebar: document.getElementById("sidebar"),
    sidebarToggle: document.getElementById("sidebar-toggle"),
    moduleTree: document.getElementById("module-tree"),
    modulesSummaryBadge: document.getElementById("modules-summary-badge"),
    topicSearch: document.getElementById("topic-search"),
    filterTabs: document.querySelectorAll(".filter-tab"),

    globalProgressCount: document.getElementById("global-progress-count"),
    globalProgressPercent: document.getElementById("global-progress-percent"),
    globalProgressFill: document.getElementById("global-progress-fill"),
    globalProgressbar: document.getElementById("global-progressbar"),

    statCompletedModules: document.getElementById("stat-completed-modules"),
    statCasesSolved: document.getElementById("stat-cases-solved"),

    themeToggle: document.getElementById("theme-toggle"),
    themeLabel: document.getElementById("theme-label"),
    resetProgressBtn: document.getElementById("reset-progress-btn"),

    mainContent: document.getElementById("main-content"),
    crumbModule: document.getElementById("crumb-module"),
    crumbTopicCode: document.getElementById("crumb-topic-code"),
    topicDuration: document.getElementById("topic-duration"),
    topicPriority: document.getElementById("topic-priority"),
    toggleReadBtn: document.getElementById("toggle-read-btn"),
    toggleReadLabel: document.getElementById("toggle-read-label"),

    lessonNormativa: document.getElementById("lesson-normativa"),
    lessonTitle: document.getElementById("lesson-title"),
    lessonSummary: document.getElementById("lesson-summary"),
    lessonBody: document.getElementById("lesson-body"),
    lessonKeypoints: document.getElementById("lesson-keypoints"),

    caseStem: document.getElementById("case-stem"),
    caseOptions: document.getElementById("case-options"),
    caseFeedback: document.getElementById("case-feedback"),

    topicNotes: document.getElementById("topic-notes"),
    notesStatus: document.getElementById("notes-status"),

    prevTopicBtn: document.getElementById("prev-topic-btn"),
    prevTopicTitle: document.getElementById("prev-topic-title"),
    nextTopicBtn: document.getElementById("next-topic-btn"),
    nextTopicTitle: document.getElementById("next-topic-title"),
    completeAndNextBtn: document.getElementById("complete-and-next-btn"),

    // Referencias del Motor de Simulacros
    lessonView: document.getElementById("lesson-view"),
    simuladorView: document.getElementById("simulador-view"),
    openSimuladorBtn: document.getElementById("open-simulador-btn"),
    closeSimuladorBtn: document.getElementById("close-simulador-btn"),
    simModuleBadge: document.getElementById("sim-module-badge"),
    simTitle: document.getElementById("sim-title"),
    simDescription: document.getElementById("sim-description"),
    simQuestionCounter: document.getElementById("sim-question-counter"),
    simProgressFill: document.getElementById("sim-progress-fill"),
    simQuestionCard: document.getElementById("sim-question-card"),
    simQBadge: document.getElementById("sim-q-badge"),
    simQuestionText: document.getElementById("sim-question-text"),
    simOptionsGrid: document.getElementById("sim-options-grid"),
    simJustificationBox: document.getElementById("sim-justification-box"),
    simJustificationStatus: document.getElementById("sim-justification-status"),
    simJustificationText: document.getElementById("sim-justification-text"),
    simActionHint: document.getElementById("sim-action-hint"),
    simNextBtn: document.getElementById("sim-next-btn"),
    simNextLabel: document.getElementById("sim-next-label"),
    simResultsCard: document.getElementById("sim-results-card"),
    simScoreCircle: document.getElementById("sim-score-circle"),
    simScorePercent: document.getElementById("sim-score-percent"),
    simScoreDetail: document.getElementById("sim-score-detail"),
    simEvalBanner: document.getElementById("sim-eval-banner"),
    simReviewList: document.getElementById("sim-review-list"),
    simRetryBtn: document.getElementById("sim-retry-btn"),
    simBackReadingBtn: document.getElementById("sim-back-reading-btn")
  };

  // Estado interno de la sesión activa del Simulador
  const simSession = {
    isActive: false,
    moduleId: null,
    questions: [],
    currentIndex: 0,
    answers: {} // { [questionId]: 'A' | 'B' | 'C' | 'D' }
  };

  /* ==========================================================================
     Utilidades de Persistencia y Seguridad HTML
     ========================================================================== */

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (err) {
      return fallback;
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(Array.from(state.completedTopics)));
      localStorage.setItem(STORAGE_KEYS.ACTIVE_TOPIC, state.activeTopicId);
      localStorage.setItem(STORAGE_KEYS.SOLVED_CASES, JSON.stringify(state.solvedCases));
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(state.topicNotes));
      localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
    } catch (err) {
      // Ignorar errores de cuota de almacenamiento local
    }
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ==========================================================================
     Cálculo y Actualización de la Barra de Progreso Visual General
     ========================================================================== */

  function updateGlobalProgress() {
    const totalTopics = allTopicsFlat.length;
    const completedCount = state.completedTopics.size;
    const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

    dom.globalProgressCount.textContent = `${completedCount} de ${totalTopics} temas leídos`;
    dom.globalProgressPercent.textContent = `${percentage}%`;
    dom.globalProgressFill.style.width = `${percentage}%`;
    dom.globalProgressbar.setAttribute("aria-valuenow", String(percentage));

    // Estadísticas del pie del árbol de módulos
    const totalModules = COURSE_DATA.modules.length;
    let completedModulesCount = 0;

    COURSE_DATA.modules.forEach((mod) => {
      const allDone = mod.topics.every((t) => state.completedTopics.has(t.id));
      if (allDone && mod.topics.length > 0) {
        completedModulesCount += 1;
      }
    });

    const solvedCasesCount = Object.keys(state.solvedCases).length;

    dom.statCompletedModules.textContent = `${completedModulesCount}/${totalModules}`;
    dom.statCasesSolved.textContent = `${solvedCasesCount}/${totalTopics}`;
    dom.modulesSummaryBadge.textContent = `${totalModules} Módulos · ${totalTopics} Temas`;
  }

  /* ==========================================================================
     Renderizado del Árbol de Módulos (Panel Lateral)
     ========================================================================== */

  function topicMatchesFilters(topic) {
    const isCompleted = state.completedTopics.has(topic.id);

    if (state.filterStatus === "pending" && isCompleted) return false;
    if (state.filterStatus === "completed" && !isCompleted) return false;

    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      const inTitle = topic.title.toLowerCase().includes(q);
      const inCode = topic.code.toLowerCase().includes(q);
      const inSummary = topic.summary.toLowerCase().includes(q);
      const inNormas = topic.normativa.some((n) => n.toLowerCase().includes(q));
      return inTitle || inCode || inSummary || inNormas;
    }

    return true;
  }

  function renderModuleTree() {
    dom.moduleTree.innerHTML = "";
    let visibleTopicsTotal = 0;

    COURSE_DATA.modules.forEach((mod) => {
      const filteredTopics = mod.topics.filter(topicMatchesFilters);
      if (filteredTopics.length === 0) return;

      visibleTopicsTotal += filteredTopics.length;

      const modTotal = mod.topics.length;
      const modDone = mod.topics.filter((t) => state.completedTopics.has(t.id)).length;
      const modPercent = modTotal > 0 ? Math.round((modDone / modTotal) * 100) : 0;
      const isModComplete = modDone === modTotal && modTotal > 0;
      const isCollapsed = state.collapsedModules.has(mod.id) && state.searchQuery.trim() === "";

      const moduleEl = document.createElement("section");
      moduleEl.className = `module-node${isModComplete ? " is-module-complete" : ""}${isCollapsed ? " is-collapsed" : ""}`;

      // Cabecera del Módulo
      const headerBtn = document.createElement("button");
      headerBtn.type = "button";
      headerBtn.className = "module-node__header";
      headerBtn.setAttribute("aria-expanded", String(!isCollapsed));
      headerBtn.innerHTML = `
        <div class="module-node__top">
          <span class="module-node__code">${escapeHTML(mod.code)}</span>
          <div class="module-node__meta">
            <span class="module-node__counter">${modDone}/${modTotal} leídos</span>
            <svg class="module-node__chevron" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        <div class="module-node__title">${escapeHTML(mod.title)}</div>
        <div class="module-node__minibar" aria-hidden="true">
          <div class="module-node__minifill" style="width: ${modPercent}%"></div>
        </div>
      `;

      headerBtn.addEventListener("click", () => {
        if (state.collapsedModules.has(mod.id)) {
          state.collapsedModules.delete(mod.id);
        } else {
          state.collapsedModules.add(mod.id);
        }
        renderModuleTree();
      });

      // Lista de Temas del Módulo
      const topicsList = document.createElement("ul");
      topicsList.className = "module-node__topics";

      filteredTopics.forEach((topic) => {
        const isCompleted = state.completedTopics.has(topic.id);
        const isActive = topic.id === state.activeTopicId;

        const li = document.createElement("li");
        li.className = `topic-item${isActive ? " is-active" : ""}${isCompleted ? " is-completed" : ""}`;

        // Botón Check directo para marcar/desmarcar leído desde el árbol
        const checkBtn = document.createElement("button");
        checkBtn.type = "button";
        checkBtn.className = "topic-item__check-btn";
        checkBtn.title = isCompleted ? "Desmarcar tema como leído" : "Marcar tema como leído";
        checkBtn.setAttribute("aria-label", `${isCompleted ? "Desmarcar" : "Marcar"} ${topic.title} como leído`);
        checkBtn.innerHTML = `
          <span class="topic-check-circle">
            ${
              isCompleted
                ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                     <polyline points="20 6 9 17 4 12"></polyline>
                   </svg>`
                : ""
            }
          </span>
        `;
        checkBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleTopicCompletion(topic.id);
        });

        // Botón para abrir el tema en el lector principal
        const selectBtn = document.createElement("button");
        selectBtn.type = "button";
        selectBtn.className = "topic-item__select-btn";
        selectBtn.innerHTML = `
          <div class="topic-item__top">
            <span class="topic-item__code">Tema ${escapeHTML(topic.code)}</span>
            <span class="topic-item__duration">${escapeHTML(topic.duration)}</span>
          </div>
          <span class="topic-item__name">${escapeHTML(topic.title)}</span>
        `;
        selectBtn.addEventListener("click", () => {
          selectTopic(topic.id);
        });

        li.appendChild(checkBtn);
        li.appendChild(selectBtn);
        topicsList.appendChild(li);
      });

      moduleEl.appendChild(headerBtn);
      moduleEl.appendChild(topicsList);
      dom.moduleTree.appendChild(moduleEl);
    });

    if (visibleTopicsTotal === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-tree-state";
      empty.textContent = "No se encontraron temas que coincidan con el filtro actual.";
      dom.moduleTree.appendChild(empty);
    }
  }

  /* ==========================================================================
     Renderizado del Tema Activo en el Lector Principal
     ========================================================================== */

  function renderActiveLesson() {
    const currentIndex = allTopicsFlat.findIndex((t) => t.id === state.activeTopicId);
    const topic = allTopicsFlat[currentIndex] || allTopicsFlat[0];
    const isCompleted = state.completedTopics.has(topic.id);

    // 1. Barra superior contextual
    dom.crumbModule.textContent = `${topic.moduleCode} · ${topic.moduleTitle}`;
    dom.crumbTopicCode.textContent = `Tema ${topic.code}`;
    dom.topicDuration.querySelector("span").textContent = topic.duration;
    dom.topicPriority.textContent = `Prioridad ${topic.priority}`;

    updateReadButtonState(isCompleted);

    // 2. Cabecera del tema y etiquetas normativas
    dom.lessonNormativa.innerHTML = topic.normativa
      .map((norma) => `<span class="norma-chip">${escapeHTML(norma)}</span>`)
      .join("");
    dom.lessonTitle.textContent = `${topic.code}. ${topic.title}`;
    dom.lessonSummary.textContent = topic.summary;

    // 3. Secciones estructuradas del tema
    dom.lessonBody.innerHTML = "";
    topic.sections.forEach((sec) => {
      const secEl = document.createElement("section");
      secEl.className = "content-section";

      let html = `<h3 class="content-section__heading">${escapeHTML(sec.heading)}</h3>`;
      if (sec.body) {
        html += `<p class="content-section__body">${escapeHTML(sec.body)}</p>`;
      }

      if (Array.isArray(sec.bullets) && sec.bullets.length > 0) {
        html += `<ul class="content-bullets">`;
        sec.bullets.forEach((b) => {
          html += `<li>${escapeHTML(b)}</li>`;
        });
        html += `</ul>`;
      }

      if (sec.table) {
        html += `<div class="table-wrapper"><table class="study-table"><thead><tr>`;
        sec.table.headers.forEach((h) => {
          html += `<th>${escapeHTML(h)}</th>`;
        });
        html += `</tr></thead><tbody>`;
        sec.table.rows.forEach((row) => {
          html += `<tr>`;
          row.forEach((cell) => {
            html += `<td>${escapeHTML(cell)}</td>`;
          });
          html += `</tr>`;
        });
        html += `</tbody></table></div>`;
      }

      if (sec.callout) {
        const calloutMod = sec.callout.type === "alerta" ? " callout-box--alerta" : "";
        html += `
          <div class="callout-box${calloutMod}">
            <div class="callout-box__title">${escapeHTML(sec.callout.title)}</div>
            <p class="callout-box__text">${escapeHTML(sec.callout.text)}</p>
          </div>
        `;
      }

      secEl.innerHTML = html;
      dom.lessonBody.appendChild(secEl);
    });

    // 4. Puntos Clave de Examen
    dom.lessonKeypoints.innerHTML = topic.keyPoints
      .map((pt) => `<li><span>${escapeHTML(pt)}</span></li>`)
      .join("");

    // 5. Caso Práctico Evaluativo
    renderCaseStudy(topic);

    // 6. Notas Personales del Tema
    dom.topicNotes.value = state.topicNotes[topic.id] || "";
    dom.notesStatus.textContent = "Sincronizado localmente";

    // 7. Botones de navegación inferior (Anterior / Siguiente)
    const prevTopic = currentIndex > 0 ? allTopicsFlat[currentIndex - 1] : null;
    const nextTopic = currentIndex < allTopicsFlat.length - 1 ? allTopicsFlat[currentIndex + 1] : null;

    dom.prevTopicBtn.disabled = !prevTopic;
    dom.prevTopicTitle.textContent = prevTopic ? `${prevTopic.code}. ${prevTopic.title}` : "Inicio del temario";

    dom.nextTopicBtn.disabled = !nextTopic;
    dom.nextTopicTitle.textContent = nextTopic ? `${nextTopic.code}. ${nextTopic.title}` : "Fin del temario";

    const advanceSpan = dom.completeAndNextBtn.querySelector("span");
    if (nextTopic) {
      advanceSpan.textContent = isCompleted ? "Ir al Siguiente Tema" : "Marcar Leído y Avanzar";
    } else {
      advanceSpan.textContent = isCompleted ? "Curso Completado" : "Marcar Último Tema Leído";
    }
  }

  function updateReadButtonState(isCompleted) {
    if (isCompleted) {
      dom.toggleReadBtn.classList.add("is-completed");
      dom.toggleReadLabel.textContent = "Tema Leído ✓";
    } else {
      dom.toggleReadBtn.classList.remove("is-completed");
      dom.toggleReadLabel.textContent = "Marcar como leído";
    }
  }

  /* ==========================================================================
     Renderizado e Interacción del Caso Práctico Situacional
     ========================================================================== */

  function renderCaseStudy(topic) {
    const cq = topic.caseQuestion;
    dom.caseStem.textContent = cq.stem;
    dom.caseOptions.innerHTML = "";
    dom.caseFeedback.hidden = true;
    dom.caseFeedback.className = "case-feedback";

    const letters = ["A", "B", "C", "D"];
    const savedAnswer = state.solvedCases[topic.id];

    cq.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "case-option-btn";
      btn.innerHTML = `
        <span class="case-option-letter">${letters[idx] || idx + 1}</span>
        <span>${escapeHTML(optText)}</span>
      `;

      if (typeof savedAnswer === "number") {
        if (idx === cq.correctIndex) {
          btn.classList.add("is-correct");
        } else if (idx === savedAnswer && savedAnswer !== cq.correctIndex) {
          btn.classList.add("is-wrong");
        }
      }

      btn.addEventListener("click", () => {
        state.solvedCases[topic.id] = idx;
        saveState();
        updateGlobalProgress();
        renderCaseStudy(topic);
      });

      dom.caseOptions.appendChild(btn);
    });

    if (typeof savedAnswer === "number") {
      const isRight = savedAnswer === cq.correctIndex;
      dom.caseFeedback.hidden = false;
      dom.caseFeedback.classList.add(isRight ? "is-correct" : "is-wrong");
      dom.caseFeedback.innerHTML = `
        <strong>${
          isRight
            ? "¡Respuesta Correcta! Fundamentación Normativa:"
            : `Respuesta Incorrecta (La opción correcta es la ${letters[cq.correctIndex]}). Fundamentación:`
        }</strong>
        <p style="margin-top: 0.35rem;">${escapeHTML(cq.explanation)}</p>
      `;
    }
  }

  /* ==========================================================================
     Motor de Simulacros por Módulo (60% Peso Eliminatorio - Umbral 65%)
     ========================================================================== */

  function getActiveModuleObj() {
    const activeTopic = allTopicsFlat.find((t) => t.id === state.activeTopicId) || allTopicsFlat[0];
    return COURSE_DATA.modules.find((m) => m.id === activeTopic.moduleId) || COURSE_DATA.modules[0];
  }

  function openSimulador() {
    const mod = getActiveModuleObj();
    const modSimData = typeof simuladorData !== "undefined" ? simuladorData[mod.id] : null;
    if (!modSimData || !Array.isArray(modSimData.preguntas) || modSimData.preguntas.length === 0) {
      return;
    }

    simSession.isActive = true;
    simSession.moduleId = mod.id;
    simSession.questions = modSimData.preguntas;
    simSession.currentIndex = 0;
    simSession.answers = {};

    dom.simModuleBadge.textContent = `${mod.code} · SIMULACRO DE SELECCIÓN MÚLTIPLE (60%)`;
    dom.simTitle.textContent = modSimData.titulo;
    dom.simDescription.textContent = modSimData.descripcion;

    dom.simResultsCard.hidden = true;
    dom.simQuestionCard.hidden = false;

    renderSimQuestion();

    // Transición suave: ocultar lectura teórica y mostrar simulador
    dom.lessonView.classList.add("is-fading-out");
    setTimeout(() => {
      dom.lessonView.classList.add("is-hidden");
      dom.simuladorView.classList.remove("is-hidden");
      dom.simuladorView.classList.add("is-fading-out");
      requestAnimationFrame(() => {
        dom.simuladorView.classList.remove("is-fading-out");
      });
      dom.mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }, 220);
  }

  function closeSimulador(immediate) {
    if (!simSession.isActive) return;
    simSession.isActive = false;

    if (immediate) {
      dom.simuladorView.classList.add("is-hidden");
      dom.simuladorView.classList.remove("is-fading-out");
      dom.lessonView.classList.remove("is-hidden", "is-fading-out");
      return;
    }

    dom.simuladorView.classList.add("is-fading-out");
    setTimeout(() => {
      dom.simuladorView.classList.add("is-hidden");
      dom.lessonView.classList.remove("is-hidden");
      dom.lessonView.classList.add("is-fading-out");
      requestAnimationFrame(() => {
        dom.lessonView.classList.remove("is-fading-out");
      });
      dom.mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }, 220);
  }

  function renderSimQuestion() {
    const total = simSession.questions.length;
    const idx = simSession.currentIndex;
    const qObj = simSession.questions[idx];
    if (!qObj) return;

    const progressPct = Math.round(((idx + 1) / total) * 100);
    dom.simQuestionCounter.textContent = `Pregunta ${idx + 1} de ${total}`;
    dom.simProgressFill.style.width = `${progressPct}%`;
    dom.simQBadge.textContent = `PREGUNTA ${idx + 1} DE ${total}`;
    dom.simQuestionText.textContent = qObj.pregunta;

    dom.simOptionsGrid.innerHTML = "";
    dom.simJustificationBox.hidden = true;
    dom.simJustificationBox.className = "sim-justification-box";

    const selectedLetter = simSession.answers[qObj.id];
    const letters = ["A", "B", "C", "D"];

    letters.forEach((letter) => {
      const optText = qObj.opciones[letter];
      if (!optText) return;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "case-option-btn";
      btn.innerHTML = `
        <span class="case-option-letter">${letter}</span>
        <span>${escapeHTML(optText)}</span>
      `;

      if (selectedLetter) {
        if (letter === qObj.respuestaCorrecta) {
          btn.classList.add("is-correct");
        } else if (letter === selectedLetter && selectedLetter !== qObj.respuestaCorrecta) {
          btn.classList.add("is-wrong");
        }
      }

      btn.addEventListener("click", () => {
        if (simSession.answers[qObj.id]) return; // Evitar cambiar respuesta una vez validada en el intento actual
        simSession.answers[qObj.id] = letter;
        renderSimQuestion();
      });

      dom.simOptionsGrid.appendChild(btn);
    });

    if (selectedLetter) {
      const isCorrect = selectedLetter === qObj.respuestaCorrecta;
      dom.simJustificationBox.hidden = false;
      dom.simJustificationBox.classList.add(isCorrect ? "is-correct" : "is-wrong");
      dom.simJustificationStatus.textContent = isCorrect
        ? `✓ ¡Respuesta Correcta! (Opción ${qObj.respuestaCorrecta})`
        : `✕ Respuesta Incorrecta. Seleccionaste ${selectedLetter} y la opción correcta es la ${qObj.respuestaCorrecta}.`;
      dom.simJustificationText.textContent = qObj.justificacion;

      dom.simNextBtn.disabled = false;
      dom.simActionHint.textContent =
        idx < total - 1
          ? "Revisa la justificación normativa y avanza a la siguiente pregunta."
          : "Has respondido todas las preguntas. Haz clic para calificar el módulo.";
      dom.simNextLabel.textContent = idx < total - 1 ? "Siguiente Pregunta" : "Finalizar y Calificar Módulo";
    } else {
      dom.simNextBtn.disabled = true;
      dom.simActionHint.textContent = "Selecciona una opción (A, B, C o D) para validar tu respuesta.";
      dom.simNextLabel.textContent = idx < total - 1 ? "Siguiente Pregunta" : "Finalizar y Calificar Módulo";
    }
  }

  function renderSimResults() {
    dom.simQuestionCard.hidden = true;
    dom.simResultsCard.hidden = false;

    const total = simSession.questions.length;
    let correctCount = 0;

    simSession.questions.forEach((q) => {
      if (simSession.answers[q.id] === q.respuestaCorrecta) {
        correctCount += 1;
      }
    });

    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const isPassed = percentage >= 65;

    dom.simScorePercent.textContent = `${percentage}%`;
    dom.simScoreDetail.textContent = `Obtuviste ${correctCount} de ${total} respuestas correctas en este módulo (Umbral mínimo exigido: 65%).`;

    dom.simScoreCircle.className = `sim-score-circle ${isPassed ? "is-passed" : "is-failed"}`;

    // Mensaje de Éxito en Verde (>= 65%) o Alerta de Refuerzo en Rojo (< 65%)
    dom.simEvalBanner.className = `sim-eval-banner ${
      isPassed ? "sim-eval-banner--success" : "sim-eval-banner--danger"
    }`;
    if (isPassed) {
      dom.simEvalBanner.innerHTML = `
        <div class="sim-eval-banner__title">✓ ¡Módulo Aprobado Satisfactoriamente! (${percentage}% de aciertos)</div>
        <p>Has alcanzado o superado el puntaje mínimo aprobatorio del <strong>65%</strong> exigido para la prueba eliminatoria de conocimientos de la Convocatoria 243-2026.</p>
      `;
    } else {
      dom.simEvalBanner.innerHTML = `
        <div class="sim-eval-banner__title">⚠ Alerta de Refuerzo Académico (${percentage}% de aciertos)</div>
        <p>Tu porcentaje de aciertos es inferior al umbral mínimo del <strong>65%</strong>. Te recomendamos volver a la zona de lectura teórica, repasar los puntos clave del módulo e intentar nuevamente el simulacro.</p>
      `;
    }

    // Listado de revisión pregunta por pregunta
    dom.simReviewList.innerHTML = "";
    simSession.questions.forEach((q, i) => {
      const userAns = simSession.answers[q.id] || "Sin responder";
      const ok = userAns === q.respuestaCorrecta;

      const item = document.createElement("div");
      item.className = "sim-review-item";
      item.innerHTML = `
        <div class="sim-review-item__q">${i + 1}. ${escapeHTML(q.pregunta)}</div>
        <div class="sim-review-item__ans ${ok ? "is-ok" : "is-bad"}">
          Tu respuesta: Opción ${escapeHTML(userAns)} · Respuesta Correcta: Opción ${escapeHTML(q.respuestaCorrecta)} (${escapeHTML(
            q.opciones[q.respuestaCorrecta]
          )})
        </div>
        <div class="sim-review-item__just"><strong>Justificación:</strong> ${escapeHTML(q.justificacion)}</div>
      `;
      dom.simReviewList.appendChild(item);
    });

    dom.mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ==========================================================================
     Acciones de Usuario y Eventos
     ========================================================================== */

  function selectTopic(topicId) {
    if (simSession.isActive) {
      closeSimulador(true);
    }
    state.activeTopicId = topicId;

    // Asegurar que el módulo del tema activo esté expandido
    const topicObj = allTopicsFlat.find((t) => t.id === topicId);
    if (topicObj) {
      state.collapsedModules.delete(topicObj.moduleId);
    }

    saveState();
    renderModuleTree();
    renderActiveLesson();
    dom.mainContent.scrollTo({ top: 0, behavior: "smooth" });

    // Cerrar panel lateral en vista móvil tras seleccionar
    if (window.innerWidth <= 980) {
      dom.sidebar.classList.remove("is-open");
    }
  }

  function toggleTopicCompletion(topicId) {
    if (state.completedTopics.has(topicId)) {
      state.completedTopics.delete(topicId);
    } else {
      state.completedTopics.add(topicId);
    }

    saveState();
    updateGlobalProgress();
    renderModuleTree();

    if (topicId === state.activeTopicId) {
      updateReadButtonState(state.completedTopics.has(topicId));
      const currentIndex = allTopicsFlat.findIndex((t) => t.id === state.activeTopicId);
      const nextTopic = currentIndex < allTopicsFlat.length - 1 ? allTopicsFlat[currentIndex + 1] : null;
      const advanceSpan = dom.completeAndNextBtn.querySelector("span");
      const isCompleted = state.completedTopics.has(topicId);
      if (nextTopic) {
        advanceSpan.textContent = isCompleted ? "Ir al Siguiente Tema" : "Marcar Leído y Avanzar";
      } else {
        advanceSpan.textContent = isCompleted ? "Curso Completado" : "Marcar Último Tema Leído";
      }
    }
  }

  function applyTheme(theme) {
    state.theme = theme;
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      dom.themeLabel.textContent = "Modo Claro";
    } else {
      document.documentElement.removeAttribute("data-theme");
      dom.themeLabel.textContent = "Modo Nocturno";
    }
    saveState();
  }

  function bindEvents() {
    // Alternar estado de lectura del tema actual
    dom.toggleReadBtn.addEventListener("click", () => {
      toggleTopicCompletion(state.activeTopicId);
    });

    // Botón primario: Marcar como leído y avanzar al siguiente tema
    dom.completeAndNextBtn.addEventListener("click", () => {
      state.completedTopics.add(state.activeTopicId);
      const currentIndex = allTopicsFlat.findIndex((t) => t.id === state.activeTopicId);
      if (currentIndex < allTopicsFlat.length - 1) {
        selectTopic(allTopicsFlat[currentIndex + 1].id);
      } else {
        saveState();
        updateGlobalProgress();
        renderModuleTree();
        renderActiveLesson();
      }
    });

    // Navegación Anterior / Siguiente
    dom.prevTopicBtn.addEventListener("click", () => {
      const currentIndex = allTopicsFlat.findIndex((t) => t.id === state.activeTopicId);
      if (currentIndex > 0) {
        selectTopic(allTopicsFlat[currentIndex - 1].id);
      }
    });

    dom.nextTopicBtn.addEventListener("click", () => {
      const currentIndex = allTopicsFlat.findIndex((t) => t.id === state.activeTopicId);
      if (currentIndex < allTopicsFlat.length - 1) {
        selectTopic(allTopicsFlat[currentIndex + 1].id);
      }
    });

    // Búsqueda en vivo en el Árbol de Módulos
    dom.topicSearch.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderModuleTree();
    });

    // Pestañas de filtro (Todos / Pendientes / Leídos)
    dom.filterTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        dom.filterTabs.forEach((t) => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        state.filterStatus = tab.getAttribute("data-filter");
        renderModuleTree();
      });
    });

    // Guardado automático de apuntes por tema
    let notesTimeout = null;
    dom.topicNotes.addEventListener("input", (e) => {
      dom.notesStatus.textContent = "Guardando...";
      state.topicNotes[state.activeTopicId] = e.target.value;
      clearTimeout(notesTimeout);
      notesTimeout = setTimeout(() => {
        saveState();
        dom.notesStatus.textContent = "Guardado en navegador ✓";
      }, 350);
    });

    // Modo Nocturno / Claro
    dom.themeToggle.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });

    // Reiniciar Progreso
    dom.resetProgressBtn.addEventListener("click", () => {
      const confirmReset = window.confirm(
        "¿Deseas reiniciar el progreso de temas leídos y respuestas de casos prácticos? (Tus apuntes personales se conservarán)."
      );
      if (!confirmReset) return;
      state.completedTopics.clear();
      state.solvedCases = {};
      saveState();
      updateGlobalProgress();
      renderModuleTree();
      renderActiveLesson();
    });

    // Menú lateral en pantallas móviles
    dom.sidebarToggle.addEventListener("click", () => {
      dom.sidebar.classList.toggle("is-open");
    });

    // Eventos del Motor de Simulacros (60% Peso Eliminatorio)
    dom.openSimuladorBtn.addEventListener("click", () => {
      openSimulador();
    });

    dom.closeSimuladorBtn.addEventListener("click", () => {
      closeSimulador(false);
    });

    dom.simBackReadingBtn.addEventListener("click", () => {
      closeSimulador(false);
    });

    dom.simNextBtn.addEventListener("click", () => {
      const total = simSession.questions.length;
      if (simSession.currentIndex < total - 1) {
        simSession.currentIndex += 1;
        renderSimQuestion();
        dom.mainContent.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        renderSimResults();
      }
    });

    dom.simRetryBtn.addEventListener("click", () => {
      simSession.currentIndex = 0;
      simSession.answers = {};
      dom.simResultsCard.hidden = true;
      dom.simQuestionCard.hidden = false;
      renderSimQuestion();
      dom.mainContent.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ==========================================================================
     Inicialización
     ========================================================================== */

  function init() {
    applyTheme(state.theme);
    bindEvents();
    updateGlobalProgress();
    renderModuleTree();
    renderActiveLesson();
  }

  init();
})();
