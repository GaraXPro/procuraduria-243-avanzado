/**
 * Motor Interactivo Principal - Academia Procuraduría 243-2026 (Cargo Auxiliar Administrativo 5AM-09)
 * Arquitectura 5 Pestañas en Vanilla JS + Persistencia Completa en localStorage
 */

(function () {
  "use strict";

  const STORAGE_KEYS = {
    COMPLETED: "pgn243_completed_topics_v1",
    ACTIVE_TOPIC: "pgn243_active_topic_v1",
    ACTIVE_TAB: "pgn243_active_tab_v1",
    SOLVED_CASES: "pgn243_solved_cases_v1",
    NOTES: "pgn243_topic_notes_v1",
    MASTERED_FC: "pgn243_mastered_fc_v1",
    REVIEW_FC: "pgn243_review_fc_v1",
    FAILED_SIM_IDS: "pgn243_failed_sim_ids_v1",
    THEME: "pgn243_theme_v1",
    STEPS_DONE: "pgn243_steps_done_v1",
    USER_VIDEOS: "pgn243_user_videos_v1",
    UNLOCKED_TROPHIES: "pgn243_unlocked_trophies_v1",
    SIM_STATS: "pgn243_sim_stats_v1",
    PAUSED_SIM: "pgn243_paused_sim_v1"
  };

  // Secuencia guiada de 5 pasos por tema (orden fijo)
  const STEP_ORDER = ["tab-lectura", "tab-video", "tab-pdf", "tab-flashcards", "tab-simulador"];
  const STEP_DEFS = {
    "tab-lectura": { n: 1, icon: "📖", label: "Lectura Teórica" },
    "tab-video": { n: 2, icon: "🎬", label: "Videoclases" },
    "tab-pdf": { n: 3, icon: "📚", label: "Biblioteca/PDF" },
    "tab-flashcards": { n: 4, icon: "🧠", label: "Flashcards" },
    "tab-simulador": { n: 5, icon: "⚖️", label: "Cuestionario" }
  };

  // Aplanar listado de temas para navegación secuencial rápida
  const allTopicsFlat = [];
  const allFlashcardsFlat = [...(typeof FLASHCARDS_COMPORTAMENTALES_5AM09 !== "undefined" ? FLASHCARDS_COMPORTAMENTALES_5AM09 : [])];

  COURSE_DATA.modules.forEach((mod) => {
    mod.topics.forEach((topic) => {
      allTopicsFlat.push({
        ...topic,
        moduleId: mod.id,
        moduleCode: mod.code,
        moduleTitle: mod.title
      });
      if (Array.isArray(topic.flashcards)) {
        topic.flashcards.forEach((fc) => {
          allFlashcardsFlat.push({
            ...fc,
            topicId: topic.id
          });
        });
      }
    });
  });

  // Estado Reactivo de la Aplicación
  const state = {
    completedTopics: new Set(loadJSON(STORAGE_KEYS.COMPLETED, [])),
    activeTopicId: localStorage.getItem(STORAGE_KEYS.ACTIVE_TOPIC) || allTopicsFlat[0].id,
    activeTabId: localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || "tab-lectura",
    solvedCases: loadJSON(STORAGE_KEYS.SOLVED_CASES, {}),
    topicNotes: loadJSON(STORAGE_KEYS.NOTES, {}),
    masteredFlashcards: new Set(loadJSON(STORAGE_KEYS.MASTERED_FC, [])),
    reviewFlashcards: new Set(loadJSON(STORAGE_KEYS.REVIEW_FC, [])),
    failedSimIds: new Set(loadJSON(STORAGE_KEYS.FAILED_SIM_IDS, [])),
    collapsedModules: new Set(),
    expandedTopics: new Set(),
    stepsDone: new Set(loadJSON(STORAGE_KEYS.STEPS_DONE, [])),
    userVideos: loadJSON(STORAGE_KEYS.USER_VIDEOS, {}),
    unlockedTrophies: new Set(loadJSON(STORAGE_KEYS.UNLOCKED_TROPHIES, [])),
    simStats: loadJSON(STORAGE_KEYS.SIM_STATS, {
      bestScore: 0,
      passed65: false,
      passed80: false,
      cleanedErrors: false,
      hadErrorsBefore: false
    }),
    filterStatus: "all", // 'all' | 'pending' | 'completed'
    moduleFilter: null, // null | índice de módulo (0..6)
    searchQuery: "",
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || "light",

    // Estado Pestaña 3 (Biblioteca PDF)
    activePdfDocId: "doc-funciones-5am09",
    pdfMode: "local", // 'local' | 'normas'

    // Estado Pestaña 4 (Flashcards 3D)
    fcDeckFilter: "topic", // 'topic' | 'comportamentales' | 'all' | 'review'
    fcCurrentIndex: 0,
    fcIsFlipped: false
  };

  if (!allTopicsFlat.some((t) => t.id === state.activeTopicId)) {
    state.activeTopicId = allTopicsFlat[0].id;
  }

  // Estado interno del Simulador (Pestaña 5) y su Telemetría de Tiempos
  const simSession = {
    mode: "caliente", // 'caliente' | 'all' | 'errors'
    lengthPreset: 20, // 10 | 20 | 35
    questions: [],
    currentIndex: 0,
    answers: {}, // { [questionId]: 'A' | 'B' | 'C' | 'D' }
    questionTimes: {}, // { [questionId]: segundos acumulados }
    elapsedSeconds: 0,
    totalAllowedSeconds: 20 * 120,
    startedAtISO: null,
    finishedAtISO: null,
    isActiveExam: false,
    isPaused: false,
    timerRunning: false,
    timerInterval: null
  };

  // Referencias al DOM
  const dom = {
    sidebar: document.getElementById("sidebar"),
    sidebarToggle: document.getElementById("sidebar-toggle"),
    moduleTree: document.getElementById("module-tree"),
    modulesSummaryBadge: document.getElementById("modules-summary-badge"),
    topicSearch: document.getElementById("topic-search"),
    filterChips: document.querySelectorAll(".filter-chip"),

    globalProgressCount: document.getElementById("global-progress-count"),
    globalProgressPercent: document.getElementById("global-progress-percent"),
    globalProgressFill: document.getElementById("global-progress-fill"),
    globalProgressbar: document.getElementById("global-progressbar"),

    statCompletedModules: document.getElementById("stat-completed-modules"),
    statFlashcardsMastered: document.getElementById("stat-flashcards-mastered"),

    // Gamificación, Toasts y Sala de Trofeos PS5
    openTrophiesBtn: document.getElementById("open-trophies-btn"),
    trophiesCountPill: document.getElementById("trophies-count-pill"),
    xpTotalPill: document.getElementById("xp-total-pill"),
    trophiesModal: document.getElementById("trophies-modal"),
    closeTrophiesModalBtn: document.getElementById("close-trophies-modal-btn"),
    closeTrophiesFooterBtn: document.getElementById("close-trophies-footer-btn"),
    ps5RankTitle: document.getElementById("ps5-rank-title"),
    ps5XpCurrent: document.getElementById("ps5-xp-current"),
    ps5TrophiesProgressText: document.getElementById("ps5-trophies-progress-text"),
    ps5XpFill: document.getElementById("ps5-xp-fill"),
    countPlatinum: document.getElementById("count-platinum"),
    countGold: document.getElementById("count-gold"),
    countSilver: document.getElementById("count-silver"),
    countBronze: document.getElementById("count-bronze"),
    trophiesGrid: document.getElementById("trophies-grid"),
    toastStack: document.getElementById("toast-stack"),

    openFichaBtn: document.getElementById("open-ficha-btn"),
    stripFichaLink: document.getElementById("strip-ficha-link"),
    convocatoriaModal: document.getElementById("convocatoria-modal"),
    closeFichaModalBtn: document.getElementById("close-ficha-modal-btn"),
    modalCompetenciasList: document.getElementById("modal-competencias-list"),
    modalFuncionesList: document.getElementById("modal-funciones-list"),
    modalOpenFuncionesPdf: document.getElementById("modal-open-funciones-pdf"),
    modalOpenComprobantePdf: document.getElementById("modal-open-comprobante-pdf"),

    themeToggle: document.getElementById("theme-toggle"),
    themeLabel: document.getElementById("theme-label"),
    resetProgressBtn: document.getElementById("reset-progress-btn"),

    mainContent: document.getElementById("reader-scroll"),
    readerTopicCode: document.getElementById("reader-topic-code"),
    readerTopicName: document.getElementById("reader-topic-name"),
    crumbModule: document.getElementById("crumb-module"),
    crumbTopicCode: document.getElementById("crumb-topic-code"),
    topicDuration: document.getElementById("topic-duration"),
    topicPriority: document.getElementById("topic-priority"),
    toggleReadBtn: document.getElementById("toggle-read-btn"),
    toggleReadLabel: document.getElementById("toggle-read-label"),

    // Navegación 5 Pestañas
    studyTabs: document.querySelectorAll(".study-tab"),
    tabPanels: document.querySelectorAll(".tab-panel"),
    errorTrayPill: document.getElementById("error-tray-pill"),

    // Pestaña 1: Lectura Ejecutiva y Trampas
    lessonNormativa: document.getElementById("lesson-normativa"),
    lessonTitle: document.getElementById("lesson-title"),
    lessonSummary: document.getElementById("lesson-summary"),
    trapHeading: document.getElementById("trap-heading"),
    trapBody: document.getElementById("trap-body"),
    cargoAppHeading: document.getElementById("cargo-app-heading"),
    cargoAppBody: document.getElementById("cargo-app-body"),
    lessonBody: document.getElementById("lesson-body"),
    lessonKeypoints: document.getElementById("lesson-keypoints"),
    caseStem: document.getElementById("case-stem"),
    caseOptions: document.getElementById("case-options"),
    caseFeedback: document.getElementById("case-feedback"),
    goTabVideoBtn: document.getElementById("go-tab-video-btn"),
    openSimuladorBtn: document.getElementById("open-simulador-btn"),
    prevTopicBtn: document.getElementById("prev-topic-btn"),
    prevTopicTitle: document.getElementById("prev-topic-title"),
    nextTopicBtn: document.getElementById("next-topic-btn"),
    nextTopicTitle: document.getElementById("next-topic-title"),
    completeAndNextBtn: document.getElementById("complete-and-next-btn"),

    // Pestaña 2: Videoclases y Apuntes Inteligentes
    videoTabTitle: document.getElementById("video-tab-title"),
    videoGuideSummary: document.getElementById("video-guide-summary"),
    videoGuideCritical: document.getElementById("video-guide-critical"),
    videoCardsList: document.getElementById("video-cards-list"),
    officialResourcesList: document.getElementById("official-resources-list"),
    userVideoForm: document.getElementById("user-video-form"),
    userVideoUrl: document.getElementById("user-video-url"),
    userVideoTitle: document.getElementById("user-video-title"),
    userVideoSaveBtn: document.getElementById("user-video-save-btn"),
    userVideoMsg: document.getElementById("user-video-msg"),
    userVideoStage: document.getElementById("user-video-stage"),
    userVideoList: document.getElementById("user-video-list"),
    videoIframe: document.getElementById("video-iframe"),
    notesTopicIndicator: document.getElementById("notes-topic-indicator"),
    notesStatus: document.getElementById("notes-status"),
    topicNotes: document.getElementById("topic-notes"),
    quickNoteBtns: document.querySelectorAll(".quick-note-btn"),
    downloadTopicNotesBtn: document.getElementById("download-topic-notes-btn"),
    downloadAllNotesBtn: document.getElementById("download-all-notes-btn"),

    // Pestaña 3: Biblioteca y Visor PDF
    pdfCardsGrid: document.getElementById("pdf-cards-grid"),
    pdfViewerContainer: document.getElementById("pdf-viewer-container"),
    pdfActiveCategory: document.getElementById("pdf-active-category"),
    pdfActiveTitle: document.getElementById("pdf-active-title"),
    pdfExternalBtn: document.getElementById("pdf-external-btn"),
    pdfFullscreenBtn: document.getElementById("pdf-fullscreen-btn"),
    pdfArticlesSummary: document.getElementById("pdf-articles-summary"),
    pdfEmbedViewer: document.getElementById("pdf-embed-viewer"),
    pdfModeBtns: document.querySelectorAll(".pdf-mode-btn"),
    pdfBackLecturaBtn: document.getElementById("pdf-back-lectura-btn"),
    normaFicha: document.getElementById("norma-ficha"),
    stepNavs: document.querySelectorAll("[data-step-nav]"),

    // Pestaña 4: Flashcards 3D
    fcFilterBtns: document.querySelectorAll(".fc-filter-btn"),
    fcMasteryCounter: document.getElementById("fc-mastery-counter"),
    flashcard3d: document.getElementById("flashcard-3d"),
    fcFrontCategory: document.getElementById("fc-front-category"),
    fcFrontStatus: document.getElementById("fc-front-status"),
    fcFrontText: document.getElementById("fc-front-text"),
    fcCounterLabel: document.getElementById("fc-counter-label"),
    fcBackRef: document.getElementById("fc-back-ref"),
    fcBackText: document.getElementById("fc-back-text"),
    fcPrevBtn: document.getElementById("fc-prev-btn"),
    fcNextBtn: document.getElementById("fc-next-btn"),
    fcReviewLaterBtn: document.getElementById("fc-review-later-btn"),
    fcMasteredBtn: document.getElementById("fc-mastered-btn"),

    // Pestaña 5: Simulador Situacional + Examen en Caliente + Telemetría + Bandeja de Errores
    openHotExamBtn: document.getElementById("open-hot-exam-btn"),
    sidebarHotExamBtn: document.getElementById("sidebar-hot-exam-btn"),
    simModeHotBtn: document.getElementById("sim-mode-hot-btn"),
    simModeAllBtn: document.getElementById("sim-mode-all-btn"),
    simModeErrorsBtn: document.getElementById("sim-mode-errors-btn"),
    simLengthSelector: document.getElementById("sim-length-selector"),
    simLengthBtns: document.querySelectorAll(".sim-length-btn"),
    simErrorsCountBadge: document.getElementById("sim-errors-count-badge"),
    simLobbyCard: document.getElementById("sim-lobby-card"),
    simLobbyModePill: document.getElementById("sim-lobby-mode-pill"),
    simLobbyHeading: document.getElementById("sim-lobby-heading"),
    simMetricQuestions: document.getElementById("sim-metric-questions"),
    simMetricQuestionsSub: document.getElementById("sim-metric-questions-sub"),
    simMetricTime: document.getElementById("sim-metric-time"),
    simMetricPass: document.getElementById("sim-metric-pass"),
    simPausedNotice: document.getElementById("sim-paused-notice"),
    simPausedMeta: document.getElementById("sim-paused-meta"),
    simResumeBtn: document.getElementById("sim-resume-btn"),
    simStartBtn: document.getElementById("sim-start-btn"),
    simNewRandomBtn: document.getElementById("sim-new-random-btn"),
    simLiveTelemetry: document.getElementById("sim-live-telemetry"),
    simPauseBtn: document.getElementById("sim-pause-btn"),
    simLiveTitle: document.getElementById("sim-live-title"),
    simAnsweredSubtitle: document.getElementById("sim-answered-subtitle"),
    simCountdownPill: document.getElementById("sim-countdown-pill"),
    simTimerDisplay: document.getElementById("sim-timer-display"),
    simTimerToggleBtn: document.getElementById("sim-timer-toggle-btn"),
    simTimerResetBtn: document.getElementById("sim-timer-reset-btn"),
    simPaceStatus: document.getElementById("sim-pace-status"),
    simPaceAvgLive: document.getElementById("sim-pace-avg-live"),
    simPaceTarget: document.getElementById("sim-pace-target"),
    simTitle: document.getElementById("sim-title"),
    simDescription: document.getElementById("sim-description"),
    simQuestionCounter: document.getElementById("sim-question-counter"),
    simProgressFill: document.getElementById("sim-progress-fill"),
    simQuestionCard: document.getElementById("sim-question-card"),
    simQBadge: document.getElementById("sim-q-badge"),
    simQModuloTag: document.getElementById("sim-q-modulo-tag"),
    simQPesoTag: document.getElementById("sim-q-peso-tag"),
    simQCompTag: document.getElementById("sim-q-comp-tag"),
    simQTimerPill: document.getElementById("sim-q-timer-pill"),
    simCaseContext: document.getElementById("sim-case-context"),
    simQuestionText: document.getElementById("sim-question-text"),
    simOptionsGrid: document.getElementById("sim-options-grid"),
    simJustificationBox: document.getElementById("sim-justification-box"),
    simJustificationStatus: document.getElementById("sim-justification-status"),
    simJustificationText: document.getElementById("sim-justification-text"),
    simPrevBtn: document.getElementById("sim-prev-btn"),
    simActionHint: document.getElementById("sim-action-hint"),
    simFinishExamBtn: document.getElementById("sim-finish-exam-btn"),
    simNextBtn: document.getElementById("sim-next-btn"),
    simNextLabel: document.getElementById("sim-next-label"),
    simJumpGrid: document.getElementById("sim-jump-grid"),
    simJumpLegend: document.getElementById("sim-jump-legend"),
    simEmptyErrorsCard: document.getElementById("sim-empty-errors-card"),
    simReturnFullBtn: document.getElementById("sim-return-full-btn"),
    simResultsCard: document.getElementById("sim-results-card"),
    simScoreCircle: document.getElementById("sim-score-circle"),
    simScorePercent: document.getElementById("sim-score-percent"),
    simScoreDetail: document.getElementById("sim-score-detail"),
    simTimeDetail: document.getElementById("sim-time-detail"),
    simResStartTime: document.getElementById("sim-res-start-time"),
    simResEndTime: document.getElementById("sim-res-end-time"),
    simResTotalTime: document.getElementById("sim-res-total-time"),
    simResAvgTime: document.getElementById("sim-res-avg-time"),
    simEvalBanner: document.getElementById("sim-eval-banner"),
    simReviewList: document.getElementById("sim-review-list"),
    simRetryBtn: document.getElementById("sim-retry-btn"),
    simPracticeMistakesBtn: document.getElementById("sim-practice-mistakes-btn"),
    simBackReadingBtn: document.getElementById("sim-back-reading-btn")
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
      localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, state.activeTabId);
      localStorage.setItem(STORAGE_KEYS.SOLVED_CASES, JSON.stringify(state.solvedCases));
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(state.topicNotes));
      localStorage.setItem(STORAGE_KEYS.MASTERED_FC, JSON.stringify(Array.from(state.masteredFlashcards)));
      localStorage.setItem(STORAGE_KEYS.REVIEW_FC, JSON.stringify(Array.from(state.reviewFlashcards)));
      localStorage.setItem(STORAGE_KEYS.FAILED_SIM_IDS, JSON.stringify(Array.from(state.failedSimIds)));
      localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
      localStorage.setItem(STORAGE_KEYS.STEPS_DONE, JSON.stringify(Array.from(state.stepsDone)));
      localStorage.setItem(STORAGE_KEYS.USER_VIDEOS, JSON.stringify(state.userVideos));
      localStorage.setItem(STORAGE_KEYS.UNLOCKED_TROPHIES, JSON.stringify(Array.from(state.unlockedTrophies)));
      localStorage.setItem(STORAGE_KEYS.SIM_STATS, JSON.stringify(state.simStats));
    } catch (err) {
      // Ignorar errores de almacenamiento
    }
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  function formatTimeMMSS(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  /* ==========================================================================
     Navegación de las 5 Pestañas Guiadas
     ========================================================================== */

  function switchTab(tabId) {
    state.activeTabId = tabId;
    saveState();

    dom.studyTabs.forEach((btn) => {
      const isMatch = btn.getAttribute("data-tab") === tabId;
      btn.classList.toggle("is-active", isMatch);
      btn.setAttribute("aria-selected", String(isMatch));
    });

    dom.tabPanels.forEach((panel) => {
      const isMatch = panel.id === tabId;
      if (isMatch) {
        panel.classList.remove("is-hidden");
      } else {
        panel.classList.add("is-hidden");
      }
    });

    if (tabId === "tab-simulador") {
      if (simSession.isActiveExam && !simSession.isPaused && simSession.questions.length > 0) {
        startSimTimer();
      } else if (dom.simResultsCard && !dom.simResultsCard.hidden) {
        // Ya está mostrando resultados
      } else {
        renderSimLobby();
      }
    } else {
      pauseSimTimer();
    }

    if (tabId === "tab-flashcards") {
      renderFlashcardStage();
    }

    if (tabId === "tab-pdf") {
      renderPdfLibrary();
    }

    state.expandedTopics.add(state.activeTopicId);
    renderModuleTree();
    renderStepNavs();

    dom.mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ==========================================================================
     Barra inferior de pasos (← Paso anterior / Siguiente paso →) y sub-pasos
     ========================================================================== */

  function stepKey(topicId, tabId) {
    return `${topicId}:${tabId}`;
  }

  function goToStep(topicId, tabId) {
    if (topicId !== state.activeTopicId) {
      state.activeTopicId = topicId;
      state.expandedTopics.add(topicId);
      const topicObj = allTopicsFlat.find((t) => t.id === topicId);
      if (topicObj) state.collapsedModules.delete(topicObj.moduleId);
      saveState();
      renderActiveLesson();
    }
    switchTab(tabId);
  }

  function toggleStepDone(topicId, tabId) {
    const key = stepKey(topicId, tabId);
    const wasDone = state.stepsDone.has(key);
    if (wasDone) {
      state.stepsDone.delete(key);
    } else {
      state.stepsDone.add(key);
    }

    // Los 5 sub-pasos completos => el tema queda marcado como leído
    const allDone = STEP_ORDER.every((s) => state.stepsDone.has(stepKey(topicId, s)));
    if (allDone) {
      state.completedTopics.add(topicId);
    }

    saveState();
    updateGlobalProgress();
    renderModuleTree();
    if (topicId === state.activeTopicId) {
      updateReadButtonState(state.completedTopics.has(topicId));
    }

    if (!wasDone) {
      const def = STEP_DEFS[tabId];
      showMotivationalToast(
        allDone
          ? "✔ ¡Tema y 5 sub-pasos completados! Sigue así 💪"
          : `✔ ¡Paso completado (${def ? def.label : "Sub-paso"})! Sigue así 💪`
      );
      evaluateTrophies(true);
    }
  }

  function renderStepNavs() {
    const idx = STEP_ORDER.indexOf(state.activeTabId);
    const prevTab = idx > 0 ? STEP_ORDER[idx - 1] : null;
    const nextTab = idx < STEP_ORDER.length - 1 ? STEP_ORDER[idx + 1] : null;
    const topicIdx = allTopicsFlat.findIndex((t) => t.id === state.activeTopicId);
    const nextTopic = topicIdx < allTopicsFlat.length - 1 ? allTopicsFlat[topicIdx + 1] : null;

    const prevLabel = prevTab
      ? `← Volver al Paso Anterior (${STEP_DEFS[prevTab].n}. ${STEP_DEFS[prevTab].label})`
      : "← Volver al Paso Anterior";
    let nextLabel = "Ir al Siguiente Paso →";
    if (nextTab) {
      nextLabel = `Ir al Siguiente Paso → (${STEP_DEFS[nextTab].n}. ${STEP_DEFS[nextTab].label})`;
    } else if (nextTopic) {
      nextLabel = `Siguiente Tema ${nextTopic.code} →`;
    }

    dom.stepNavs.forEach((nav) => {
      nav.innerHTML = `
        <button type="button" class="step-nav__btn step-nav__btn--prev" data-step-dir="prev" ${prevTab ? "" : "disabled"}>${escapeHTML(prevLabel)}</button>
        <span class="step-nav__indicator">Paso ${idx + 1} de ${STEP_ORDER.length}</span>
        <button type="button" class="step-nav__btn step-nav__btn--next" data-step-dir="next" ${nextTab || nextTopic ? "" : "disabled"}>${escapeHTML(nextLabel)}</button>
      `;
    });
  }

  function handleStepNavClick(dir) {
    const idx = STEP_ORDER.indexOf(state.activeTabId);
    if (dir === "prev" && idx > 0) {
      switchTab(STEP_ORDER[idx - 1]);
    } else if (dir === "next") {
      if (idx < STEP_ORDER.length - 1) {
        switchTab(STEP_ORDER[idx + 1]);
      } else {
        const topicIdx = allTopicsFlat.findIndex((t) => t.id === state.activeTopicId);
        if (topicIdx < allTopicsFlat.length - 1) {
          goToStep(allTopicsFlat[topicIdx + 1].id, "tab-lectura");
        }
      }
    }
  }

  /* ==========================================================================
     Cálculo y Actualización de Progreso General y Estadísticas
     ========================================================================== */

  function updateGlobalProgress() {
    const totalTopics = allTopicsFlat.length;
    const completedCount = state.completedTopics.size;
    const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

    dom.globalProgressCount.textContent = `${completedCount} de ${totalTopics} temas leídos`;
    dom.globalProgressPercent.textContent = `${percentage}%`;
    dom.globalProgressFill.style.width = `${percentage}%`;
    dom.globalProgressbar.setAttribute("aria-valuenow", String(percentage));

    const totalModules = COURSE_DATA.modules.length;
    let completedModulesCount = 0;

    COURSE_DATA.modules.forEach((mod) => {
      const allDone = mod.topics.every((t) => state.completedTopics.has(t.id));
      if (allDone && mod.topics.length > 0) {
        completedModulesCount += 1;
      }
    });

    dom.statCompletedModules.textContent = `${completedModulesCount}/${totalModules}`;
    dom.statFlashcardsMastered.textContent = `${state.masteredFlashcards.size}/${allFlashcardsFlat.length}`;
    dom.modulesSummaryBadge.textContent = `${totalModules} Módulos · ${totalTopics} Temas`;

    updateErrorTrayCounters();
    updateTrophyHeaderPills();
  }

  /* ==========================================================================
     Motor de Gamificación, Toasts Motivacionales, Audio PS5 y 12 Trofeos
     ========================================================================== */

  const MOTIVATIONAL_PHRASES = [
    "✔ ¡Clase completada! Sigue así 💪",
    "✔ ¡Excelente avance hacia tu vacante 5AM-09! Sigue así 💪",
    "✔ ¡Paso dominado con rigor jurídico! Sigue así 💪",
    "✔ ¡Cada tema te acerca a la Lista de Elegibles PGN! 💪"
  ];

  function playPs5TrophySound(tier) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      const freqs =
        tier === "platinum"
          ? [523.25, 659.25, 783.99, 1046.5, 1318.51]
          : tier === "gold"
          ? [523.25, 659.25, 783.99, 1046.5]
          : [440, 554.37, 659.25, 880];

      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(f, now + idx * 0.085);
        gain.gain.setValueAtTime(0.0001, now + idx * 0.085);
        gain.gain.exponentialRampToValueAtTime(0.09, now + idx * 0.085 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.085 + 0.42);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.085);
        osc.stop(now + idx * 0.085 + 0.45);
      });
    } catch (err) {
      // Silencioso si el navegador restringe audio automático
    }
  }

  function showMotivationalToast(customText) {
    if (!dom.toastStack) return;
    const msg =
      customText || MOTIVATIONAL_PHRASES[Math.floor(Math.random() * MOTIVATIONAL_PHRASES.length)];

    const toast = document.createElement("div");
    toast.className = "motivational-toast";
    toast.setAttribute("role", "status");
    toast.innerHTML = `
      <div class="motivational-toast__content">
        <span class="motivational-toast__check" aria-hidden="true">✔</span>
        <span>${escapeHTML(msg.replace(/^✔\s*/, ""))}</span>
      </div>
      <button type="button" class="motivational-toast__close" aria-label="Cerrar notificación">×</button>
    `;

    const dismiss = () => {
      if (toast.classList.contains("is-leaving")) return;
      toast.classList.add("is-leaving");
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 260);
    };

    toast.querySelector(".motivational-toast__close").addEventListener("click", dismiss);
    dom.toastStack.appendChild(toast);
    setTimeout(dismiss, 4200);
  }

  function showPs5TrophyUnlockToast(trophy) {
    if (!dom.toastStack) return;
    playPs5TrophySound(trophy.tier);

    const toast = document.createElement("div");
    toast.className = "ps5-trophy-toast";
    toast.setAttribute("role", "status");
    toast.innerHTML = `
      <div class="ps5-trophy-toast__medal" aria-hidden="true">${escapeHTML(trophy.icon)}</div>
      <div class="ps5-trophy-toast__body">
        <div class="ps5-trophy-toast__eyebrow">
          <span>TROFEO ${escapeHTML(trophy.tierLabel.toUpperCase())} DESBLOQUEADO</span>
          <span>· +${trophy.xp} XP</span>
        </div>
        <div class="ps5-trophy-toast__title">${escapeHTML(trophy.title)}</div>
        <div class="ps5-trophy-toast__desc">${escapeHTML(trophy.desc)}</div>
      </div>
      <button type="button" class="motivational-toast__close" aria-label="Cerrar trofeo">×</button>
    `;

    const dismiss = () => {
      if (toast.classList.contains("is-leaving")) return;
      toast.classList.add("is-leaving");
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 280);
    };

    toast.querySelector(".motivational-toast__close").addEventListener("click", dismiss);
    dom.toastStack.appendChild(toast);
    setTimeout(dismiss, 6200);
  }

  function isModuleCompleteById(modId) {
    const mod = COURSE_DATA.modules.find((m) => m.id === modId);
    if (!mod || !Array.isArray(mod.topics) || mod.topics.length === 0) return false;
    return mod.topics.every((t) => state.completedTopics.has(t.id));
  }

  function calculateTotalXP() {
    let xp = 0;
    xp += state.completedTopics.size * 50;
    xp += state.stepsDone.size * 15;
    xp += state.masteredFlashcards.size * 20;
    if (typeof TROFEOS_DATA !== "undefined") {
      TROFEOS_DATA.forEach((tr) => {
        if (state.unlockedTrophies.has(tr.id)) {
          xp += tr.xp || 0;
        }
      });
    }
    return xp;
  }

  function updateTrophyHeaderPills() {
    const totalTrophies = typeof TROFEOS_DATA !== "undefined" ? TROFEOS_DATA.length : 12;
    const unlockedCount = state.unlockedTrophies.size;
    const xp = calculateTotalXP();

    if (dom.trophiesCountPill) {
      dom.trophiesCountPill.textContent = `${unlockedCount}/${totalTrophies}`;
    }
    if (dom.xpTotalPill) {
      dom.xpTotalPill.textContent = `${xp} XP`;
    }
  }

  function evaluateTrophies(notifyNew) {
    if (typeof TROFEOS_DATA === "undefined") return;

    const conditions = {
      "tr-primer-radicado": state.completedTopics.size >= 1,
      "tr-archivista-experto": isModuleCompleteById("mod-gestion-documental"),
      "tr-redactor-gtc185": isModuleCompleteById("mod-documentos-oficina"),
      "tr-vocacion-servicio": isModuleCompleteById("mod-atencion-usuario"),
      "tr-custodio-almacen": isModuleCompleteById("mod-inventarios"),
      "tr-guardian-ministerio":
        isModuleCompleteById("mod-institucional-pgn") && isModuleCompleteById("mod-ofimatica-seguridad"),
      "tr-conducta-ejemplar": isModuleCompleteById("mod-comportamentales-pgn"),
      "tr-memoria-fotografica": state.masteredFlashcards.size >= 25,
      "tr-aduana-superada": Boolean(state.simStats && state.simStats.passed65),
      "tr-cero-errores": Boolean(state.simStats && state.simStats.cleanedErrors),
      "tr-lista-elegibles": Boolean(state.simStats && state.simStats.passed80)
    };

    const newlyUnlocked = [];

    TROFEOS_DATA.forEach((tr) => {
      if (tr.id === "tr-platino-5am09") return;
      if (conditions[tr.id] && !state.unlockedTrophies.has(tr.id)) {
        state.unlockedTrophies.add(tr.id);
        newlyUnlocked.push(tr);
      }
    });

    // Evaluar Trofeo Platino #12 (todos los 11 anteriores + 100% de los temas)
    const nonPlatinumIds = TROFEOS_DATA.filter((t) => t.id !== "tr-platino-5am09").map((t) => t.id);
    const allElevenUnlocked = nonPlatinumIds.every((id) => state.unlockedTrophies.has(id));
    const allTopicsDone = allTopicsFlat.length > 0 && state.completedTopics.size >= allTopicsFlat.length;

    if (allElevenUnlocked && allTopicsDone && !state.unlockedTrophies.has("tr-platino-5am09")) {
      const platObj = TROFEOS_DATA.find((t) => t.id === "tr-platino-5am09");
      if (platObj) {
        state.unlockedTrophies.add(platObj.id);
        newlyUnlocked.push(platObj);
      }
    }

    if (newlyUnlocked.length > 0) {
      saveState();
      updateTrophyHeaderPills();
      if (notifyNew) {
        newlyUnlocked.forEach((tr, idx) => {
          if (idx === 0) {
            showPs5TrophyUnlockToast(tr);
          } else {
            setTimeout(() => showPs5TrophyUnlockToast(tr), idx * 650);
          }
        });
      }
    } else {
      updateTrophyHeaderPills();
    }

    if (dom.trophiesModal && !dom.trophiesModal.hidden) {
      renderTrophiesModal();
    }
  }

  function renderTrophiesModal() {
    if (typeof TROFEOS_DATA === "undefined" || !dom.trophiesGrid) return;

    const total = TROFEOS_DATA.length;
    const unlocked = state.unlockedTrophies.size;
    const pct = total > 0 ? Math.round((unlocked / total) * 100) : 0;
    const xp = calculateTotalXP();

    let rankTitle = "Aspirante Admitido · En Formación (#230688)";
    if (state.unlockedTrophies.has("tr-platino-5am09")) {
      rankTitle = "🏆 Auxiliar Administrativo 5AM-09 Nombrado (Platino)";
    } else if (unlocked >= 8) {
      rankTitle = "🥇 Elegible Destacado del Ministerio Público";
    } else if (unlocked >= 4) {
      rankTitle = "🥈 Analista Operativo y Documental PGN";
    } else if (unlocked >= 1) {
      rankTitle = "🥉 Auxiliar en Entrenamiento Activo";
    }

    dom.ps5RankTitle.textContent = rankTitle;
    dom.ps5XpCurrent.textContent = `${xp} XP acumulados`;
    dom.ps5TrophiesProgressText.textContent = `${unlocked} de ${total} Trofeos (${pct}%)`;
    dom.ps5XpFill.style.width = `${pct}%`;

    const countByTier = (tier) => {
      const allInTier = TROFEOS_DATA.filter((t) => t.tier === tier);
      const doneInTier = allInTier.filter((t) => state.unlockedTrophies.has(t.id));
      return `${doneInTier.length}/${allInTier.length}`;
    };

    dom.countPlatinum.textContent = countByTier("platinum");
    dom.countGold.textContent = countByTier("gold");
    dom.countSilver.textContent = countByTier("silver");
    dom.countBronze.textContent = countByTier("bronze");

    dom.trophiesGrid.innerHTML = "";
    TROFEOS_DATA.forEach((tr) => {
      const isUnlocked = state.unlockedTrophies.has(tr.id);
      const card = document.createElement("article");
      card.className = `trophy-card trophy-card--${tr.tier} ${isUnlocked ? "is-unlocked" : "is-locked"}`;
      card.innerHTML = `
        <div class="trophy-card__icon" aria-hidden="true">${escapeHTML(tr.icon)}</div>
        <div class="trophy-card__body">
          <div class="trophy-card__meta">
            <span>${escapeHTML(tr.tierLabel)} · +${tr.xp} XP</span>
            <span class="trophy-card__status">${isUnlocked ? "Desbloqueado ✓" : "Bloqueado 🔒"}</span>
          </div>
          <h3 class="trophy-card__title">${escapeHTML(tr.title)}</h3>
          <p class="trophy-card__desc">${escapeHTML(tr.desc)}</p>
        </div>
      `;
      dom.trophiesGrid.appendChild(card);
    });
  }

  function openTrophiesModal() {
    evaluateTrophies(false);
    renderTrophiesModal();
    dom.trophiesModal.hidden = false;
  }

  function closeTrophiesModal() {
    dom.trophiesModal.hidden = true;
  }

  function updateErrorTrayCounters() {
    const errCount = state.failedSimIds.size;
    dom.simErrorsCountBadge.textContent = String(errCount);
    if (errCount > 0) {
      dom.errorTrayPill.hidden = false;
      dom.errorTrayPill.textContent = String(errCount);
    } else {
      dom.errorTrayPill.hidden = true;
    }
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
    const prevScroll = dom.moduleTree.scrollTop;
    dom.moduleTree.innerHTML = "";
    let visibleTopicsTotal = 0;

    COURSE_DATA.modules.forEach((mod, modIndex) => {
      if (state.moduleFilter !== null && state.moduleFilter !== modIndex) return;
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

      const topicsList = document.createElement("ul");
      topicsList.className = "module-node__topics";

      filteredTopics.forEach((topic) => {
        const isCompleted = state.completedTopics.has(topic.id);
        const isActive = topic.id === state.activeTopicId;

        const li = document.createElement("li");
        li.className = `topic-item${isActive ? " is-active" : ""}${isCompleted ? " is-completed" : ""}`;

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
          if (topic.id === state.activeTopicId) {
            // Tema ya activo: alternar el despliegue de sus 5 sub-pasos
            if (state.expandedTopics.has(topic.id)) {
              state.expandedTopics.delete(topic.id);
            } else {
              state.expandedTopics.add(topic.id);
            }
            renderModuleTree();
          } else {
            selectTopic(topic.id);
          }
        });

        li.appendChild(checkBtn);
        li.appendChild(selectBtn);

        // Secuencia guiada de sub-pasos (1.1.1 … 1.1.5)
        if (state.expandedTopics.has(topic.id)) {
          const subList = document.createElement("ul");
          subList.className = "topic-substeps";
          STEP_ORDER.forEach((tabId) => {
            const def = STEP_DEFS[tabId];
            const done = state.stepsDone.has(stepKey(topic.id, tabId));
            const isCurrent = isActive && state.activeTabId === tabId;

            const sub = document.createElement("li");
            sub.className = `topic-substep${done ? " is-done" : ""}${isCurrent ? " is-current" : ""}`;

            const subCheck = document.createElement("button");
            subCheck.type = "button";
            subCheck.className = "substep-check";
            subCheck.title = done ? "Desmarcar este paso" : "Marcar este paso como completado";
            subCheck.setAttribute("aria-label", `${done ? "Desmarcar" : "Marcar"} paso ${topic.code}.${def.n}`);
            subCheck.innerHTML = `<span class="topic-check-circle">${
              done
                ? `<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><polyline points="20 6 9 17 4 12"></polyline></svg>`
                : ""
            }</span>`;
            subCheck.addEventListener("click", (e) => {
              e.stopPropagation();
              toggleStepDone(topic.id, tabId);
            });

            const subGo = document.createElement("button");
            subGo.type = "button";
            subGo.className = "substep-go";
            subGo.textContent = `${topic.code}.${def.n} ${def.icon} ${def.label}`;
            subGo.addEventListener("click", () => {
              goToStep(topic.id, tabId);
            });

            sub.appendChild(subCheck);
            sub.appendChild(subGo);
            subList.appendChild(sub);
          });
          li.appendChild(subList);
        }

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

    dom.moduleTree.scrollTop = prevScroll;
  }

  /* ==========================================================================
     PESTAÑA 1: Renderizado de Lectura Ejecutiva, Trampas y Aplicación 5AM-09
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
    dom.readerTopicCode.textContent = `Tema ${topic.code}`;
    dom.readerTopicName.textContent = topic.title;

    // 3. Cajas destacadas: Trampa del Examen y Aplicación Práctica Cargo 5AM-09
    if (topic.trampaExamen) {
      dom.trapHeading.textContent = topic.trampaExamen.titulo;
      dom.trapBody.textContent = topic.trampaExamen.alerta;
    }
    if (topic.aplicacionCargo5AM09) {
      dom.cargoAppHeading.textContent = topic.aplicacionCargo5AM09.titulo;
      dom.cargoAppBody.textContent = topic.aplicacionCargo5AM09.descripcion;
    }

    // 4. Secciones estructuradas del tema
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

    // 5. Puntos Clave de Examen
    dom.lessonKeypoints.innerHTML = topic.keyPoints
      .map((pt) => `<li><span>${escapeHTML(pt)}</span></li>`)
      .join("");

    // 6. Caso Práctico Evaluativo del Tema
    renderCaseStudy(topic);

    // 7. Sincronizar Pestaña 2 (Videoclases y Apuntes del Tema)
    renderVideoAndNotesTab(topic);

    // 8. Sincronizar Pestaña 4 (Flashcards del Tema)
    state.fcCurrentIndex = 0;
    state.fcIsFlipped = false;
    renderFlashcardStage();

    // 9. Botones de navegación inferior (Anterior / Siguiente)
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
     PESTAÑA 2: Videoclases y Apuntes Inteligentes (Con exportación .txt)
     ========================================================================== */

  function renderVideoAndNotesTab(topic) {
    dom.videoTabTitle.textContent = `Videoclases y Apuntes · Tema ${topic.code}: ${topic.title}`;
    dom.notesTopicIndicator.textContent = `Apuntes asociados a: Tema ${topic.code} (${topic.title})`;
    dom.topicNotes.value = state.topicNotes[topic.id] || "";
    dom.notesStatus.textContent = "Sincronizado en localStorage ✓";

    // a) Guía visual: resumen clave + puntos críticos del examen PGN
    dom.videoGuideSummary.textContent = topic.summary;
    const critical = [];
    if (topic.trampaExamen) {
      critical.push(`${topic.trampaExamen.titulo.replace(/^OJO CON LA TRAMPA DEL EXAMEN:\s*/i, "Trampa: ")} — ${topic.trampaExamen.alerta}`);
    }
    (topic.keyPoints || []).slice(0, 3).forEach((kp) => critical.push(kp));
    dom.videoGuideCritical.innerHTML = critical.map((c) => `<li>${escapeHTML(c)}</li>`).join("");

    // b) Clases reales en YouTube (enlaces directos, sin iframes)
    const videos = Array.isArray(topic.videos) ? topic.videos : [];
    dom.videoCardsList.innerHTML = "";
    videos.forEach((vid) => {
      const a = document.createElement("a");
      a.className = "video-card-item video-card-item--link";
      a.href = vid.searchUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = `
        <div>
          <div class="video-card-item__title">▶ ${escapeHTML(vid.titulo)}</div>
          <div class="video-card-item__meta">${escapeHTML(vid.canal)} · Duración: ${escapeHTML(vid.duracion)}</div>
        </div>
        <span class="btn-yt-external">Abrir en YouTube ↗</span>
      `;
      dom.videoCardsList.appendChild(a);
    });

    // c) Listados oficiales AGN / Función Pública / PGN
    dom.officialResourcesList.innerHTML = "";
    const oficiales = typeof RECURSOS_OFICIALES_VIDEO !== "undefined" ? RECURSOS_OFICIALES_VIDEO : [];
    oficiales.forEach((res) => {
      const a = document.createElement("a");
      a.className = "video-card-item video-card-item--link";
      a.href = res.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = `
        <div>
          <div class="video-card-item__title">${escapeHTML(res.titulo)}</div>
          <div class="video-card-item__meta">${escapeHTML(res.descripcion)}</div>
        </div>
        <span class="btn-yt-external">Abrir ↗</span>
      `;
      dom.officialResourcesList.appendChild(a);
    });

    // d) Reproductor limpio + lista personal del tema
    stopUserVideo();
    renderUserVideoList();
  }

  /* ---- Reproductor personal de YouTube (enlaces pegados por el usuario) ---- */

  function parseYouTubeUrl(raw) {
    const text = (raw || "").trim();
    if (!text) return null;
    let u;
    try {
      u = new URL(/^https?:\/\//i.test(text) ? text : `https://${text}`);
    } catch (err) {
      return null;
    }
    const host = u.hostname.replace(/^(www|m|music)\./, "");
    let id = null;
    let list = null;

    if (host === "youtu.be") {
      id = u.pathname.split("/")[1] || null;
    } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
      if (u.pathname === "/watch") {
        id = u.searchParams.get("v");
      } else {
        const m = u.pathname.match(/^\/(embed|shorts|live|v)\/([\w-]{11})/);
        if (m) id = m[2];
      }
      list = u.searchParams.get("list");
    } else {
      return null;
    }

    if (id && !/^[\w-]{11}$/.test(id)) id = null;
    if (list && !/^[\w-]+$/.test(list)) list = null;
    if (!id && !list) return null;

    const watchUrl = id
      ? `https://www.youtube.com/watch?v=${id}${list ? `&list=${list}` : ""}`
      : `https://www.youtube.com/playlist?list=${list}`;
    const embedUrl = id
      ? `https://www.youtube-nocookie.com/embed/${id}${list ? `?list=${list}` : ""}`
      : `https://www.youtube-nocookie.com/embed/videoseries?list=${list}`;

    return { id, list, watchUrl, embedUrl };
  }

  function setUserVideoMessage(html) {
    dom.userVideoMsg.innerHTML = html;
  }

  function stopUserVideo() {
    dom.userVideoStage.hidden = true;
    dom.videoIframe.src = "about:blank";
  }

  function playUserVideo(parsed) {
    if (window.location.protocol === "file:") {
      // YouTube rechaza embeds desde file:// (Error 153): no se intenta incrustar.
      stopUserVideo();
      setUserVideoMessage(
        `Estás abriendo la página desde tu disco (file://), por eso YouTube bloquea el reproductor incrustado (Error 153). ` +
          `<a href="${escapeHTML(parsed.watchUrl)}" target="_blank" rel="noopener noreferrer"><strong>Abrir este video en YouTube ↗</strong></a>. ` +
          `En GitHub Pages (https) se reproduce aquí mismo.`
      );
      return;
    }
    dom.userVideoStage.hidden = false;
    dom.videoIframe.src = parsed.embedUrl;
    setUserVideoMessage(
      `Reproduciendo. Si el propietario del video desactivó la inserción, <a href="${escapeHTML(parsed.watchUrl)}" target="_blank" rel="noopener noreferrer"><strong>ábrelo en YouTube ↗</strong></a>.`
    );
  }

  function renderUserVideoList() {
    const list = state.userVideos[state.activeTopicId] || [];
    dom.userVideoList.innerHTML = "";

    if (list.length === 0) {
      dom.userVideoList.innerHTML = `<p class="user-video-empty">Aún no guardaste videos en este tema. Pega un enlace arriba y pulsa «Guardar en mi lista».</p>`;
      return;
    }

    list.forEach((item) => {
      const row = document.createElement("div");
      row.className = "video-card-item";
      row.innerHTML = `
        <div>
          <div class="video-card-item__title">▶ ${escapeHTML(item.title)}</div>
          <div class="video-card-item__meta">${escapeHTML(item.watchUrl)}</div>
        </div>
        <div class="video-card-item__actions">
          <button type="button" class="btn-mini" data-act="play">Reproducir</button>
          <a class="btn-mini" href="${escapeHTML(item.watchUrl)}" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
          <button type="button" class="btn-mini btn-mini--danger" data-act="del" aria-label="Quitar de mi lista">✕</button>
        </div>
      `;
      row.querySelector('[data-act="play"]').addEventListener("click", () => {
        const parsed = parseYouTubeUrl(item.watchUrl);
        if (parsed) playUserVideo(parsed);
      });
      row.querySelector('[data-act="del"]').addEventListener("click", () => {
        state.userVideos[state.activeTopicId] = (state.userVideos[state.activeTopicId] || []).filter(
          (v) => v.watchUrl !== item.watchUrl
        );
        saveState();
        renderUserVideoList();
      });
      dom.userVideoList.appendChild(row);
    });
  }

  function handleUserVideoPlay() {
    const parsed = parseYouTubeUrl(dom.userVideoUrl.value);
    if (!parsed) {
      setUserVideoMessage("⚠️ No reconozco ese enlace. Pega una URL de YouTube (youtube.com/watch?v=…, youtu.be/…, /shorts/… o una lista).");
      return;
    }
    playUserVideo(parsed);
  }

  function handleUserVideoSave() {
    const parsed = parseYouTubeUrl(dom.userVideoUrl.value);
    if (!parsed) {
      setUserVideoMessage("⚠️ No puedo guardar: el enlace no es una URL válida de YouTube.");
      return;
    }
    const topicId = state.activeTopicId;
    const list = state.userVideos[topicId] || [];
    if (list.some((v) => v.watchUrl === parsed.watchUrl)) {
      setUserVideoMessage("Ese video ya está en tu lista de este tema.");
      return;
    }
    const title = dom.userVideoTitle.value.trim() || `Video guardado ${list.length + 1}`;
    list.push({ title, watchUrl: parsed.watchUrl });
    state.userVideos[topicId] = list;
    saveState();
    dom.userVideoUrl.value = "";
    dom.userVideoTitle.value = "";
    setUserVideoMessage(`✅ Guardado en tu lista personal del tema: «${escapeHTML(title)}».`);
    renderUserVideoList();
  }
  function downloadTextFile(filename, content) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function exportCurrentTopicNotes() {
    const topic = allTopicsFlat.find((t) => t.id === state.activeTopicId) || allTopicsFlat[0];
    const notes = (state.topicNotes[topic.id] || "").trim();
    const header = [
      "======================================================================",
      "PROCURADURÍA GENERAL DE LA NACIÓN · CONVOCATORIA 243 - 2026",
      "EMPLEO: AUXILIAR ADMINISTRATIVO (CÓDIGO 5AM-09) · RADICADO #230688",
      `MÓDULO: ${topic.moduleCode} - ${topic.moduleTitle}`,
      `TEMA ${topic.code}: ${topic.title}`,
      `NORMATIVA: ${topic.normativa.join(", ")}`,
      "======================================================================",
      "",
      notes || "(Sin apuntes registrados todavía para este tema.)",
      ""
    ].join("\r\n");

    downloadTextFile(`Apuntes_PGN243_Tema_${topic.code.replace(".", "_")}.txt`, header);
  }

  function exportAllCourseNotes() {
    const lines = [
      "======================================================================",
      "CUADERNO INTEGRAL DE APUNTES · CONVOCATORIA PROCURADURÍA 243 - 2026",
      "CARGO: AUXILIAR ADMINISTRATIVO (5AM-09) · RADICADO #230688 (ADMITIDO)",
      "======================================================================",
      ""
    ];

    allTopicsFlat.forEach((t) => {
      const note = (state.topicNotes[t.id] || "").trim();
      lines.push(`----------------------------------------------------------------------`);
      lines.push(`[${t.moduleCode}] TEMA ${t.code}: ${t.title}`);
      lines.push(`----------------------------------------------------------------------`);
      lines.push(note || "(Sin apuntes registrados en este tema)");
      lines.push("");
    });

    downloadTextFile("Cuaderno_Completo_Procuraduria_243_2026_5AM09.txt", lines.join("\r\n"));
  }

  /* ==========================================================================
     PESTAÑA 3: Biblioteca Oficial y Visor PDF Integrado (Normograma)
     ========================================================================== */

  function renderPdfLibrary() {
    if (typeof BIBLIOTECA_NORMOGRAMA === "undefined") return;

    const isLocal = state.pdfMode === "local";
    const docsForMode = BIBLIOTECA_NORMOGRAMA.filter((d) => (d.tipo === "local-pdf") === isLocal);
    if (docsForMode.length === 0) return;

    let activeDoc = docsForMode.find((d) => d.id === state.activePdfDocId);
    if (!activeDoc) {
      activeDoc = docsForMode[0];
      state.activePdfDocId = activeDoc.id;
    }

    dom.pdfModeBtns.forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-pdf-mode") === state.pdfMode);
    });

    // Tarjetas del modo activo
    dom.pdfCardsGrid.innerHTML = "";
    docsForMode.forEach((doc) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `pdf-doc-card${doc.id === activeDoc.id ? " is-active" : ""}`;
      btn.innerHTML = `
        <div>
          <span class="pdf-doc-card__cat">${escapeHTML(doc.categoria)}</span>
          <h3 class="pdf-doc-card__title">${escapeHTML(doc.titulo)}</h3>
          <p class="pdf-doc-card__desc">${escapeHTML(doc.descripcion)}</p>
        </div>
        <div class="pdf-doc-card__footer">
          <span>${escapeHTML(doc.subtitulo)}</span>
          <span>${isLocal ? "Cargar en Visor →" : "Ver Ficha →"}</span>
        </div>
      `;
      btn.addEventListener("click", () => {
        state.activePdfDocId = doc.id;
        renderPdfLibrary();
      });
      dom.pdfCardsGrid.appendChild(btn);
    });

    if (isLocal) {
      // Modo 1: documentos locales (docs/*.pdf) en el visor integrado
      dom.normaFicha.hidden = true;
      dom.pdfViewerContainer.hidden = false;
      dom.pdfActiveCategory.textContent = activeDoc.categoria;
      dom.pdfActiveTitle.textContent = activeDoc.titulo;
      dom.pdfExternalBtn.href = activeDoc.urlExterna || activeDoc.url;
      if (!dom.pdfEmbedViewer.getAttribute("src") || dom.pdfEmbedViewer.getAttribute("src") !== activeDoc.url) {
        dom.pdfEmbedViewer.src = activeDoc.url;
      }
      dom.pdfArticlesSummary.hidden = true;
    } else {
      // Modo 2: ficha resumen interactiva de la norma (sin iframes bloqueables)
      dom.pdfViewerContainer.hidden = true;
      dom.pdfEmbedViewer.src = "about:blank";
      dom.normaFicha.hidden = false;
      const articles = Array.isArray(activeDoc.resumenArticulos) ? activeDoc.resumenArticulos : [];
      dom.normaFicha.innerHTML = `
        <div>
          <span class="norma-ficha__cat">${escapeHTML(activeDoc.categoria)}</span>
          <h3 class="norma-ficha__title">${escapeHTML(activeDoc.titulo)}</h3>
          <p class="norma-ficha__sub">${escapeHTML(activeDoc.subtitulo)}</p>
        </div>
        <p class="norma-ficha__desc">${escapeHTML(activeDoc.descripcion)}</p>
        ${
          articles.length > 0
            ? `<div class="norma-ficha__articles"><strong>Artículos clave evaluables en el concurso</strong><ul>${articles
                .map((a) => `<li>${escapeHTML(a)}</li>`)
                .join("")}</ul></div>`
            : ""
        }
        <div class="norma-ficha__actions">
          <a class="btn-evaluar-conocimientos btn-sm" href="${escapeHTML(activeDoc.urlExterna || activeDoc.url)}" target="_blank" rel="noopener noreferrer">Abrir texto oficial completo ↗</a>
          <button type="button" class="btn-back-reading" data-ficha-act="lectura">← Volver a Lectura Teórica</button>
        </div>
      `;
      const backBtn = dom.normaFicha.querySelector('[data-ficha-act="lectura"]');
      if (backBtn) backBtn.addEventListener("click", () => switchTab("tab-lectura"));
    }
  }
  /* ==========================================================================
     PESTAÑA 4: Laboratorio Activo de Flashcards 3D
     ========================================================================== */

  function getActiveFlashcardDeck() {
    if (state.fcDeckFilter === "comportamentales") {
      return FLASHCARDS_COMPORTAMENTALES_5AM09;
    }
    if (state.fcDeckFilter === "topic") {
      const topic = allTopicsFlat.find((t) => t.id === state.activeTopicId) || allTopicsFlat[0];
      return Array.isArray(topic.flashcards) && topic.flashcards.length > 0
        ? topic.flashcards
        : allFlashcardsFlat;
    }
    if (state.fcDeckFilter === "review") {
      const reviewList = allFlashcardsFlat.filter(
        (fc) => state.reviewFlashcards.has(fc.id) || !state.masteredFlashcards.has(fc.id)
      );
      return reviewList.length > 0 ? reviewList : allFlashcardsFlat;
    }
    return allFlashcardsFlat;
  }

  function renderFlashcardStage() {
    const deck = getActiveFlashcardDeck();
    if (deck.length === 0) return;

    if (state.fcCurrentIndex >= deck.length) {
      state.fcCurrentIndex = 0;
    }
    if (state.fcCurrentIndex < 0) {
      state.fcCurrentIndex = deck.length - 1;
    }

    const currentCard = deck[state.fcCurrentIndex];
    const isMastered = state.masteredFlashcards.has(currentCard.id);

    dom.flashcard3d.classList.toggle("is-flipped", state.fcIsFlipped);
    dom.fcFrontCategory.textContent = currentCard.categoria;
    dom.fcFrontStatus.textContent = isMastered ? "Dominada ✓" : "Por dominar";
    dom.fcFrontStatus.className = `fc-status-tag${isMastered ? " is-mastered" : ""}`;
    dom.fcFrontText.textContent = currentCard.frente;
    dom.fcCounterLabel.textContent = `Tarjeta ${state.fcCurrentIndex + 1} de ${deck.length}`;

    dom.fcBackRef.textContent = currentCard.referencia;
    dom.fcBackText.textContent = currentCard.reverso;

    const masteredInDeck = deck.filter((c) => state.masteredFlashcards.has(c.id)).length;
    dom.fcMasteryCounter.textContent = `${masteredInDeck} de ${deck.length} dominadas en este mazo`;
  }

  /* ==========================================================================
     PESTAÑA 5: Simulador de Juicio Situacional + Examen en Caliente + Telemetría
     ========================================================================== */

  function parseOptionString(rawOption, index) {
    const fallbackLetters = ["A", "B", "C", "D"];
    const match = String(rawOption).match(/^([A-D])\)\s*(.*)$/i);
    if (match) {
      return {
        letter: match[1].toUpperCase(),
        text: match[2]
      };
    }
    return {
      letter: fallbackLetters[index] || String(index + 1),
      text: String(rawOption)
    };
  }

  function shuffleArray(sourceArr) {
    const arr = [...sourceArr];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function formatTimeShortMSS(totalSeconds) {
    const safe = Math.max(0, Math.floor(totalSeconds || 0));
    const mins = Math.floor(safe / 60);
    const secs = safe % 60;
    return `${mins}:${String(secs).padStart(2, "0")}`;
  }

  function formatDurationHuman(totalSeconds) {
    const safe = Math.max(0, Math.floor(totalSeconds || 0));
    const mins = Math.floor(safe / 60);
    const secs = safe % 60;
    return `${mins}m ${String(secs).padStart(2, "0")}s`;
  }

  function formatClockHHMMSS(isoStr) {
    if (!isoStr) return "--:--:--";
    try {
      const d = new Date(isoStr);
      if (Number.isNaN(d.getTime())) return "--:--:--";
      return d.toLocaleTimeString("es-CO", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
    } catch (err) {
      return "--:--:--";
    }
  }

  function savePausedSimToStorage() {
    if (!simSession.isActiveExam || !simSession.questions || simSession.questions.length === 0) return;
    try {
      const payload = {
        mode: simSession.mode,
        lengthPreset: simSession.lengthPreset,
        questionIds: simSession.questions.map((q, idx) => q.id || `sim-q${idx + 1}`),
        currentIndex: simSession.currentIndex,
        answers: simSession.answers,
        questionTimes: simSession.questionTimes,
        elapsedSeconds: simSession.elapsedSeconds,
        totalAllowedSeconds: simSession.totalAllowedSeconds,
        startedAtISO: simSession.startedAtISO,
        isPaused: simSession.isPaused,
        savedAtISO: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.PAUSED_SIM, JSON.stringify(payload));
    } catch (err) {
      // Ignorar errores de almacenamiento
    }
  }

  function clearPausedSimFromStorage() {
    try {
      localStorage.removeItem(STORAGE_KEYS.PAUSED_SIM);
    } catch (err) {
      // Ignorar
    }
  }

  function getSavedPausedSimPayload() {
    return loadJSON(STORAGE_KEYS.PAUSED_SIM, null);
  }

  function restoreSimSessionFromPayload(payload) {
    if (!payload || !Array.isArray(payload.questionIds) || payload.questionIds.length === 0) {
      return false;
    }
    const baseQuestions = Array.isArray(simuladorData) ? simuladorData : [];
    const byId = new Map();
    baseQuestions.forEach((q, idx) => {
      byId.set(q.id || `sim-q${idx + 1}`, q);
    });
    const restoredQuestions = payload.questionIds.map((id) => byId.get(id)).filter(Boolean);
    if (restoredQuestions.length === 0) return false;

    simSession.mode = payload.mode || "caliente";
    simSession.lengthPreset = Number(payload.lengthPreset) || restoredQuestions.length;
    simSession.questions = restoredQuestions;
    simSession.currentIndex = Math.min(
      Math.max(0, Number(payload.currentIndex) || 0),
      restoredQuestions.length - 1
    );
    simSession.answers = payload.answers && typeof payload.answers === "object" ? { ...payload.answers } : {};
    simSession.questionTimes =
      payload.questionTimes && typeof payload.questionTimes === "object" ? { ...payload.questionTimes } : {};
    simSession.elapsedSeconds = Math.max(0, Number(payload.elapsedSeconds) || 0);
    simSession.totalAllowedSeconds =
      Number(payload.totalAllowedSeconds) || restoredQuestions.length * 120;
    simSession.startedAtISO = payload.startedAtISO || new Date().toISOString();
    simSession.isActiveExam = true;
    simSession.isPaused = true;
    return true;
  }

  function startSimTimer() {
    if (simSession.timerRunning) return;
    simSession.timerRunning = true;
    simSession.isPaused = false;
    if (dom.simTimerToggleBtn) dom.simTimerToggleBtn.textContent = "Pausar";
    updateLiveTelemetryUI();

    simSession.timerInterval = setInterval(() => {
      simSession.elapsedSeconds += 1;

      const currentQ = simSession.questions[simSession.currentIndex];
      if (currentQ) {
        const qKey = currentQ.id || `sim-q${simSession.currentIndex + 1}`;
        simSession.questionTimes[qKey] = (simSession.questionTimes[qKey] || 0) + 1;
      }

      updateLiveTelemetryUI();
      savePausedSimToStorage();

      // Si el tiempo global llega a 0 en modo Examen en Caliente, calificar automáticamente
      if (
        simSession.mode === "caliente" &&
        simSession.totalAllowedSeconds > 0 &&
        simSession.elapsedSeconds >= simSession.totalAllowedSeconds
      ) {
        showMotivationalToast("✔ Tiempo oficial completado. Calculando resultados del simulacro...");
        renderSimResults();
      }
    }, 1000);
  }

  function pauseSimTimer() {
    simSession.timerRunning = false;
    if (dom.simTimerToggleBtn) dom.simTimerToggleBtn.textContent = "Reanudar";
    if (simSession.timerInterval) {
      clearInterval(simSession.timerInterval);
      simSession.timerInterval = null;
    }
    if (simSession.isActiveExam) {
      savePausedSimToStorage();
    }
  }

  function resetSimTimer() {
    pauseSimTimer();
    simSession.elapsedSeconds = 0;
    if (dom.simTimerDisplay) {
      dom.simTimerDisplay.textContent = formatTimeMMSS(simSession.totalAllowedSeconds || 2400);
    }
  }

  function updateLiveTelemetryUI() {
    const total = simSession.questions.length || simSession.lengthPreset || 20;
    const answeredCount = Object.keys(simSession.answers).length;
    const remainingSeconds = Math.max(0, (simSession.totalAllowedSeconds || total * 120) - simSession.elapsedSeconds);

    if (dom.simTimerDisplay) {
      dom.simTimerDisplay.textContent = formatTimeMMSS(remainingSeconds);
    }
    if (dom.simCountdownPill) {
      dom.simCountdownPill.classList.toggle("is-low-time", remainingSeconds <= 180);
    }
    if (dom.simAnsweredSubtitle) {
      dom.simAnsweredSubtitle.textContent = `${answeredCount} de ${total} respondidas · Progreso guardado`;
    }
    if (dom.simLiveTitle) {
      dom.simLiveTitle.textContent =
        simSession.mode === "caliente"
          ? `🔥 Examen Oficial en Caliente (${total} PJS)`
          : simSession.mode === "errors"
          ? `⚠️ Repaso de Bandeja de Errores (${total} PJS)`
          : `🎓 Práctica Guiada con Pistas (${total} PJS)`;
    }

    // Cronómetro individual de la pregunta activa (🕒 0:16 / 2:00)
    const currentQ = simSession.questions[simSession.currentIndex];
    if (currentQ && dom.simQTimerPill) {
      const qKey = currentQ.id || `sim-q${simSession.currentIndex + 1}`;
      const qSecs = simSession.questionTimes[qKey] || 0;
      dom.simQTimerPill.textContent = `🕒 ${formatTimeShortMSS(qSecs)} / 2:00`;
      dom.simQTimerPill.classList.toggle("is-over-2m", qSecs > 120);
    }

    // Indicador dinámico de ritmo (base 120s por pregunta)
    const divisor = Math.max(1, answeredCount > 0 ? answeredCount : simSession.currentIndex + 1);
    const avgSecs = Math.round(simSession.elapsedSeconds / divisor);

    if (dom.simPaceAvgLive) {
      dom.simPaceAvgLive.textContent = `Promedio actual: ${formatTimeShortMSS(avgSecs)} / preg.`;
    }
    if (dom.simPaceStatus) {
      dom.simPaceStatus.className = "sim-pace-status";
      if (avgSecs <= 120 && remainingSeconds >= (total - answeredCount) * 60) {
        dom.simPaceStatus.classList.add("sim-pace-status--good");
        dom.simPaceStatus.textContent = "● Vas a buen ritmo";
      } else if (avgSecs <= 155) {
        dom.simPaceStatus.classList.add("sim-pace-status--warn");
        dom.simPaceStatus.textContent = "● Ritmo ajustado";
      } else {
        dom.simPaceStatus.classList.add("sim-pace-status--danger");
        dom.simPaceStatus.textContent = "● Cuidado con el tiempo";
      }
    }
  }

  function syncSimHeaderControls() {
    const mode = simSession.mode;
    if (dom.simModeHotBtn) dom.simModeHotBtn.classList.toggle("is-active", mode === "caliente");
    if (dom.simModeAllBtn) dom.simModeAllBtn.classList.toggle("is-active", mode === "all");
    if (dom.simModeErrorsBtn) dom.simModeErrorsBtn.classList.toggle("is-active", mode === "errors");

    if (dom.simLengthBtns) {
      dom.simLengthBtns.forEach((btn) => {
        const len = Number(btn.getAttribute("data-length"));
        btn.classList.toggle("is-active", len === simSession.lengthPreset);
      });
    }

    if (dom.simLengthSelector) {
      dom.simLengthSelector.hidden = mode === "errors";
    }

    if (dom.simTitle && dom.simDescription) {
      if (mode === "caliente") {
        dom.simTitle.textContent = "🔥 Simulacro Real en Caliente · Examen Oficial 5AM-09";
        dom.simDescription.textContent =
          "Preguntas seleccionadas y barajadas de forma 100% aleatoria entre los 7 módulos oficiales. En modo Examen en Caliente las respuestas y explicaciones paso a paso se revelan únicamente al finalizar el intento.";
      } else if (mode === "errors") {
        dom.simTitle.textContent = "⚠️ Entrenamiento Focalizado · Bandeja de Errores";
        dom.simDescription.textContent =
          "Repasa exclusivamente los casos situacionales que has fallado previamente. Cada acierto limpia automáticamente la pregunta de tu Bandeja de Errores.";
      } else {
        dom.simTitle.textContent = "🎓 Práctica Guiada · Retroalimentación Inmediata";
        dom.simDescription.textContent =
          "Entrena con validación inmediata en cada pregunta: al elegir una opción verás al instante la justificación normativa antes de pasar al siguiente ítem.";
      }
    }
  }

  function renderSimLobby() {
    pauseSimTimer();
    syncSimHeaderControls();

    const baseQuestions = Array.isArray(simuladorData) ? simuladorData : [];

    if (simSession.mode === "errors") {
      const errorQuestions = baseQuestions.filter((q, idx) => {
        const qKey = q.id || `sim-q${idx + 1}`;
        return state.failedSimIds.has(qKey);
      });
      if (errorQuestions.length === 0) {
        if (dom.simLobbyCard) dom.simLobbyCard.hidden = true;
        if (dom.simLiveTelemetry) dom.simLiveTelemetry.hidden = true;
        if (dom.simQuestionCard) dom.simQuestionCard.hidden = true;
        if (dom.simResultsCard) dom.simResultsCard.hidden = true;
        if (dom.simEmptyErrorsCard) dom.simEmptyErrorsCard.hidden = false;
        return;
      }
    }

    if (dom.simEmptyErrorsCard) dom.simEmptyErrorsCard.hidden = true;
    if (dom.simLiveTelemetry) dom.simLiveTelemetry.hidden = true;
    if (dom.simQuestionCard) dom.simQuestionCard.hidden = true;
    if (dom.simResultsCard) dom.simResultsCard.hidden = true;
    if (dom.simLobbyCard) dom.simLobbyCard.hidden = false;

    const savedPayload = getSavedPausedSimPayload();
    const hasPausedAttempt =
      savedPayload && Array.isArray(savedPayload.questionIds) && savedPayload.questionIds.length > 0;

    const targetCount =
      simSession.mode === "errors"
        ? Math.max(1, state.failedSimIds.size)
        : Math.min(simSession.lengthPreset || 20, baseQuestions.length || 35);
    const targetMinutes = targetCount * 2;

    if (dom.simLobbyModePill) {
      dom.simLobbyModePill.textContent =
        simSession.mode === "caliente"
          ? "🔥 MODO EXAMEN OFICIAL EN CALIENTE · SIN PISTAS HASTA FINALIZAR"
          : simSession.mode === "errors"
          ? "⚠️ MODO BANDEJA DE ERRORES · REFUERZO DE FALLOS"
          : "🎓 MODO PRÁCTICA GUIADA · CON RETROALIMENTACIÓN INMEDIATA";
    }

    if (dom.simMetricQuestions) {
      dom.simMetricQuestions.textContent = `${targetCount} Preguntas`;
    }
    if (dom.simMetricQuestionsSub) {
      dom.simMetricQuestionsSub.textContent =
        simSession.mode === "errors"
          ? "Ítems pendientes en tu Bandeja de Errores"
          : `Sorteo 100% aleatorio de ${baseQuestions.length} casos (7 módulos)`;
    }
    if (dom.simMetricTime) {
      dom.simMetricTime.textContent = `${targetMinutes} minutos`;
    }
    if (dom.simMetricPass) {
      dom.simMetricPass.textContent = "65% Eliminatorio / 80% Meta";
    }

    if (hasPausedAttempt) {
      const answeredPaused = savedPayload.answers ? Object.keys(savedPayload.answers).length : 0;
      const totalPaused = savedPayload.questionIds.length;
      const remSecs = Math.max(
        0,
        (Number(savedPayload.totalAllowedSeconds) || totalPaused * 120) -
          (Number(savedPayload.elapsedSeconds) || 0)
      );
      const modeLabel =
        savedPayload.mode === "caliente"
          ? "Examen en Caliente"
          : savedPayload.mode === "errors"
          ? "Bandeja de Errores"
          : "Práctica Guiada";

      if (dom.simPausedNotice) dom.simPausedNotice.hidden = false;
      if (dom.simPausedMeta) {
        dom.simPausedMeta.textContent = `Modalidad: ${modeLabel} · Respondidas: ${answeredPaused} de ${totalPaused} · Tiempo restante guardado: ${formatTimeMMSS(
          remSecs
        )}`;
      }
      if (dom.simResumeBtn) dom.simResumeBtn.hidden = false;
      if (dom.simStartBtn) dom.simStartBtn.hidden = true;
    } else {
      if (dom.simPausedNotice) dom.simPausedNotice.hidden = true;
      if (dom.simResumeBtn) dom.simResumeBtn.hidden = true;
      if (dom.simStartBtn) dom.simStartBtn.hidden = false;
    }
  }

  function startNewSimAttempt(modeOverride, lengthOverride) {
    pauseSimTimer();
    if (modeOverride) simSession.mode = modeOverride;
    if (lengthOverride) simSession.lengthPreset = Number(lengthOverride);

    syncSimHeaderControls();

    const baseQuestions = Array.isArray(simuladorData) ? simuladorData : [];
    let selectedQuestions = [];

    if (simSession.mode === "errors") {
      selectedQuestions = shuffleArray(
        baseQuestions.filter((q, idx) => {
          const qKey = q.id || `sim-q${idx + 1}`;
          return state.failedSimIds.has(qKey);
        })
      );
    } else {
      const count = Math.min(simSession.lengthPreset || 20, baseQuestions.length);
      selectedQuestions = shuffleArray(baseQuestions).slice(0, count);
    }

    if (selectedQuestions.length === 0 && simSession.mode === "errors") {
      renderSimLobby();
      return;
    }

    simSession.questions = selectedQuestions;
    simSession.currentIndex = 0;
    simSession.answers = {};
    simSession.questionTimes = {};
    simSession.elapsedSeconds = 0;
    simSession.totalAllowedSeconds = selectedQuestions.length * 120;
    simSession.startedAtISO = new Date().toISOString();
    simSession.finishedAtISO = null;
    simSession.isActiveExam = true;
    simSession.isPaused = false;

    savePausedSimToStorage();

    if (dom.simLobbyCard) dom.simLobbyCard.hidden = true;
    if (dom.simEmptyErrorsCard) dom.simEmptyErrorsCard.hidden = true;
    if (dom.simResultsCard) dom.simResultsCard.hidden = true;
    if (dom.simLiveTelemetry) dom.simLiveTelemetry.hidden = false;
    if (dom.simQuestionCard) dom.simQuestionCard.hidden = false;

    startSimTimer();
    renderSimQuestion();
  }

  function resumePausedSimAttempt() {
    const savedPayload = getSavedPausedSimPayload();
    if (savedPayload) {
      restoreSimSessionFromPayload(savedPayload);
    }
    if (!simSession.questions || simSession.questions.length === 0) {
      startNewSimAttempt(simSession.mode, simSession.lengthPreset);
      return;
    }

    syncSimHeaderControls();
    simSession.isActiveExam = true;
    simSession.isPaused = false;

    if (dom.simLobbyCard) dom.simLobbyCard.hidden = true;
    if (dom.simEmptyErrorsCard) dom.simEmptyErrorsCard.hidden = true;
    if (dom.simResultsCard) dom.simResultsCard.hidden = true;
    if (dom.simLiveTelemetry) dom.simLiveTelemetry.hidden = false;
    if (dom.simQuestionCard) dom.simQuestionCard.hidden = false;

    startSimTimer();
    renderSimQuestion();
  }

  function pauseExamAndShowLobby() {
    simSession.isPaused = true;
    pauseSimTimer();
    savePausedSimToStorage();
    renderSimLobby();
    showMotivationalToast("✔ Examen en pausa. Tus respuestas y tu tiempo quedaron guardados.");
  }

  function initSimuladorSession(mode, autoStart) {
    if (mode) simSession.mode = mode;
    syncSimHeaderControls();

    // Si hay un intento en pausa del mismo modo y no se pidió autoStart forzado, mostrar la tarjeta de inicio/pausa
    if (!autoStart) {
      renderSimLobby();
      return;
    }
    startNewSimAttempt(simSession.mode, simSession.lengthPreset);
  }

  function renderSimJumpGrid() {
    if (!dom.simJumpGrid) return;
    dom.simJumpGrid.innerHTML = "";
    const total = simSession.questions.length;

    simSession.questions.forEach((q, i) => {
      const qKey = q.id || `sim-q${i + 1}`;
      const userAns = simSession.answers[qKey];
      const correctLetter = String(q.respuesta_correcta).toUpperCase();

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sim-jump-btn";
      btn.textContent = String(i + 1);
      btn.setAttribute("aria-label", `Ir a la pregunta ${i + 1}`);

      if (i === simSession.currentIndex) {
        btn.classList.add("is-current");
      }
      if (userAns) {
        btn.classList.add("is-answered");
        if (simSession.mode !== "caliente" && userAns !== correctLetter) {
          btn.classList.add("is-wrong-ans");
        }
      }

      btn.addEventListener("click", () => {
        simSession.currentIndex = i;
        savePausedSimToStorage();
        renderSimQuestion();
      });

      dom.simJumpGrid.appendChild(btn);
    });
  }

  function renderSimQuestion() {
    const total = simSession.questions.length;
    const idx = simSession.currentIndex;
    const qObj = simSession.questions[idx];
    if (!qObj) return;

    const qKey = qObj.id || `sim-q${idx + 1}`;
    const answeredCount = Object.keys(simSession.answers).length;
    const progressPct = total > 0 ? Math.max(4, Math.round((answeredCount / total) * 100)) : 0;
    const isHotMode = simSession.mode === "caliente";

    if (dom.simQuestionCounter) {
      dom.simQuestionCounter.textContent = `Pregunta ${idx + 1} de ${total}`;
    }
    if (dom.simProgressFill) {
      dom.simProgressFill.style.width = `${progressPct}%`;
    }
    if (dom.simQBadge) {
      dom.simQBadge.textContent = `PREGUNTA ${idx + 1} DE ${total}`;
    }
    if (dom.simQModuloTag) {
      dom.simQModuloTag.textContent = `Módulo: ${qObj.modulo}`;
    }
    if (dom.simQPesoTag) {
      dom.simQPesoTag.textContent = qObj.peso_evaluado || "Conocimientos (60% · Eliminatorio)";
    }
    if (dom.simQCompTag) {
      dom.simQCompTag.textContent = qObj.competencia_asociada || "Competencia Funcional 5AM-09";
    }

    dom.simCaseContext.textContent =
      qObj.caso_situacional ||
      "En el ejercicio diario de sus funciones como Auxiliar Administrativo 5AM-09 en la Procuraduría General de la Nación, se presenta la siguiente situación administrativa:";
    dom.simQuestionText.textContent = qObj.pregunta;

    dom.simOptionsGrid.innerHTML = "";
    dom.simJustificationBox.hidden = true;
    dom.simJustificationBox.className = "sim-justification-box";

    const selectedLetter = simSession.answers[qKey];
    const correctLetter = String(qObj.respuesta_correcta).toUpperCase();

    qObj.opciones.forEach((rawOpt, optIdx) => {
      const parsed = parseOptionString(rawOpt, optIdx);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "case-option-btn";
      btn.innerHTML = `
        <span class="case-option-letter">${escapeHTML(parsed.letter)}</span>
        <span>${escapeHTML(rawOpt)}</span>
      `;

      if (selectedLetter) {
        if (isHotMode) {
          if (parsed.letter === selectedLetter) {
            btn.classList.add("is-selected-hot");
          }
        } else {
          if (parsed.letter === correctLetter) {
            btn.classList.add("is-correct");
          } else if (parsed.letter === selectedLetter && selectedLetter !== correctLetter) {
            btn.classList.add("is-wrong");
          }
        }
      }

      btn.addEventListener("click", () => {
        // En Práctica Guiada no se cambia la respuesta una vez revelada; en Examen en Caliente sí puede cambiarla antes de finalizar
        if (!isHotMode && simSession.answers[qKey]) return;

        simSession.answers[qKey] = parsed.letter;

        if (!isHotMode) {
          if (parsed.letter !== correctLetter) {
            state.failedSimIds.add(qKey);
            if (state.simStats) state.simStats.hadErrorsBefore = true;
          } else {
            state.failedSimIds.delete(qKey);
            if (state.simStats && state.simStats.hadErrorsBefore && state.failedSimIds.size === 0) {
              state.simStats.cleanedErrors = true;
            }
          }
          saveState();
          updateErrorTrayCounters();
          evaluateTrophies(true);
        }

        savePausedSimToStorage();
        updateLiveTelemetryUI();
        renderSimQuestion();
      });

      dom.simOptionsGrid.appendChild(btn);
    });

    if (dom.simPrevBtn) {
      dom.simPrevBtn.disabled = idx === 0;
    }

    if (selectedLetter) {
      if (isHotMode) {
        dom.simJustificationBox.hidden = true;
        dom.simNextBtn.disabled = false;
        dom.simActionHint.textContent = `Opción ${selectedLetter} guardada. En Examen en Caliente la calificación y explicación se revelan al finalizar.`;
      } else {
        const isCorrect = selectedLetter === correctLetter;
        dom.simJustificationBox.hidden = false;
        dom.simJustificationBox.classList.add(isCorrect ? "is-correct" : "is-wrong");
        dom.simJustificationStatus.textContent = isCorrect
          ? `✓ ¡Respuesta Correcta! (Opción ${correctLetter})`
          : `✕ Respuesta Incorrecta. Seleccionaste ${selectedLetter} y la opción correcta es la ${correctLetter}. (Agregada a tu Bandeja de Errores)`;
        dom.simJustificationText.textContent = qObj.justificacion;
        dom.simNextBtn.disabled = false;
        dom.simActionHint.textContent =
          idx < total - 1
            ? "Analiza la justificación normativa y avanza al siguiente caso situacional."
            : "Has completado todos los ítems. Haz clic para calcular tu puntaje final.";
      }
      dom.simNextLabel.textContent = idx < total - 1 ? "Siguiente Pregunta" : "Finalizar y Calificar";
    } else {
      dom.simNextBtn.disabled = !isHotMode;
      dom.simActionHint.textContent = isHotMode
        ? "Selecciona una opción (A, B, C o D) o salta a otra pregunta en la cuadrícula inferior."
        : "Selecciona una opción (A, B, C o D) para validar el caso situacional.";
      dom.simNextLabel.textContent = idx < total - 1 ? "Siguiente Pregunta" : "Finalizar y Calificar";
    }

    updateLiveTelemetryUI();
    renderSimJumpGrid();
  }

  function buildStepByStepExplanation(qObj, correctLetter) {
    if (qObj.explicacion_paso_a_paso) {
      return qObj.explicacion_paso_a_paso;
    }
    const distractorNotes = qObj.opciones
      .map((opt, idx) => {
        const parsed = parseOptionString(opt, idx);
        if (parsed.letter === correctLetter) {
          return `• Opción ${parsed.letter} (CORRECTA): Aplica de manera exacta la norma oficial vigente (${qObj.modulo}) y el protocolo funcional del cargo Auxiliar Administrativo 5AM-09.`;
        }
        return `• Opción ${parsed.letter} (DISTRACTOR): Incurre en imprecisión procedimental, extralimitación de funciones o vulneración de términos legales frente al criterio rector del concurso.`;
      })
      .join(" ");

    return `1) Criterio Normativo Rector: ${qObj.justificacion} 2) Descarte Técnico de Opciones: ${distractorNotes}`;
  }

  function renderSimResults() {
    pauseSimTimer();
    simSession.finishedAtISO = new Date().toISOString();
    simSession.isActiveExam = false;
    simSession.isPaused = false;
    clearPausedSimFromStorage();

    if (dom.simLobbyCard) dom.simLobbyCard.hidden = true;
    if (dom.simLiveTelemetry) dom.simLiveTelemetry.hidden = true;
    if (dom.simQuestionCard) dom.simQuestionCard.hidden = true;
    if (dom.simEmptyErrorsCard) dom.simEmptyErrorsCard.hidden = true;
    if (dom.simResultsCard) dom.simResultsCard.hidden = false;

    const total = simSession.questions.length;
    let correctCount = 0;

    simSession.questions.forEach((q, idx) => {
      const qKey = q.id || `sim-q${idx + 1}`;
      const userAns = simSession.answers[qKey];
      const correctLetter = String(q.respuesta_correcta).toUpperCase();
      if (userAns === correctLetter) {
        correctCount += 1;
        state.failedSimIds.delete(qKey);
      } else {
        state.failedSimIds.add(qKey);
        if (state.simStats) state.simStats.hadErrorsBefore = true;
      }
    });

    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const isPassed = percentage >= 65;

    if (!state.simStats) {
      state.simStats = { bestScore: 0, passed65: false, passed80: false, cleanedErrors: false, hadErrorsBefore: false };
    }
    if (percentage > (state.simStats.bestScore || 0)) {
      state.simStats.bestScore = percentage;
    }
    if (isPassed) {
      state.simStats.passed65 = true;
    }
    if (percentage >= 80) {
      state.simStats.passed80 = true;
    }
    if (state.failedSimIds.size === 0 && (percentage === 100 || state.simStats.hadErrorsBefore)) {
      state.simStats.cleanedErrors = true;
    }
    saveState();
    updateErrorTrayCounters();

    if (isPassed) {
      showMotivationalToast(`✔ ¡Simulacro superado con ${percentage}%! Sigue así 💪`);
    }
    evaluateTrophies(true);

    const avgSecondsPerQ = total > 0 ? Math.round(simSession.elapsedSeconds / total) : 0;
    const modeTitle =
      simSession.mode === "caliente"
        ? `Examen Oficial en Caliente (${total} PJS)`
        : simSession.mode === "errors"
        ? `Modo Repaso de Errores (${total} PJS)`
        : `Práctica Guiada (${total} PJS)`;

    dom.simScorePercent.textContent = `${percentage}%`;
    dom.simScoreDetail.textContent = `Obtuviste ${correctCount} de ${total} aciertos (${modeTitle} · Umbral mínimo aprobatorio: 65% Eliminatorio / 80% Meta).`;
    dom.simTimeDetail.textContent = `Tiempo total empleado: ${formatDurationHuman(
      simSession.elapsedSeconds
    )} · Promedio: ${formatDurationHuman(avgSecondsPerQ)} por pregunta.`;

    if (dom.simResStartTime) {
      dom.simResStartTime.textContent = formatClockHHMMSS(simSession.startedAtISO);
    }
    if (dom.simResEndTime) {
      dom.simResEndTime.textContent = formatClockHHMMSS(simSession.finishedAtISO);
    }
    if (dom.simResTotalTime) {
      dom.simResTotalTime.textContent = formatDurationHuman(simSession.elapsedSeconds);
    }
    if (dom.simResAvgTime) {
      dom.simResAvgTime.textContent = `${formatDurationHuman(avgSecondsPerQ)} / preg.`;
    }

    dom.simScoreCircle.className = `sim-score-circle ${isPassed ? "is-passed" : "is-failed"}`;

    // Mensaje de Éxito en Verde (>= 65%) o Alerta de Refuerzo en Rojo (< 65%)
    dom.simEvalBanner.className = `sim-eval-banner ${
      isPassed ? "sim-eval-banner--success" : "sim-eval-banner--danger"
    }`;
    if (isPassed) {
      dom.simEvalBanner.innerHTML = `
        <div class="sim-eval-banner__title">✓ ¡Simulacro Aprobado Satisfactoriamente! (${percentage}% de aciertos)</div>
        <p>Has alcanzado o superado el puntaje mínimo aprobatorio del <strong>65%</strong> exigido para la prueba eliminatoria de Conocimientos (60%) y estás en ruta hacia el <strong>70% ponderado para Lista de Elegibles</strong>.</p>
      `;
    } else {
      dom.simEvalBanner.innerHTML = `
        <div class="sim-eval-banner__title">⚠ Alerta de Refuerzo Académico (${percentage}% de aciertos)</div>
        <p>Tu porcentaje de aciertos es inferior al umbral mínimo del <strong>65%</strong>. Revisa la auditoría de tiempos y la <strong>Explicación Paso a Paso</strong> de cada caso situacional abajo, y usa el botón <strong>"Repasar Mis Errores"</strong> para entrenar las preguntas falladas.</p>
      `;
    }

    // Mostrar botón de repasar errores si hay preguntas en la bandeja de errores
    dom.simPracticeMistakesBtn.hidden = state.failedSimIds.size === 0;
    if (state.failedSimIds.size > 0) {
      dom.simPracticeMistakesBtn.textContent = `Repasar Mis Errores (${state.failedSimIds.size})`;
    }

    // Listado de revisión pregunta por pregunta con tiempo invertido y Explicación Paso a Paso
    dom.simReviewList.innerHTML = "";
    simSession.questions.forEach((q, i) => {
      const qKey = q.id || `sim-q${i + 1}`;
      const userAns = simSession.answers[qKey] || "Sin responder";
      const correctLetter = String(q.respuesta_correcta).toUpperCase();
      const ok = userAns === correctLetter;
      const qTimeSecs = simSession.questionTimes[qKey] || 0;
      const correctOptionFull =
        q.opciones.find((opt, idx) => parseOptionString(opt, idx).letter === correctLetter) || correctLetter;
      const userOptionFull =
        q.opciones.find((opt, idx) => parseOptionString(opt, idx).letter === userAns) || userAns;
      const stepByStep = buildStepByStepExplanation(q, correctLetter);

      const item = document.createElement("div");
      item.className = "sim-review-item";
      item.innerHTML = `
        <div class="sim-review-item__top">
          <div class="sim-review-item__q">${i + 1}. [${escapeHTML(q.modulo)} · ${escapeHTML(
            q.peso_evaluado || "60%"
          )}]</div>
          <span class="sim-review-item__time-badge">🕒 Tiempo en esta pregunta: ${escapeHTML(
            formatDurationHuman(qTimeSecs)
          )}</span>
        </div>
        <div class="sim-review-item__just" style="margin-bottom:0.35rem;">
          <strong>Caso:</strong> ${escapeHTML(q.caso_situacional || "")}<br>
          <strong>Enunciado:</strong> ${escapeHTML(q.pregunta)}
        </div>
        <div class="sim-review-item__ans ${ok ? "is-ok" : "is-bad"}">
          ${ok ? "✓ ACERTADA" : "✕ POR REFORZAR"} · Tu respuesta: ${escapeHTML(
            userOptionFull
          )} · Respuesta Correcta: ${escapeHTML(correctOptionFull)}
        </div>
        <div class="sim-review-item__just"><strong>Justificación Normativa Oficial:</strong> ${escapeHTML(
          q.justificacion
        )}</div>
        <div class="sim-step-by-step-box">
          <strong>🔎 Explicación Paso a Paso (Aplicación de la Norma y Descarte de Distractores)</strong>
          <div>${escapeHTML(stepByStep)}</div>
        </div>
      `;
      dom.simReviewList.appendChild(item);
    });

    dom.mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ==========================================================================
     Modal Oficial "Mi Convocatoria · Cargo 5AM-09"
     ========================================================================== */

  function populateConvocatoriaModal() {
    if (typeof CONVOCATORIA_FICHA === "undefined") return;

    dom.modalCompetenciasList.innerHTML = CONVOCATORIA_FICHA.competenciasComportamentales
      .map(
        (c) => `
        <div class="comp-item-card">
          <div class="comp-item-card__top">
            <span class="comp-item-card__name">${escapeHTML(c.nombre)}</span>
            <span class="comp-item-card__level">${escapeHTML(c.nivel)}</span>
          </div>
          <p class="comp-item-card__desc">${escapeHTML(c.ConductaClave)}</p>
        </div>
      `
      )
      .join("");

    dom.modalFuncionesList.innerHTML = CONVOCATORIA_FICHA.funcionesOficiales
      .map((fn) => `<li>${escapeHTML(fn)}</li>`)
      .join("");
  }

  function openConvocatoriaModal() {
    dom.convocatoriaModal.hidden = false;
  }

  function closeConvocatoriaModal() {
    dom.convocatoriaModal.hidden = true;
  }

  /* ==========================================================================
     Acciones Generales de Usuario y Eventos
     ========================================================================== */

  function selectTopic(topicId) {
    state.activeTopicId = topicId;

    const topicObj = allTopicsFlat.find((t) => t.id === topicId);
    if (topicObj) {
      state.collapsedModules.delete(topicObj.moduleId);
    }
    state.expandedTopics.add(topicId);

    saveState();
    renderModuleTree();
    renderActiveLesson();
    dom.mainContent.scrollTo({ top: 0, behavior: "smooth" });

    if (window.innerWidth <= 980) {
      dom.sidebar.classList.remove("is-open");
    }
  }

  function toggleTopicCompletion(topicId) {
    const wasDone = state.completedTopics.has(topicId);
    if (wasDone) {
      state.completedTopics.delete(topicId);
    } else {
      state.completedTopics.add(topicId);
    }

    saveState();
    updateGlobalProgress();
    renderModuleTree();

    if (!wasDone) {
      showMotivationalToast("✔ ¡Clase completada! Sigue así 💪");
      evaluateTrophies(true);
    }

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
    // 1. Pestañas de Secuencia Guiada (1 a 5)
    dom.studyTabs.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
        const targetTab = tabBtn.getAttribute("data-tab");
        switchTab(targetTab);
      });
    });

    // 2. Modal de Mi Convocatoria (Cargo 5AM-09) y Sala de Trofeos PS5
    dom.openFichaBtn.addEventListener("click", openConvocatoriaModal);
    dom.stripFichaLink.addEventListener("click", openConvocatoriaModal);
    dom.closeFichaModalBtn.addEventListener("click", closeConvocatoriaModal);
    dom.convocatoriaModal.addEventListener("click", (e) => {
      if (e.target === dom.convocatoriaModal) {
        closeConvocatoriaModal();
      }
    });

    if (dom.openTrophiesBtn) {
      dom.openTrophiesBtn.addEventListener("click", openTrophiesModal);
    }
    if (dom.closeTrophiesModalBtn) {
      dom.closeTrophiesModalBtn.addEventListener("click", closeTrophiesModal);
    }
    if (dom.closeTrophiesFooterBtn) {
      dom.closeTrophiesFooterBtn.addEventListener("click", closeTrophiesModal);
    }
    if (dom.trophiesModal) {
      dom.trophiesModal.addEventListener("click", (e) => {
        if (e.target === dom.trophiesModal) {
          closeTrophiesModal();
        }
      });
    }

    dom.modalOpenFuncionesPdf.addEventListener("click", () => {
      closeConvocatoriaModal();
      state.activePdfDocId = "doc-funciones-5am09";
      state.pdfMode = "local";
      goToStep(state.activeTopicId, "tab-pdf");
    });

    dom.modalOpenComprobantePdf.addEventListener("click", () => {
      closeConvocatoriaModal();
      state.activePdfDocId = "doc-comprobante-230688";
      state.pdfMode = "local";
      goToStep(state.activeTopicId, "tab-pdf");
    });

    // 3. Eventos de Pestaña 1 (Lectura Ejecutiva)
    dom.toggleReadBtn.addEventListener("click", () => {
      toggleTopicCompletion(state.activeTopicId);
    });

    dom.goTabVideoBtn.addEventListener("click", () => {
      switchTab("tab-video");
    });

    dom.openSimuladorBtn.addEventListener("click", () => {
      initSimuladorSession("caliente", false);
      switchTab("tab-simulador");
    });

    if (dom.openHotExamBtn) {
      dom.openHotExamBtn.addEventListener("click", () => {
        initSimuladorSession("caliente", false);
        switchTab("tab-simulador");
      });
    }

    if (dom.sidebarHotExamBtn) {
      dom.sidebarHotExamBtn.addEventListener("click", () => {
        initSimuladorSession("caliente", false);
        switchTab("tab-simulador");
        if (window.innerWidth <= 980) {
          dom.sidebar.classList.remove("is-open");
        }
      });
    }

    dom.completeAndNextBtn.addEventListener("click", () => {
      const wasDone = state.completedTopics.has(state.activeTopicId);
      state.completedTopics.add(state.activeTopicId);
      if (!wasDone) {
        showMotivationalToast("✔ ¡Clase completada! Sigue así 💪");
      }
      evaluateTrophies(true);
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

    // 4. Eventos de Pestaña 2 (Videoclases y Apuntes Inteligentes)
    let notesTimeout = null;
    dom.topicNotes.addEventListener("input", (e) => {
      dom.notesStatus.textContent = "Guardando...";
      state.topicNotes[state.activeTopicId] = e.target.value;
      clearTimeout(notesTimeout);
      notesTimeout = setTimeout(() => {
        saveState();
        dom.notesStatus.textContent = "Autoguardado en localStorage ✓";
      }, 300);
    });

    dom.quickNoteBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const snippet = btn.getAttribute("data-snippet") || "";
        const currentVal = dom.topicNotes.value;
        const prefix = currentVal.length > 0 && !currentVal.endsWith("\n") ? "\n" : "";
        dom.topicNotes.value = `${currentVal}${prefix}${snippet}`;
        state.topicNotes[state.activeTopicId] = dom.topicNotes.value;
        saveState();
        dom.notesStatus.textContent = "Etiqueta insertada ✓";
        dom.topicNotes.focus();
      });
    });

    dom.downloadTopicNotesBtn.addEventListener("click", exportCurrentTopicNotes);
    dom.downloadAllNotesBtn.addEventListener("click", exportAllCourseNotes);

    // 5. Eventos de Pestaña 3 (Visor PDF Pantalla Completa)
    dom.pdfFullscreenBtn.addEventListener("click", () => {
      if (dom.pdfViewerContainer.requestFullscreen) {
        dom.pdfViewerContainer.requestFullscreen();
      }
    });

    // 6. Eventos de Pestaña 4 (Flashcards 3D)
    dom.flashcard3d.addEventListener("click", () => {
      state.fcIsFlipped = !state.fcIsFlipped;
      dom.flashcard3d.classList.toggle("is-flipped", state.fcIsFlipped);
    });

    dom.flashcard3d.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        state.fcIsFlipped = !state.fcIsFlipped;
        dom.flashcard3d.classList.toggle("is-flipped", state.fcIsFlipped);
      }
    });

    dom.fcFilterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        dom.fcFilterBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        state.fcDeckFilter = btn.getAttribute("data-deck");
        state.fcCurrentIndex = 0;
        state.fcIsFlipped = false;
        renderFlashcardStage();
      });
    });

    dom.fcPrevBtn.addEventListener("click", () => {
      state.fcCurrentIndex -= 1;
      state.fcIsFlipped = false;
      renderFlashcardStage();
    });

    dom.fcNextBtn.addEventListener("click", () => {
      state.fcCurrentIndex += 1;
      state.fcIsFlipped = false;
      renderFlashcardStage();
    });

    dom.fcMasteredBtn.addEventListener("click", () => {
      const deck = getActiveFlashcardDeck();
      const card = deck[state.fcCurrentIndex];
      if (!card) return;
      const wasMastered = state.masteredFlashcards.has(card.id);
      state.masteredFlashcards.add(card.id);
      state.reviewFlashcards.delete(card.id);
      saveState();
      updateGlobalProgress();
      if (!wasMastered) {
        showMotivationalToast("✔ ¡Flashcard dominada (+20 XP)! Sigue así 💪");
      }
      evaluateTrophies(true);
      state.fcCurrentIndex += 1;
      state.fcIsFlipped = false;
      renderFlashcardStage();
    });

    dom.fcReviewLaterBtn.addEventListener("click", () => {
      const deck = getActiveFlashcardDeck();
      const card = deck[state.fcCurrentIndex];
      if (!card) return;
      state.reviewFlashcards.add(card.id);
      state.masteredFlashcards.delete(card.id);
      saveState();
      updateGlobalProgress();
      state.fcCurrentIndex += 1;
      state.fcIsFlipped = false;
      renderFlashcardStage();
    });

    // 7. Eventos de Pestaña 5 (Simulador Situacional + Examen en Caliente + Telemetría + Bandeja de Errores)
    if (dom.simModeHotBtn) {
      dom.simModeHotBtn.addEventListener("click", () => {
        initSimuladorSession("caliente", false);
      });
    }

    dom.simModeAllBtn.addEventListener("click", () => {
      initSimuladorSession("all", false);
    });

    dom.simModeErrorsBtn.addEventListener("click", () => {
      initSimuladorSession("errors", false);
    });

    if (dom.simLengthBtns) {
      dom.simLengthBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const newLen = Number(btn.getAttribute("data-length")) || 20;
          simSession.lengthPreset = newLen;
          renderSimLobby();
        });
      });
    }

    if (dom.simStartBtn) {
      dom.simStartBtn.addEventListener("click", () => {
        startNewSimAttempt(simSession.mode, simSession.lengthPreset);
      });
    }

    if (dom.simResumeBtn) {
      dom.simResumeBtn.addEventListener("click", () => {
        resumePausedSimAttempt();
      });
    }

    if (dom.simNewRandomBtn) {
      dom.simNewRandomBtn.addEventListener("click", () => {
        clearPausedSimFromStorage();
        startNewSimAttempt(simSession.mode, simSession.lengthPreset);
      });
    }

    if (dom.simPauseBtn) {
      dom.simPauseBtn.addEventListener("click", () => {
        pauseExamAndShowLobby();
      });
    }

    dom.simReturnFullBtn.addEventListener("click", () => {
      initSimuladorSession("caliente", false);
    });

    if (dom.simTimerToggleBtn) {
      dom.simTimerToggleBtn.addEventListener("click", () => {
        if (simSession.timerRunning) {
          pauseExamAndShowLobby();
        } else {
          startSimTimer();
        }
      });
    }

    if (dom.simTimerResetBtn) {
      dom.simTimerResetBtn.addEventListener("click", () => {
        clearPausedSimFromStorage();
        startNewSimAttempt(simSession.mode, simSession.lengthPreset);
      });
    }

    if (dom.simPrevBtn) {
      dom.simPrevBtn.addEventListener("click", () => {
        if (simSession.currentIndex > 0) {
          simSession.currentIndex -= 1;
          savePausedSimToStorage();
          renderSimQuestion();
          dom.mainContent.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }

    if (dom.simFinishExamBtn) {
      dom.simFinishExamBtn.addEventListener("click", () => {
        renderSimResults();
      });
    }

    dom.simNextBtn.addEventListener("click", () => {
      const total = simSession.questions.length;
      if (simSession.currentIndex < total - 1) {
        simSession.currentIndex += 1;
        savePausedSimToStorage();
        renderSimQuestion();
        dom.mainContent.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        renderSimResults();
      }
    });

    dom.simRetryBtn.addEventListener("click", () => {
      clearPausedSimFromStorage();
      startNewSimAttempt(simSession.mode, simSession.lengthPreset);
    });

    dom.simPracticeMistakesBtn.addEventListener("click", () => {
      startNewSimAttempt("errors", state.failedSimIds.size || 10);
    });

    dom.simBackReadingBtn.addEventListener("click", () => {
      switchTab("tab-lectura");
    });

    // 8. Búsqueda y Filtros del Árbol de Módulos
    dom.topicSearch.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderModuleTree();
    });

    dom.filterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const statusFilter = chip.getAttribute("data-filter");
        const moduleFilter = chip.getAttribute("data-module-filter");

        if (statusFilter) {
          // Todos / Pendientes / Leídos (Todos también limpia el filtro de módulo)
          state.filterStatus = statusFilter;
          if (statusFilter === "all") state.moduleFilter = null;
        } else if (moduleFilter !== null) {
          const idx = Number(moduleFilter);
          state.moduleFilter = state.moduleFilter === idx ? null : idx;
          if (state.moduleFilter !== null) state.collapsedModules.delete(COURSE_DATA.modules[idx].id);
        }

        dom.filterChips.forEach((c) => {
          const cStatus = c.getAttribute("data-filter");
          const cMod = c.getAttribute("data-module-filter");
          const active = cStatus
            ? cStatus === state.filterStatus && !(cStatus === "all" && state.moduleFilter !== null)
            : Number(cMod) === state.moduleFilter;
          c.classList.toggle("is-active", active);
        });
        renderModuleTree();
      });
    });

    // 10. Barra inferior de pasos (delegación en los 5 paneles)
    dom.stepNavs.forEach((nav) => {
      nav.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-step-dir]");
        if (btn && !btn.disabled) handleStepNavClick(btn.getAttribute("data-step-dir"));
      });
    });

    // 11. Pestaña 2: reproductor personal y lista de videos
    dom.userVideoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleUserVideoPlay();
    });
    dom.userVideoSaveBtn.addEventListener("click", handleUserVideoSave);

    // 12. Pestaña 3: modos Documentos locales / Fichas de normas y salida a Lectura
    dom.pdfModeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        state.pdfMode = btn.getAttribute("data-pdf-mode");
        const first = BIBLIOTECA_NORMOGRAMA.find((d) => (d.tipo === "local-pdf") === (state.pdfMode === "local"));
        if (first) state.activePdfDocId = first.id;
        renderPdfLibrary();
      });
    });
    dom.pdfBackLecturaBtn.addEventListener("click", () => switchTab("tab-lectura"));
    // 9. Modo Nocturno y Reinicio General
    dom.themeToggle.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });

    dom.resetProgressBtn.addEventListener("click", () => {
      const confirmReset = window.confirm(
        "¿Deseas reiniciar el progreso de temas leídos, flashcards dominadas y bandeja de errores? (Tus apuntes personales se conservarán)."
      );
      if (!confirmReset) return;
      state.completedTopics.clear();
      state.stepsDone.clear();
      state.solvedCases = {};
      state.masteredFlashcards.clear();
      state.reviewFlashcards.clear();
      state.failedSimIds.clear();
      state.unlockedTrophies.clear();
      state.simStats = { bestScore: 0, passed65: false, passed80: false, cleanedErrors: false, hadErrorsBefore: false };
      clearPausedSimFromStorage();
      simSession.isActiveExam = false;
      simSession.isPaused = false;
      saveState();
      updateGlobalProgress();
      renderModuleTree();
      renderActiveLesson();
      initSimuladorSession("caliente", false);
    });

    dom.sidebarToggle.addEventListener("click", () => {
      dom.sidebar.classList.toggle("is-open");
    });
  }

  /* ==========================================================================
     Inicialización
     ========================================================================== */

  function init() {
    applyTheme(state.theme);
    state.expandedTopics.add(state.activeTopicId);
    populateConvocatoriaModal();
    bindEvents();
    evaluateTrophies(false);
    updateGlobalProgress();
    renderModuleTree();
    renderActiveLesson();
    renderPdfLibrary();

    const savedPaused = getSavedPausedSimPayload();
    if (savedPaused) {
      restoreSimSessionFromPayload(savedPaused);
    }
    renderSimLobby();
    switchTab(state.activeTabId);
  }

  init();
})();
