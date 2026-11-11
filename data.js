/**
 * Base de Conocimiento Curricular Interactiva - Convocatoria Procuraduría General de la Nación (243 - 2026)
 * Empleo: Auxiliar Administrativo (Código 5AM-09) · Radicado #230688 (ADMITIDO)
 * Arquitectura 5 Pestañas:
 *  1. Lectura Ejecutiva y Trampas
 *  2. Videoclases y Apuntes Inteligentes
 *  3. Biblioteca y Visor PDF (Normograma)
 *  4. Laboratorio Activo (Flashcards 3D)
 *  5. Simulador de Juicio Situacional + Bandeja de Errores
 */

const CONVOCATORIA_FICHA = {
  convocatoria: "Convocatoria 243 - 2026 · Procuraduría General de la Nación",
  cargo: "Auxiliar Administrativo",
  codigo: "5AM-09",
  asignacionBasica: "$4.565.448",
  vacantes: "26 vacantes (incluyendo Regional Atlántico)",
  radicado: "#230688",
  estadoInscripcion: "ADMITIDO",
  minimoListaElegibles: "Mínimo 70% ponderado total para Lista de Elegibles",
  pesosExamen: [
    {
      prueba: "Prueba de Conocimientos",
      peso: "60%",
      caracter: "Eliminatorio",
      puntajeMinimo: "65 / 100",
      badgeClass: "peso-badge--eliminatorio"
    },
    {
      prueba: "Competencias Comportamentales",
      peso: "20%",
      caracter: "Clasificatorio",
      puntajeMinimo: "Clasificatorio",
      badgeClass: "peso-badge--clasificatorio"
    },
    {
      prueba: "Valoración de Antecedentes",
      peso: "20%",
      caracter: "Clasificatorio",
      puntajeMinimo: "Clasificatorio",
      badgeClass: "peso-badge--clasificatorio"
    }
  ],
  competenciasComportamentales: [
    {
      nombre: "Orientación al Usuario",
      nivel: "Nivel B",
      ConductaClave:
        "Escucha activamente, comprende las necesidades del ciudadano, radica y orienta con trato respetuoso, lenguaje claro y enfoque diferencial sin dilaciones."
    },
    {
      nombre: "Organización del Trabajo",
      nivel: "Nivel C",
      ConductaClave:
        "Clasifica, ordena y archiva la documentación aplicando las TRD, el principio de orden original y priorizando tareas según términos legales perentorios."
    },
    {
      nombre: "Responsabilidad",
      nivel: "Nivel C",
      ConductaClave:
        "Asume las consecuencias de sus actos, verifica la exactitud de los radicados y folios, y protege la reserva legal y confidencialidad de los expedientes."
    },
    {
      nombre: "Gestión de Recursos",
      nivel: "Nivel D",
      ConductaClave:
        "Custodia y utiliza racionalmente los bienes de consumo y devolutivos asignados, formalizando todo movimiento mediante comprobantes de almacén."
    },
    {
      nombre: "Cumplimiento",
      nivel: "Nivel D",
      ConductaClave:
        "Acatamiento estricto de los procedimientos institucionales, términos de la Ley 1755 de 2015, protocolos de archivo AGN y metas de la dependencia."
    }
  ],
  funcionesOficiales: [
    "1. Recibir, radicar, clasificar, distribuir y controlar las comunicaciones oficiales y correspondencia de la dependencia conforme al Acuerdo AGN 060 de 2001.",
    "2. Organizar, foliar, depurar y conservar los expedientes del Archivo de Gestión aplicando el principio de orden original y las Tablas de Retención Documental (TRD).",
    "3. Preparar técnicamente las transferencias documentales primarias hacia el Archivo Central diligenciando el Formato Único de Inventario Documental (FUID).",
    "4. Brindar atención presencial, telefónica y virtual al ciudadano y a los sujetos procesales con trato respetuoso, enfoque diferencial y orientación clara sobre trámites y PQRSDF.",
    "5. Controlar los términos legales de respuesta de los derechos de petición (Ley 1755 de 2015) generando alertas preventivas para evitar silencios administrativos o faltas disciplinarias.",
    "6. Recibir, almacenar, custodiar y controlar racionalmente los bienes de consumo (papelería, insumos) y bienes devolutivos asignados a la oficina.",
    "7. Tramitar oportunamente los comprobantes de entrada, salida, traslado y reintegro de bienes ante el Grupo de Almacén e Inventarios y participar en las tomas físicas.",
    "8. Elaborar oficios, memorandos, actas, constancias y cuadros de control empleando procesadores de texto, combinación de correspondencia y hojas de cálculo.",
    "9. Registrar y actualizar de manera íntegra las actuaciones y movimientos de expedientes en los sistemas de información institucionales (SIGDEA / SIM).",
    "10. Aplicar las políticas de seguridad de la información (escritorio limpio, pantalla limpia, reserva legal) y desempeñar las demás funciones asignadas según la naturaleza del cargo."
  ]
};

/**
 * Catálogo Global de Documentos Oficiales para la Pestaña 3 (Biblioteca y Visor PDF - Normograma)
 */
const BIBLIOTECA_NORMOGRAMA = [
  {
    id: "doc-funciones-5am09",
    categoria: "Documento Oficial Mi Concurso",
    titulo: "Manual de Funciones y Competencias · Auxiliar Administrativo (5AM-09)",
    subtitulo: "Archivo local en repositorio: docs/PROCURADURIA_FUNCIONES.pdf",
    descripcion:
      "Contiene las 10 funciones esenciales del empleo Código 5AM-09, requisitos de estudio/experiencia y las 5 competencias comportamentales evaluables.",
    tipo: "local-pdf",
    url: "docs/PROCURADURIA_FUNCIONES.pdf",
    urlExterna: "docs/PROCURADURIA_FUNCIONES.pdf",
    destacado: true
  },
  {
    id: "doc-comprobante-230688",
    categoria: "Documento Oficial Mi Concurso",
    titulo: "Comprobante Oficial de Inscripción · Radicado #230688 (ADMITIDO)",
    subtitulo: "Archivo local en repositorio: docs/COMPROBANTE_230688.pdf",
    descripcion:
      "Soporte oficial de inscripción y admisión en la Convocatoria 243-2026 para el cargo Auxiliar Administrativo 5AM-09 (26 vacantes, incluye Regional Atlántico).",
    tipo: "local-pdf",
    url: "docs/COMPROBANTE_230688.pdf",
    urlExterna: "docs/COMPROBANTE_230688.pdf",
    destacado: true
  },
  {
    id: "doc-ley-594-2000",
    categoria: "Normograma Gestión Documental",
    titulo: "Ley 594 de 2000 · Ley General de Archivos de Colombia",
    subtitulo: "Función Pública / Archivo General de la Nación (AGN)",
    descripcion:
      "Marco rector de la función archivística: principios de procedencia y orden original, ciclo vital del documento (Gestión, Central e Histórico) y Tablas de Retención (TRD).",
    tipo: "norma-oficial",
    url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=4275",
    urlExterna: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4275",
    resumenArticulos: [
      "Art. 4: Principios generales (Procedencia, Orden Original, Ciclo Vital, Racionalidad, Modernización).",
      "Art. 23: Formación de archivos según el ciclo vital (Archivo de Gestión, Archivo Central y Archivo Histórico).",
      "Art. 24: Obligatoriedad de las Tablas de Retención Documental (TRD) para todas las entidades del Estado."
    ]
  },
  {
    id: "doc-ley-1755-2015",
    categoria: "Normograma Atención al Usuario",
    titulo: "Ley 1755 de 2015 · Derecho Fundamental de Petición (CPACA)",
    subtitulo: "Función Pública · Sustituye Título II de la Ley 1437 de 2011",
    descripcion:
      "Regula los términos perentorios (15 días general, 10 días información/documentos, 30 días consultas, 5 días traslado por falta de competencia), peticiones incompletas y reserva legal.",
    tipo: "norma-oficial",
    url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=65334",
    urlExterna: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65334",
    resumenArticulos: [
      "Art. 14: Términos para resolver las distintas modalidades de peticiones (15, 10 y 30 días hábiles).",
      "Art. 17: Peticiones incompletas (10 días para requerir, 1 mes para que el ciudadano complete).",
      "Art. 21: Funcionario sin competencia (remisión al competente en máximo 5 días hábiles).",
      "Art. 31: Falta disciplinaria por desatención a las peticiones y a los términos para resolver."
    ]
  },
  {
    id: "doc-decreto-262-2000",
    categoria: "Normograma Estructura PGN",
    titulo: "Decreto Ley 262 de 2000 · Estructura y Organización de la PGN",
    subtitulo: "Función Pública · Modificado por Decreto Ley 1851 de 2021",
    descripcion:
      "Establece la estructura orgánica de la Procuraduría General de la Nación, funciones preventivas, de intervención judicial/administrativa y disciplinarias en el nivel central y territorial.",
    tipo: "norma-oficial",
    url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=4073",
    urlExterna: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4073",
    resumenArticulos: [
      "Art. 2 y 7: Funciones del Procurador General de la Nación como supremo director del Ministerio Público.",
      "Art. 24, 75 y 76: Funciones preventivas, de intervención y disciplinarias en Procuradurías Regionales, Distritales y Provinciales."
    ]
  }
];

/**
 * Accesos directos oficiales (AGN / Función Pública / PGN) para la Pestaña 2 (Videoclases).
 * Son enlaces externos de un clic: no se incrustan, por lo que no dependen de iframes ni de file://.
 */
const RECURSOS_OFICIALES_VIDEO = [
  {
    titulo: "Archivo General de la Nación (AGN)",
    descripcion: "Acuerdos, guías y capacitaciones oficiales de gestión documental, TRD/TVD y ciclo vital.",
    url: "https://www.archivogeneral.gov.co"
  },
  {
    titulo: "AGN en YouTube (clases y webinars)",
    descripcion: "Búsqueda directa de las videoclases institucionales publicadas por el AGN.",
    url: "https://www.youtube.com/results?search_query=Archivo+General+de+la+Naci%C3%B3n+Colombia+capacitaci%C3%B3n+gesti%C3%B3n+documental"
  },
  {
    titulo: "Función Pública · Gestor Normativo",
    descripcion: "Texto oficial y vigente de leyes, decretos y circulares del concurso.",
    url: "https://www.funcionpublica.gov.co/eva/gestornormativo/"
  },
  {
    titulo: "Función Pública en YouTube",
    descripcion: "Clases sobre derecho de petición, servicio al ciudadano y empleo público.",
    url: "https://www.youtube.com/results?search_query=Funci%C3%B3n+P%C3%BAblica+Colombia+derecho+de+petici%C3%B3n+servicio+al+ciudadano"
  },
  {
    titulo: "Procuraduría General de la Nación",
    descripcion: "Portal institucional: estructura, Régimen Disciplinario y Carrera Administrativa.",
    url: "https://www.procuraduria.gov.co"
  }
];

/**
 * Mazo Especial de Flashcards 3D de Competencias Comportamentales (Cargo 5AM-09 · 20%)
 */
const FLASHCARDS_COMPORTAMENTALES_5AM09 = [
  {
    id: "fc-comp-1",
    categoria: "Competencia Comportamental · 20%",
    frente: "Orientación al Usuario y al Ciudadano (Nivel B — Cargo 5AM-09)",
    reverso:
      "Conducta observable en el examen: Recibir y radicar toda solicitud con trato cortés, lenguaje claro y enfoque diferencial; orientar sobre los requisitos y el trámite sin rechazar escritos en ventanilla ni asumir funciones de fallo.",
    referencia: "Manual de Funciones 5AM-09 · Peso Comportamental 20%"
  },
  {
    id: "fc-comp-2",
    categoria: "Competencia Comportamental · 20%",
    frente: "Organización del Trabajo (Nivel C — Cargo 5AM-09)",
    reverso:
      "Conducta observable en el examen: Planificar las labores diarias priorizando términos próximos a vencer, mantener los expedientes foliados y ordenados cronológicamente (Orden Original) y aplicar las TRD sin acumular rezagos.",
    referencia: "Manual de Funciones 5AM-09 · Peso Comportamental 20%"
  },
  {
    id: "fc-comp-3",
    categoria: "Competencia Comportamental · 20%",
    frente: "Responsabilidad (Nivel C — Cargo 5AM-09)",
    reverso:
      "Conducta observable en el examen: Responder por la veracidad de los registros en SIGDEA/SIM, salvaguardar la reserva de las actuaciones disciplinarias y reportar de inmediato cualquier inconsistencia o pérdida documental.",
    referencia: "Manual de Funciones 5AM-09 · Peso Comportamental 20%"
  },
  {
    id: "fc-comp-4",
    categoria: "Competencia Comportamental · 20%",
    frente: "Gestión de Recursos (Nivel D — Cargo 5AM-09)",
    reverso:
      "Conducta observable en el examen: Emplear los bienes de consumo y devolutivos exclusivamente para fines del servicio, verificar físicamente los materiales recibidos y exigir/firmar siempre el comprobante de salida o traslado de almacén.",
    referencia: "Manual de Funciones 5AM-09 · Peso Comportamental 20%"
  },
  {
    id: "fc-comp-5",
    categoria: "Competencia Comportamental · 20%",
    frente: "Cumplimiento (Nivel D — Cargo 5AM-09)",
    reverso:
      "Conducta observable en el examen: Ceñirse estrictamente a los reglamentos, plazos legales (Ley 1755 de 2015) y acuerdos del AGN (060 de 2001 y 042 de 2002), evitando atajos informales como reservar números de radicado.",
    referencia: "Manual de Funciones 5AM-09 · Peso Comportamental 20%"
  }
];

const COURSE_DATA = {
  convocatoria: "Convocatoria 243 - 2026",
  entidad: "Procuraduría General de la Nación",
  programa: "Academia Interactiva · Auxiliar Administrativo 5AM-09",
  modules: [
    {
      id: "mod-gestion-documental",
      code: "MÓDULO I",
      title: "Gestión Documental y Archivo Institucional",
      subtitle: "Ley 594 de 2000, TRD/TVD, Acuerdo 060/2001, Acuerdo 042/2002 y los 8 procesos",
      icon: "folder-archive",
      topics: [
        {
          id: "gd-101",
          code: "1.1",
          title: "Ley General de Archivos (Ley 594 de 2000) y Principios Archivísticos",
          duration: "15 min",
          priority: "Esencial",
          normativa: ["Ley 594 de 2000", "Decreto 1080 de 2015", "Acuerdo AGN 001 de 2024"],
          summary:
            "Fundamentos rectores de la función archivística en el Estado colombiano: principios de procedencia y orden original, ciclo vital de los documentos y categorización de los archivos institucionales en la Procuraduría.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Procedencia vs. Orden Original",
            alerta:
              "En los exámenes de mérito suelen intercambiar las definiciones de 'Principio de Procedencia' y 'Principio de Orden Original'. Recuerda la regla infalible: PROCEDENCIA responde a QUIÉN produjo el documento (entidad/dependencia productora, no mezclar fondos), mientras que ORDEN ORIGINAL responde al CÓMO y CUÁNDO se dispusieron físicamente las piezas dentro del expediente (respetar la secuencia cronológica natural del trámite)."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #2 y #3)",
            descripcion:
              "Como Auxiliar Administrativo 5AM-09 en una Procuraduría Regional (ej. Regional Atlántico), cuando recibas un auto de apertura, las citaciones y las constancias de notificación de un proceso disciplinario, debes archivarlos dentro de la misma unidad documental (expediente) en el estricto orden cronológico en que se produjeron. Jamás debes armar una carpeta suelta de 'solo oficios' y otra de 'solo autos'."
          },
          sections: [
            {
              heading: "1. Los Dos Principios Fundamentales de la Archivística",
              body: "Toda actuación en los archivos de la Procuraduría General de la Nación se rige por dos principios innegociables que garantizan la integridad probatoria y administrativa de los expedientes:",
              bullets: [
                "Principio de Procedencia: Cada documento debe conservarse en el fondo documental al que naturalmente pertenece, sin mezclarse con documentos producidos por otras dependencias o entidades. Permite saber quién produjo el documento y en ejercicio de qué competencia.",
                "Principio de Orden Original: La disposición física y cronológica de los documentos dentro de cada expediente debe respetar estrictamente la secuencia de los trámites que les dieron origen (de acuerdo con el procedimiento administrativo o disciplinario)."
              ]
            },
            {
              heading: "2. El Ciclo Vital del Documento y las Tres Edades del Archivo",
              body: "Desde su creación o recepción hasta su disposición final, los documentos atraviesan tres fases articuladas con sus valores primarios y secundarios:",
              table: {
                headers: ["Fase de Archivo", "Valores Predominantes", "Frecuencia de Consulta", "Responsable / Ubicación"],
                rows: [
                  [
                    "Archivo de Gestión (1ª Edad)",
                    "Valores Primarios (Administrativo, Legal, Fiscal, Contable, Técnico)",
                    "Alta y constante (trámite activo)",
                    "Productor en la dependencia / Auxiliar Administrativo 5AM-09"
                  ],
                  [
                    "Archivo Central (2ª Edad)",
                    "Valores Primarios en disminución / Precaución jurídica",
                    "Media o esporádica (consulta por las partes o control)",
                    "Grupo de Gestión Documental / Archivo Central de la entidad"
                  ],
                  [
                    "Archivo Histórico (3ª Edad)",
                    "Valores Secundarios (Histórico, Cultural, Científico, Investigativo)",
                    "Permanente para memoria institucional y ciudadanía",
                    "Archivo Histórico / Transferencia secundaria definitiva"
                  ]
                ]
              }
            },
            {
              heading: "3. Agrupaciones Documentales Jerárquicas",
              body: "La organización técnica de un archivo público responde a una estructura jerárquica estandarizada:",
              callout: {
                type: "norma",
                title: "Secuencia Jerárquica Documental (De mayor a menor)",
                text: "Fondo Documental (Entidad: PGN) → Subfondo / Sección (Dependencia productora: ej. Procuraduría Regional Atlántico) → Subsección (Grupo interno de trabajo) → Serie Documental (Conjunto de unidades homogéneas: ej. Procesos Disciplinarios) → Subserie → Unidad Documental Compleja (Expediente) → Unidad Documental Simple (Pieza / Folio)."
              }
            }
          ],
          keyPoints: [
            "Los valores primarios interesan a la propia administración (administrativo, legal, fiscal, contable); los secundarios interesan a la historia, ciencia y cultura.",
            "Nunca se deben organizar expedientes por tipo de documento aislado ('carpeta de oficios enviados', 'carpeta de memorandos'); siempre se conforman por serie/asunto respetando el Orden Original.",
            "Los documentos públicos son inalienables, imprescriptibles e inembargables."
          ],
          videos: [
            {
              titulo: "Ley 594 de 2000 · Ley General de Archivos y Ciclo Vital Documental",
              canal: "Archivo General de la Nación Colombia",
              duracion: "14:20",
              searchUrl: "https://www.youtube.com/results?search_query=Ley+594+de+2000+principios+archivisticos+ciclo+vital+AGN"
            },
            {
              titulo: "Principio de Procedencia y Principio de Orden Original Explicados con Casos",
              canal: "Capacitación Gestión Documental Pública",
              duracion: "11:45",
              searchUrl: "https://www.youtube.com/results?search_query=principio+de+procedencia+y+orden+original+archivistica+colombia"
            }
          ],
          flashcards: [
            {
              id: "fc-gd101-1",
              categoria: "Ley 594 de 2000",
              frente: "¿Qué establece el Principio de Orden Original?",
              reverso:
                "Establece que los documentos dentro de un expediente deben conservar la disposición física y secuencia cronológica en que fueron producidos durante el trámite que les dio origen.",
              referencia: "Art. 4 Ley 594 de 2000"
            },
            {
              id: "fc-gd101-2",
              categoria: "Ley 594 de 2000",
              frente: "¿Qué establece el Principio de Procedencia?",
              reverso:
                "Establece que cada documento debe conservarse en el fondo documental y dependencia productora a la que naturalmente pertenece, sin mezclarse con los de otras entidades u oficinas.",
              referencia: "Art. 4 Ley 594 de 2000"
            },
            {
              id: "fc-gd101-3",
              categoria: "Ciclo Vital Documental",
              frente: "¿Cuáles son las 3 fases del archivo según el ciclo vital del documento (Art. 23 Ley 594)?",
              reverso:
                "1) Archivo de Gestión (trámite activo en la oficina), 2) Archivo Central (consulta esporádica tras finalizar trámite) y 3) Archivo Histórico (conservación permanente por valor secundario).",
              referencia: "Art. 23 Ley 594 de 2000"
            },
            {
              id: "fc-gd101-4",
              categoria: "Valores Documentales",
              frente: "¿Cuáles son los Valores Primarios vs. los Valores Secundarios de un documento?",
              reverso:
                "Primarios: Administrativo, Legal, Fiscal, Contable y Técnico (interesan a la entidad productora). Secundarios: Histórico, Cultural, Científico e Investigativo (interesan a la sociedad y memoria colectiva).",
              referencia: "Acuerdo AGN 001 de 2024"
            }
          ],
          caseQuestion: {
            stem: "Un funcionario recién vinculado a una Procuraduría Regional decide reorganizar los expedientes disciplinarios activos extrayendo todos los oficios remisores para guardarlos en una AZ independiente denominada 'Oficios Despachados 2026', dejando los autos en otra carpeta. Desde el punto de vista técnico archivístico, esta actuación:",
            options: [
              "Es correcta porque facilita el conteo estadístico mensual de comunicaciones enviadas por la dependencia.",
              "Vulnera directamente el Principio de Orden Original y fragmenta la integridad de la unidad documental compleja (expediente).",
              "Solo vulnera el Principio de Procedencia al mezclar fondos documentales de distintas entidades.",
              "Está permitida en el Archivo de Gestión siempre que se restablezca el orden antes de la transferencia al Archivo Central."
            ],
            correctIndex: 1,
            explanation: "Separar los oficios de los autos que hacen parte de un mismo trámite o actuación rompe la secuencia lógica y cronológica en que se produjeron los documentos, vulnerando el Principio de Orden Original y desarticulando el expediente (unidad documental compleja)."
          }
        },
        {
          id: "gd-102",
          code: "1.2",
          title: "Tablas de Retención Documental (TRD), TVD y Foliación (Acuerdo 042 de 2002)",
          duration: "18 min",
          priority: "Esencial",
          normativa: ["Acuerdo AGN 004 de 2019", "Acuerdo AGN 042 de 2002", "Ley 594 de 2000 Art. 24"],
          summary:
            "Instrumentos archivísticos esenciales para determinar tiempos de permanencia en cada fase del archivo, disposición final de las series y reglas técnicas de foliación física.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Conteo de Retención y Esquina de Foliación",
            alerta:
              "Trampa 1: Confundir TRD (producción actual y futura) con TVD (fondos acumulados antiguos). Trampa 2: Creer que los años de retención en la TRD se cuentan desde que se abre la carpeta; ¡SIEMPRE se cuentan desde el CIERRE definitivo del trámite! Trampa 3: La foliación siempre va en la esquina SUPERIOR DERECHA de la cara recta del folio con lápiz de mina negra (HB o B), nunca en la esquina inferior ni con esfero de tinta húmeda."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #2 y #3)",
            descripcion:
              "El Auxiliar Administrativo 5AM-09 es el responsable directo de foliar los expedientes en la esquina superior derecha, depurar duplicados o ganchos metálicos oxidados y diligenciar el Formato Único de Inventario Documental (FUID) cuando se cumplen los tiempos de la TRD para transferir del Archivo de Gestión al Archivo Central."
          },
          sections: [
            {
              heading: "1. Diferencia Técnica entre TRD y TVD",
              body: "En las pruebas de mérito suele evaluarse la distinción exacta entre cuándo aplicar una Tabla de Retención Documental (TRD) y cuándo una Tabla de Valoración Documental (TVD):",
              table: {
                headers: ["Criterio", "Tabla de Retención Documental (TRD)", "Tabla de Valoración Documental (TVD)"],
                rows: [
                  [
                    "Ámbito de Aplicación",
                    "Producción documental actual y futura (gestión cotidiana vigente)",
                    "Fondos acumulados (documentación antigua producida sin TRD previa)"
                  ],
                  [
                    "Punto de Partida",
                    "Estructura orgánica vigente y funciones actuales de la entidad",
                    "Reconstrucción histórica de estructuras orgánicas anteriores"
                  ],
                  [
                    "Etapas que regula",
                    "Archivo de Gestión → Archivo Central → Disposición Final",
                    "Archivo Central / Fondo Acumulado → Disposición Final"
                  ]
                ]
              }
            },
            {
              heading: "2. Opciones de Disposición Final en la TRD",
              body: "Al cumplirse el tiempo de retención en el Archivo Central, la TRD establece cuál es el destino técnico de la serie o subserie:",
              bullets: [
                "CT (Conservación Total): Se aplica a documentos que adquieren valores secundarios (históricos, científicos o culturales). Pasan de manera definitiva al Archivo Histórico.",
                "E (Eliminación): Destrucción técnica autorizada de documentos que han perdido totalmente sus valores primarios y carecen de valores secundarios. Requiere Acta de Eliminación aprobada y publicación previa del inventario.",
                "S (Selección): Muestreo técnico (cualitativo o cuantitativo) mediante el cual se conserva una fracción representativa de una serie voluminosa y se elimina el resto.",
                "M / D (Microfilmación o Digitalización): Procedimiento de reprografía técnica con fines de preservación y consulta para complementar la Conservación Total o Selección."
              ]
            },
            {
              heading: "3. Reglas Oficiales de Foliación (Acuerdo AGN 042 de 2002)",
              body: "La foliación es el acto de numerar las hojas (folios) por su cara recta (anverso) y es requisito indispensable para cualquier transferencia documental y para garantizar que ninguna pieza sea sustraída o añadida irregularmente:",
              callout: {
                type: "alerta",
                title: "Protocolo Técnico de Foliación Física",
                text: "Se numera de manera consecutiva (1, 2, 3...) en la ESQUINA SUPERIOR DERECHA de la cara recta del folio, en el mismo sentido del texto, utilizando lápiz de mina negra blanda (HB o B). Si existe un error de foliación, se anula trazando una línea oblicua (/) sobre el número equivocado y registrando la constancia; nunca se usa corrector líquido ni se arrancan hojas."
              }
            }
          ],
          keyPoints: [
            "Ningún servidor público puede eliminar documentos públicos por iniciativa propia; toda eliminación debe estar prevista en la TRD/TVD y contar con acta e inventario publicado.",
            "Las transferencias documentales primarias (del Archivo de Gestión al Central) deben realizarse estrictamente según el cronograma anual y usando el FUID.",
            "La foliación se realiza en la esquina superior derecha de la cara recta del folio con lápiz de mina negra HB o B."
          ],
          videos: [
            {
              titulo: "Tablas de Retención Documental (TRD) vs. Tablas de Valoración (TVD)",
              canal: "Archivo General de la Nación Colombia",
              duracion: "16:10",
              searchUrl: "https://www.youtube.com/results?search_query=Tablas+de+Retencion+Documental+TRD+y+TVD+Archivo+General+de+la+Nacion"
            },
            {
              titulo: "Guía Práctica de Foliación Documental y Diligenciamiento del FUID",
              canal: "Formación Archivística Colombia",
              duracion: "12:30",
              searchUrl: "https://www.youtube.com/results?search_query=como+foliar+expedientes+archivo+general+de+la+nacion+acuerdo+042+de+2002"
            }
          ],
          flashcards: [
            {
              id: "fc-gd102-1",
              categoria: "Instrumentos Archivísticos",
              frente: "¿Qué diferencia a la TRD de la TVD?",
              reverso:
                "La TRD asigna tiempos de permanencia y disposición final a los documentos actuales y futuros; la TVD se aplica a fondos acumulados antiguos producidos sin TRD.",
              referencia: "Acuerdo AGN 004 de 2019"
            },
            {
              id: "fc-gd102-2",
              categoria: "Acuerdo 042 de 2002",
              frente: "¿En qué lugar exacto de la hoja se realiza la foliación y con qué implemento?",
              reverso:
                "En la esquina superior derecha de la cara recta (anverso) del folio, en el sentido del texto, utilizando lápiz de mina negra tipo HB o B.",
              referencia: "Acuerdo AGN 042 de 2002"
            },
            {
              id: "fc-gd102-3",
              categoria: "Retención Documental",
              frente: "¿Desde qué momento empiezan a contarse los años de retención de un expediente en la TRD?",
              reverso:
                "A partir del CIERRE definitivo del trámite o actuación administrativa/disciplinaria, nunca desde la fecha de apertura del expediente.",
              referencia: "Acuerdo AGN 004 de 2019"
            }
          ],
          caseQuestion: {
            stem: "Un expediente contractual en una Procuraduría Provincial fue abierto en marzo de 2023 y su liquidación definitiva (cierre del trámite) se firmó en noviembre de 2025. Si la TRD indica una retención de 2 años en Archivo de Gestión y 18 años en Archivo Central, ¿a partir de qué momento se empiezan a contar los 2 años de permanencia en el Archivo de Gestión?",
            options: [
              "Desde marzo de 2023, fecha en que se suscribió el acta de inicio del contrato.",
              "Desde el 1 de enero de 2024, primer año fiscal completo posterior a su apertura.",
              "Desde noviembre de 2025, fecha en que culminó el trámite con el cierre y liquidación del expediente.",
              "Desde el momento en que el jefe de la oficina solicita la transferencia al Archivo Central."
            ],
            correctIndex: 2,
            explanation: "En archivística colombiana, los tiempos de retención en el Archivo de Gestión se contabilizan únicamente a partir del cierre definitivo de la actuación o trámite que dio origen al expediente (noviembre de 2025)."
          }
        },
        {
          id: "gd-103",
          code: "1.3",
          title: "Ventanilla Única (Acuerdo 060/2001), PGD y los 8 Procesos Archivísticos",
          duration: "18 min",
          priority: "Esencial",
          normativa: ["Acuerdo AGN 060 de 2001", "Decreto 1080 de 2015", "Acuerdo AGN 001 de 2024"],
          summary:
            "Lineamientos obligatorios para la recepción, radicación, numeración consecutiva y control de las comunicaciones oficiales en Ventanilla Única, articulados con el Programa de Gestión Documental (PGD) y los 8 procesos técnicos archivísticos.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Reserva de Números y las 3 Fases de Organización",
            alerta:
              "1) Si el caso plantea que un jefe pide 'reservar números de radicado del viernes para el lunes' o 'ponerle sufijo BIS', está PROHIBIDO por el Art. 5 del Acuerdo 060 de 2001. 2) No confundas 'Organización Documental' con 'Ordenación': recuerda la ecuación exacta: ORGANIZACIÓN = 1º Clasificación (agrupar por serie/CCD) + 2º Ordenación (secuencia cronológica y foliación) + 3º Descripción (inventario FUID y metadatos)."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #1, #2, #3 y #9)",
            descripcion:
              "Como Auxiliar Administrativo 5AM-09 aplicas a diario la recepción y radicación en SIGDEA/SIM (Gestión y Trámite), la Organización en carpetas (clasificar, ordenar cronológicamente, foliar y describir en el FUID) y la preparación de transferencias primarias hacia el Archivo Central."
          },
          sections: [
            {
              heading: "1. Comunicaciones Oficiales vs. Correspondencia Personal (Acuerdo 060 de 2001)",
              body: "El Acuerdo 060 de 2001 del Archivo General de la Nación establece una diferenciación estricta para el manejo documental en las unidades de correspondencia:",
              bullets: [
                "Comunicaciones Oficiales: Todas aquellas recibidas o producidas en desarrollo de las funciones asignadas legalmente a la entidad, independientemente del medio utilizado (físico o electrónico). Son objeto de radicación y control.",
                "Correspondencia (Privada/Personal): Comunicaciones de carácter privado que llegan a la entidad a nombre de los funcionarios. NO se radican ni se abren por la Ventanilla Única; se entregan directamente a su destinatario.",
                "Prohibición de Reserva de Números (Art. 5): La numeración inicia el 1 de enero de cada año fiscal y es estrictamente secuencial. Está prohibido reservar números, dejar espacios en blanco, repetir números o usar sufijos (bis, A, B)."
              ]
            },
            {
              heading: "2. Los 8 Procesos de la Gestión Documental (Decreto 1080 de 2015)",
              body: "El Programa de Gestión Documental (PGD) se desarrolla a través de ocho (8) procesos interrelacionados que abarcan todo el ciclo vital:",
              table: {
                headers: ["#", "Proceso Técnico", "Objetivo Principal en la Entidad"],
                rows: [
                  ["1", "Planeación", "Diseño de formas, formularios, metadatos y creación/actualización de series antes de producir documentos."],
                  ["2", "Producción", "Generación o recepción de documentos conforme a formatos institucionales, soportes y medios definidos."],
                  ["3", "Gestión y Trámite", "Registro, radicación, vinculación a un trámite, distribución, seguimiento y control de tiempos de respuesta."],
                  ["4", "Organización", "Conjunto de operaciones técnicas compuestas por: 1º Clasificación, 2º Ordenación y 3º Descripción documental."],
                  ["5", "Transferencia", "Remisión de expedientes del Archivo de Gestión al Central (primaria) o del Central al Histórico (secundaria)."],
                  ["6", "Disposición de Documentos", "Selección, eliminación técnica o conservación total según lo dictaminado en las TRD o TVD."],
                  ["7", "Preservación a Largo Plazo", "Acciones y estándares para garantizar la durabilidad física y tecnológica (migración, emulación, control ambiental)."],
                  ["8", "Valoración", "Proceso permanente que determina los valores primarios y secundarios para fijar su permanencia y disposición."]
                ]
              }
            },
            {
              heading: "3. Subprocesos de la Organización Documental y Expediente Híbrido",
              body: "Dentro del cuarto proceso (Organización), es indispensable dominar el orden de sus tres etapas: 1º Clasificación (según CCD), 2º Ordenación (Orden Original y foliación) y 3º Descripción (FUID e índices).",
              callout: {
                type: "norma",
                title: "Firmas Autorizadas y Expediente Híbrido",
                text: "Ningún documento oficial puede despacharse sin firma autorizada. Cuando concurren documentos físicos y electrónicos en un mismo trámite, se conforma un expediente híbrido vinculado mediante Hoja de Control o Índice Electrónico."
              }
            }
          ],
          keyPoints: [
            "La radicación asigna fecha y hora ciertas de recepción, activando el cómputo de los términos legales.",
            "No se pueden reservar números de radicado para comunicaciones futuras bajo ninguna circunstancia.",
            "Organización Documental = Clasificación + Ordenación + Descripción (en ese orden lógico estricto)."
          ],
          videos: [
            {
              titulo: "Acuerdo 060 de 2001 AGN · Pautas para Administración de Comunicaciones Oficiales",
              canal: "Archivo General de la Nación Colombia",
              duracion: "13:50",
              searchUrl: "https://www.youtube.com/results?search_query=Acuerdo+060+de+2001+AGN+comunicaciones+oficiales+radicacion"
            },
            {
              titulo: "Los 8 Procesos de la Gestión Documental (Decreto 1080 de 2015) y el PGD",
              canal: "Archivo General de la Nación Colombia",
              duracion: "15:15",
              searchUrl: "https://www.youtube.com/results?search_query=8+procesos+de+la+gestion+documental+decreto+1080+de+2015+AGN"
            }
          ],
          flashcards: [
            {
              id: "fc-gd103-1",
              categoria: "Acuerdo 060 de 2001",
              frente: "¿Está permitido reservar números de radicación o usar sufijos 'BIS' en comunicaciones oficiales?",
              reverso:
                "No. El artículo 5 del Acuerdo 060 de 2001 prohíbe taxativamente reservar números de radicación, dejar espacios en blanco, repetir números o agregar sufijos como BIS.",
              referencia: "Art. 5 Acuerdo AGN 060 de 2001"
            },
            {
              id: "fc-gd103-2",
              categoria: "Acuerdo 060 de 2001",
              frente: "¿Qué diferencia una Comunicación Oficial de la Correspondencia Privada?",
              reverso:
                "La Comunicación Oficial trata asuntos propios de las funciones de la entidad y se radica; la Correspondencia Privada es de carácter personal del funcionario, NO se abre ni se radica.",
              referencia: "Art. 2 Acuerdo AGN 060 de 2001"
            },
            {
              id: "fc-gd104-1",
              categoria: "Organización Documental",
              frente: "¿Cuáles son las 3 operaciones técnicas que integran el proceso de Organización Documental?",
              reverso:
                "1. Clasificación (agrupar por series según el CCD), 2. Ordenación (disponer cronológicamente según Orden Original y foliar) y 3. Descripción (diligenciar el FUID e índices).",
              referencia: "Decreto 1080 de 2015"
            },
            {
              id: "fc-gd104-2",
              categoria: "Transferencias Documentales",
              frente: "¿Qué es una Transferencia Documental Primaria vs. Secundaria?",
              reverso:
                "Primaria: Remisión de expedientes del Archivo de Gestión al Archivo Central. Secundaria: Remisión de expedientes con valor permanente del Archivo Central al Archivo Histórico.",
              referencia: "Acuerdo AGN 001 de 2024"
            }
          ],
          caseQuestion: {
            stem: "El viernes a las 4:50 p. m., un asesor solicita al encargado de la Ventanilla Única de la Procuraduría que le reserve tres números de radicación de salida con fecha del viernes para unos oficios que terminará de redactar y firmar el lunes a primera hora. ¿Cuál debe ser la actuación del funcionario de correspondencia?",
            options: [
              "Reservar los tres números dejando anotado en el libro de control que quedan pendientes de entrega física el lunes.",
              "Negarse a reservar los números, dado que el Acuerdo AGN 060 de 2001 prohíbe taxativamente reservar números de radicación o radicar documentos aún no firmados.",
              "Asignarles un número provisional con sufijo 'BIS' hasta que el jefe de la dependencia firme los oficios el lunes.",
              "Radicar los documentos en blanco únicamente si se trata de respuestas a tutelas o requerimientos judiciales."
            ],
            correctIndex: 1,
            explanation: "El artículo 5 del Acuerdo 060 de 2001 del AGN prohíbe expresamente reservar números de radicación, repetirlos o asignar numeración antes de que el documento esté debidamente elaborado y firmado por el funcionario competente."
          }
        }
      ]
    },
    {
      id: "mod-documentos-oficina",
      code: "MÓDULO II",
      title: "Elaboración de Documentos de Oficina y Trámite Administrativo (GTC 185)",
      subtitle: "Oficios, memorandos, circulares, actas, órdenes de pedido, órdenes de trabajo y cuentas de cobro",
      icon: "file-text",
      topics: [
        {
          id: "doc-201",
          code: "2.1",
          title: "Guía GTC 185: Estructura de la Comunicación Escrita y el Oficio (Carta)",
          duration: "16 min",
          priority: "Esencial",
          normativa: ["GTC 185 (ICONTEC)", "Acuerdo AGN 060 de 2001", "Ley 594 de 2000"],
          summary:
            "La Guía Técnica Colombiana GTC 185 del ICONTEC orienta cómo se elaboran los documentos de oficina. Este tema cubre los elementos que debe tener un oficio (carta externa), su orden y la identificación de quién proyecta, revisa y firma.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Oficio vs. Memorando",
            alerta:
              "Las preguntas suelen mezclar los tipos de comunicación. El OFICIO (carta) va hacia el EXTERIOR de la entidad; el MEMORANDO circula únicamente ENTRE dependencias de la MISMA entidad. Otra trampa frecuente: creer que el 'asunto' es opcional o que el número de radicado lo puede asignar el auxiliar a su gusto; el consecutivo lo asigna el sistema/ventanilla de correspondencia."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones de proyección y trámite documental)",
            descripcion:
              "Cuando tu jefe te pide proyectar la respuesta a una petición, debes armar el oficio con todos sus elementos (fecha, destinatario completo, asunto, texto, despedida, firma, anexos y la línea de quién proyectó/revisó), revisarlo ortográficamente y radicarlo de salida por la ventanilla antes de enviarlo."
          },
          sections: [
            {
              heading: "1. ¿Qué es la GTC 185 y cuál es su alcance?",
              body: "Es una Guía Técnica Colombiana del ICONTEC sobre documentación organizacional y elaboración de documentos de oficina. Es una guía de buenas prácticas que cada entidad adopta e incorpora en su manual o programa de gestión documental para que todos sus documentos tengan una presentación uniforme.",
              bullets: [
                "Busca uniformidad: mismos márgenes, ubicación de elementos y lenguaje en toda la entidad.",
                "Se complementa con las reglas del AGN sobre radicación y comunicaciones oficiales (Acuerdo 060 de 2001).",
                "Un documento bien elaborado facilita su clasificación, trámite y posterior archivo."
              ]
            },
            {
              heading: "2. Elementos del oficio o carta (en orden de aparición)",
              body: "Aunque cada entidad ajusta su formato institucional, el oficio contiene de manera general:",
              table: {
                headers: ["Elemento", "Contenido", "Observación práctica"],
                rows: [
                  ["Encabezado / membrete", "Nombre de la entidad y dependencia", "Va impreso o en la plantilla institucional"],
                  ["Código o consecutivo", "Número de radicado de salida asignado por la ventanilla/sistema", "Nunca se reserva ni se inventa"],
                  ["Lugar y fecha", "Ciudad y fecha de expedición", "Fecha completa, sin abreviaturas ambiguas"],
                  ["Destinatario", "Nombre, cargo, entidad, dirección y ciudad", "Debe coincidir con el de la petición"],
                  ["Asunto o referencia", "Resumen en una línea del tema tratado", "Obligatorio: permite clasificar el documento"],
                  ["Saludo, texto y despedida", "Cuerpo claro, breve y cortés", "Un solo asunto por comunicación"],
                  ["Firma", "Nombre y cargo de quien tiene competencia para firmar", "El auxiliar proyecta, no firma por el jefe"],
                  ["Anexos y copias", "Relación de documentos adjuntos y destinatarios de copia", "Se indica el número de folios anexos"],
                  ["Identificación de elaboración", "Quién proyectó, revisó y/o digitó", "Permite trazabilidad en el archivo"]
                ]
              }
            },
            {
              heading: "3. Calidad de la redacción",
              body: "La comunicación debe ser clara, concisa, cortés y correcta ortográficamente.",
              callout: {
                type: "norma",
                title: "Regla de oro de la redacción administrativa",
                text: "Un documento = un asunto. Usa lenguaje claro y directo, evita jerga innecesaria, verifica nombres y cifras antes de enviar y deja siempre constancia de los anexos."
              }
            }
          ],
          keyPoints: [
            "El oficio es comunicación externa; el memorando es comunicación interna entre dependencias.",
            "El asunto, la firma de quien tiene competencia y la relación de anexos son elementos básicos del oficio.",
            "El auxiliar proyecta y tramita; la firma corresponde a quien tiene la competencia."
          ],
          videos: [
            {
              titulo: "Elaboración de documentos de oficina: oficio, memorando y circular según GTC 185",
              canal: "Capacitación Gestión Documental Pública",
              duracion: "12:30",
              searchUrl: "https://www.youtube.com/results?search_query=GTC+185+elaboracion+de+documentos+de+oficina+oficio+memorando+circular"
            },
            {
              titulo: "Cómo redactar una carta o oficio institucional paso a paso",
              canal: "Secretariado y Gestión Administrativa",
              duracion: "10:05",
              searchUrl: "https://www.youtube.com/results?search_query=como+redactar+un+oficio+institucional+partes+de+una+carta+oficial+colombia"
            }
          ],
          flashcards: [
            {
              id: "fc-doc201-1",
              categoria: "GTC 185",
              frente: "¿Qué es la GTC 185 y para qué se usa en una entidad?",
              reverso: "Es la Guía Técnica Colombiana del ICONTEC sobre elaboración de documentos de oficina; la entidad la adopta para que sus comunicaciones tengan una presentación uniforme.",
              referencia: "GTC 185 · ICONTEC"
            },
            {
              id: "fc-doc201-2",
              categoria: "Tipos de comunicación",
              frente: "¿Cuál es la diferencia entre oficio y memorando?",
              reverso: "El oficio (carta) se dirige a destinatarios externos de la entidad. El memorando circula entre dependencias de la misma entidad.",
              referencia: "GTC 185"
            },
            {
              id: "fc-doc201-3",
              categoria: "Elementos del oficio",
              frente: "Menciona 5 elementos básicos de un oficio.",
              reverso: "Consecutivo/radicado, lugar y fecha, destinatario, asunto, texto con saludo y despedida, firma, anexos y copias, e identificación de quien proyectó.",
              referencia: "GTC 185"
            },
            {
              id: "fc-doc201-4",
              categoria: "Trámite",
              frente: "¿Quién asigna el número de radicado de salida de un oficio?",
              reverso: "La ventanilla o sistema de correspondencia de la entidad; el auxiliar no lo reserva ni lo inventa.",
              referencia: "Acuerdo AGN 060 de 2001"
            }
          ],
          caseQuestion: {
            stem: "Un auxiliar proyecta la respuesta a una petición ciudadana. El texto está correcto, pero omitió el asunto y no relacionó los anexos que adjuntó. Según las buenas prácticas de la GTC 185, ¿qué debe hacer antes de pasar el documento a firma?",
            options: [
              "Enviarlo así, porque el asunto y los anexos son opcionales si el texto es claro.",
              "Completar el asunto y la relación de anexos, y dejar identificada la elaboración, antes de radicarlo de salida.",
              "Cambiar el oficio por un memorando para evitar incluir el asunto.",
              "Firmarlo él mismo para agilizar el trámite."
            ],
            correctIndex: 1,
            explanation: "El asunto y la relación de anexos son elementos básicos del oficio; permiten clasificar el documento y dejar constancia de lo enviado. El auxiliar proyecta, no firma por quien tiene la competencia."
          }
        },
        {
          id: "doc-202",
          code: "2.2",
          title: "Memorandos, Circulares y Actas de Reunión",
          duration: "15 min",
          priority: "Esencial",
          normativa: ["GTC 185 (ICONTEC)", "Ley 594 de 2000"],
          summary:
            "Los documentos internos de la oficina tienen reglas propias: el memorando comunica entre dependencias, la circular difunde instrucciones a varios destinatarios y el acta deja constancia de lo tratado y decidido en una reunión.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Circular vs. Memorando y contenido del Acta",
            alerta:
              "La CIRCULAR se dirige a VARIOS destinatarios (información o instrucciones generales) y se numera consecutivamente; el MEMORANDO suele tener un destinatario específico dentro de la entidad. En el ACTA no se registra todo lo que se dijo palabra por palabra: se consignan los puntos tratados, las decisiones y los compromisos con responsable y fecha."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Apoyo a reuniones y comunicaciones internas)",
            descripcion:
              "Si debes apoyar una reunión del despacho, preparas la lista de asistencia y el orden del día, tomas notas de las decisiones y compromisos, proyectas el acta y la pasas a firma de quien presidió y de quien actuó como secretario; luego la archivas en la serie documental correspondiente."
          },
          sections: [
            {
              heading: "1. Memorando y circular",
              bullets: [
                "Memorando: comunicación interna entre dependencias o funcionarios de la misma entidad; incluye PARA, DE, ASUNTO y FECHA, y un texto breve y directo.",
                "Circular: comunicación con información o instrucciones de interés general dirigida a varios destinatarios; se numera y se fecha.",
                "Ambos se radican y se archivan según la TRD de la dependencia."
              ]
            },
            {
              heading: "2. Estructura del acta de reunión",
              body: "El acta es el documento que da fe de lo ocurrido en una reunión. Sus partes generales son:",
              table: {
                headers: ["Parte del acta", "Qué se consigna"],
                rows: [
                  ["Identificación", "Número consecutivo, nombre del comité o reunión, lugar, fecha, hora de inicio y fin"],
                  ["Asistentes", "Nombres y cargos de asistentes, invitados y ausentes (con excusa)"],
                  ["Orden del día", "Temas previstos para tratar"],
                  ["Desarrollo", "Resumen de lo discutido y de las decisiones adoptadas"],
                  ["Compromisos", "Actividad, responsable y fecha límite"],
                  ["Firmas", "Quien preside y quien actúa como secretario"]
                ]
              }
            },
            {
              heading: "3. Buenas prácticas con el acta",
              callout: {
                type: "alerta",
                title: "Evita estos errores",
                text: "No se firman actas en blanco, no se corrigen con enmendaduras y no se modifican decisiones después de firmadas. Cualquier ajuste se hace mediante una nueva acta o una constancia debidamente soportada."
              }
            }
          ],
          keyPoints: [
            "La circular va dirigida a varios destinatarios; el memorando circula entre dependencias.",
            "El acta consigna decisiones y compromisos con responsable y plazo, no una transcripción literal.",
            "Se firma por quien preside y por el secretario; nunca en blanco."
          ],
          videos: [
            {
              titulo: "Cómo elaborar un acta de reunión: partes y ejemplo",
              canal: "Gestión Administrativa Pública",
              duracion: "09:40",
              searchUrl: "https://www.youtube.com/results?search_query=como+elaborar+un+acta+de+reunion+partes+del+acta+ejemplo"
            },
            {
              titulo: "Diferencias entre memorando, circular y oficio",
              canal: "Capacitación Gestión Documental Pública",
              duracion: "08:15",
              searchUrl: "https://www.youtube.com/results?search_query=diferencia+entre+memorando+circular+y+oficio+comunicaciones+oficiales"
            }
          ],
          flashcards: [
            {
              id: "fc-doc202-1",
              categoria: "Circular",
              frente: "¿A quién se dirige una circular?",
              reverso: "A varios destinatarios, con información o instrucciones de interés general; se numera consecutivamente.",
              referencia: "GTC 185"
            },
            {
              id: "fc-doc202-2",
              categoria: "Memorando",
              frente: "¿Qué campos básicos tiene un memorando?",
              reverso: "PARA, DE, ASUNTO y FECHA, seguidos de un texto breve; circula dentro de la misma entidad.",
              referencia: "GTC 185"
            },
            {
              id: "fc-doc202-3",
              categoria: "Acta",
              frente: "¿Qué debe contener un acta de reunión?",
              reverso: "Número, lugar, fecha y hora, asistentes, orden del día, desarrollo y decisiones, compromisos (responsable y plazo) y firmas.",
              referencia: "GTC 185"
            },
            {
              id: "fc-doc202-4",
              categoria: "Acta",
              frente: "¿Quién firma el acta?",
              reverso: "Quien preside la reunión y quien actúa como secretario; no se firma en blanco ni se corrige con enmendaduras.",
              referencia: "Buenas prácticas documentales"
            }
          ],
          caseQuestion: {
            stem: "Tras un comité, el jefe te pide el acta. Algunos asistentes sugieren transcribir cada intervención y dejar los compromisos 'para después'. ¿Cuál es la actuación correcta?",
            options: [
              "Transcribir toda la reunión palabra por palabra y omitir los compromisos.",
              "Consignar los temas tratados, las decisiones y los compromisos con responsable y fecha, y pasarla a firma de quien presidió y del secretario.",
              "Dejar el acta firmada en blanco para completarla luego.",
              "Reemplazar el acta por un memorando informal."
            ],
            correctIndex: 1,
            explanation: "El acta resume lo tratado y decidido y deja los compromisos con responsable y plazo; la firman quien preside y el secretario. Nunca se firma en blanco."
          }
        },
        {
          id: "doc-203",
          code: "2.3",
          title: "Órdenes de Pedido, Órdenes de Trabajo y Cuentas de Cobro: Trámite y Control",
          duration: "15 min",
          priority: "Importante",
          normativa: ["GTC 185 (ICONTEC)", "Acuerdo AGN 060 de 2001", "Normas internas de almacén y contratación"],
          summary:
            "Los documentos de soporte administrativo (órdenes de pedido, órdenes de trabajo y cuentas de cobro) permiten pedir bienes, ordenar servicios y reclamar pagos con trazabilidad. Aprende sus elementos y el flujo de trámite y control.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: No confundas el pedido con la orden de trabajo",
            alerta:
              "La ORDEN DE PEDIDO (o requisición) SOLICITA bienes o suministros a almacén o compras; la ORDEN DE TRABAJO INSTRUYE la ejecución de un servicio (por ejemplo, un mantenimiento) a una dependencia o proveedor. La CUENTA DE COBRO es el documento con el que quien presta un servicio y no está obligado a facturar solicita su pago, siempre con soportes."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Apoyo logístico y administrativo)",
            descripcion:
              "Cuando el despacho necesita resmas de papel, diligencias la orden de pedido a almacén con cantidades y justificación; si falla un aire acondicionado, solicitas la orden de trabajo de mantenimiento; y si te llega una cuenta de cobro, verificas que tenga los soportes y la remites con el visto bueno de quien supervisa."
          },
          sections: [
            {
              heading: "1. Elementos de cada documento",
              table: {
                headers: ["Documento", "Para qué sirve", "Elementos mínimos"],
                rows: [
                  ["Orden de pedido / requisición", "Solicitar bienes o suministros", "Fecha, dependencia, descripción y cantidad, justificación, firma de quien autoriza"],
                  ["Orden de trabajo", "Ordenar la ejecución de un servicio o mantenimiento", "Consecutivo, descripción del servicio, ubicación, responsable, fecha de ejecución, constancia de recibo"],
                  ["Cuenta de cobro", "Reclamar el pago de un servicio prestado", "Nombre y documento del cobrador, concepto, valor, fecha, firma y soportes (por ejemplo, informe de actividades)"]
                ]
              }
            },
            {
              heading: "2. Flujo de trámite y control",
              bullets: [
                "Elaborar el documento completo, sin espacios en blanco ni enmendaduras.",
                "Obtener la autorización o el visto bueno de quien tiene la competencia.",
                "Radicar o registrar el consecutivo y enviar al área responsable (almacén, mantenimiento, contabilidad o tesorería).",
                "Verificar la entrega o ejecución y dejar constancia de recibo a satisfacción.",
                "Archivar copia en el expediente que corresponda según la TRD."
              ]
            },
            {
              heading: "3. Control y trazabilidad",
              callout: {
                type: "norma",
                title: "Sin soporte no hay trámite",
                text: "Todo pedido, orden o cuenta debe poder rastrearse: quién lo solicitó, quién lo autorizó, qué se entregó o ejecutó y cuándo. Esto protege al servidor y a la entidad ante controles internos y de órganos de control."
              }
            }
          ],
          keyPoints: [
            "Orden de pedido = solicitar bienes; orden de trabajo = ordenar un servicio; cuenta de cobro = reclamar un pago.",
            "Cada documento requiere autorización de quien tiene la competencia y soportes.",
            "Se deja constancia de recibo a satisfacción y se archiva según la TRD."
          ],
          videos: [
            {
              titulo: "Requisición, orden de pedido y orden de trabajo en la gestión administrativa",
              canal: "Gestión Administrativa Pública",
              duracion: "11:10",
              searchUrl: "https://www.youtube.com/results?search_query=orden+de+pedido+requisicion+orden+de+trabajo+gestion+administrativa+entidad+publica"
            },
            {
              titulo: "Cuenta de cobro: qué es, partes y soportes",
              canal: "Contabilidad y Finanzas Básicas",
              duracion: "07:50",
              searchUrl: "https://www.youtube.com/results?search_query=cuenta+de+cobro+que+es+partes+y+soportes+colombia"
            }
          ],
          flashcards: [
            {
              id: "fc-doc203-1",
              categoria: "Orden de pedido",
              frente: "¿Para qué sirve la orden de pedido o requisición?",
              reverso: "Para solicitar bienes o suministros a almacén o compras, con cantidades, justificación y autorización.",
              referencia: "Trámite administrativo"
            },
            {
              id: "fc-doc203-2",
              categoria: "Orden de trabajo",
              frente: "¿Qué ordena una orden de trabajo?",
              reverso: "La ejecución de un servicio (por ejemplo, un mantenimiento), con descripción, ubicación, responsable y constancia de recibo.",
              referencia: "Trámite administrativo"
            },
            {
              id: "fc-doc203-3",
              categoria: "Cuenta de cobro",
              frente: "¿Qué es una cuenta de cobro?",
              reverso: "Documento con el que quien presta un servicio y no está obligado a facturar solicita su pago, adjuntando soportes.",
              referencia: "Trámite administrativo"
            },
            {
              id: "fc-doc203-4",
              categoria: "Control",
              frente: "¿Qué se debe verificar antes de remitir una cuenta de cobro?",
              reverso: "Que tenga los datos del cobrador, concepto, valor, firma y soportes, y el visto bueno de quien supervisa el servicio.",
              referencia: "Control interno"
            }
          ],
          caseQuestion: {
            stem: "Se dañó el sistema de aire del despacho y el jefe te pide 'resolverlo hoy'. ¿Qué documento debes tramitar para que se ejecute el mantenimiento con trazabilidad?",
            options: [
              "Una orden de pedido a almacén de resmas de papel.",
              "Una orden de trabajo de mantenimiento, con la autorización correspondiente y constancia de recibo del servicio.",
              "Una circular dirigida a todas las dependencias.",
              "Una cuenta de cobro a nombre propio."
            ],
            correctIndex: 1,
            explanation: "La orden de trabajo instruye la ejecución de un servicio como el mantenimiento y deja trazabilidad (autorización, ejecución y recibo a satisfacción)."
          }
        }
      ]
    },
    {
      id: "mod-atencion-usuario",
      code: "MÓDULO III",
      title: "Atención al Usuario, PQRSDF y Servicio al Ciudadano",
      subtitle: "Ley 1755 de 2015, términos legales, canales de atención y enfoque diferencial",
      icon: "users-check",
      topics: [
        {
          id: "au-201",
          code: "3.1",
          title: "Derecho Fundamental de Petición y Términos Legales (Ley 1755 de 2015)",
          duration: "18 min",
          priority: "Esencial",
          normativa: ["Art. 23 Constitución Política", "Ley 1755 de 2015", "Ley 1437 de 2011 (CPACA)"],
          summary:
            "Dominio absoluto de las modalidades del derecho de petición, plazos perentorios de respuesta, trámite de peticiones incompletas, falta de competencia y reserva legal.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: 10 días (Documentos) vs. 15 días (General) vs. 5 días (Traslado)",
            alerta:
              "Lee con lupa qué pide el ciudadano en el enunciado: si solicita COPIAS o INFORMACIÓN pública, el plazo es de 10 DÍAS HÁBILES (y si no se responde en 10 días, opera aceptación tácita y hay 3 días para entregar las copias). Si la PGN NO es competente, hay 5 DÍAS HÁBILES para remitirla al competente. El término general de 15 días aplica para peticiones de interés general, particular, quejas y reclamos."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #4 y #5)",
            descripcion:
              "En el empleo 5AM-09 llevas el tablero de control de términos de las peticiones recibidas en la Procuraduría Regional o Provincial. Tu labor preventiva de alertar antes del vencimiento evita que el despacho incurra en falta disciplinaria (Art. 31 Ley 1755 de 2015)."
          },
          sections: [
            {
              heading: "1. Matriz Oficial de Términos del Derecho de Petición",
              body: "Toda petición debe resolverse de fondo, de manera clara, precisa, congruente y oportuna dentro de los plazos legales contados en días hábiles siguientes a su recepción:",
              table: {
                headers: ["Modalidad de Petición", "Término Legal Máximo", "Observación Normativa (Ley 1755 de 2015)"],
                rows: [
                  [
                    "Petición de Interés General o Particular",
                    "15 días hábiles",
                    "Regla general aplicable a solicitudes, quejas, reclamos y manifestaciones."
                  ],
                  [
                    "Petición de Documentos y de Información",
                    "10 días hábiles",
                    "Si en esos 10 días no se da respuesta, se configura aceptación tácita y las copias deben entregarse dentro de los 3 días hábiles siguientes."
                  ],
                  [
                    "Petición de Consulta (Concepto)",
                    "30 días hábiles",
                    "Consultas a las autoridades en relación con las materias a su cargo. Los conceptos emitidos no son de obligatorio cumplimiento."
                  ],
                  [
                    "Peticiones entre Autoridades Públicas",
                    "10 días hábiles",
                    "Cuando una autoridad formula petición de información o de documentos a otra entidad estatal."
                  ],
                  [
                    "Traslado por Falta de Competencia",
                    "5 días hábiles (si es por escrito)",
                    "Si la petición es verbal, se informa de inmediato. Si es escrita, se remite al competente dentro de los 5 días siguientes y se envía copia al peticionario."
                  ]
                ]
              }
            },
            {
              heading: "2. Ampliación Excepcional de Términos y Peticiones Incompletas",
              body: "La ley contempla situaciones especiales durante el trámite de una petición que todo servidor de la Procuraduría debe aplicar con exactitud:",
              bullets: [
                "Imposibilidad de resolver en el plazo inicial (Parágrafo Art. 14): Cuando excepcionalmente no fuere posible resolver la petición en los plazos legales, la autoridad debe informar esta circunstancia al interesado ANTES del vencimiento del término inicial, expresando los motivos de la demora y señalando el plazo razonable en que se resolverá, el cual NO podrá exceder del doble del inicialmente previsto.",
                "Peticiones Incompletas (Art. 17): Se requerirá al peticionario dentro de los diez (10) días siguientes a la fecha de radicación para que la complete en el término máximo de un (1) mes. Si no responde, se decreta el desistimiento tácito mediante acto administrativo motivado.",
                "Peticiones Irrespetuosas, Oscuras o Reiterativas (Art. 19): Toda petición debe ser respetuosa so pena de rechazo. Solo cuando no se comprenda la finalidad u objeto de la petición, se devolverá al interesado para que la corrija o aclare dentro de los diez (10) días siguientes."
              ]
            },
            {
              heading: "3. Recurso de Insistencia ante Negativa por Reserva Legal",
              body: "El rechazo de una petición de documentos por motivos de reserva legal (Art. 24 Ley 1755) debe ser motivado indicando la norma legal expresa. Si el peticionario insiste (dentro de los 10 días siguientes), corresponde al Tribunal Administrativo o Juez Administrativo decidir en única instancia dentro de los 10 días hábiles siguientes.",
              callout: {
                type: "alerta",
                title: "Consecuencia Disciplinaria por Desatención de Peticiones",
                text: "De acuerdo con el artículo 31 de la Ley 1755 de 2015, la falta de atención a las peticiones y a los términos para resolver, la contravención a las prohibiciones y el desconocimiento de los derechos de las personas constituyen FALTA PARA EL SERVIDOR PÚBLICO y darán lugar a las sanciones correspondientes de acuerdo con el régimen disciplinario."
              }
            }
          ],
          keyPoints: [
            "Ninguna entidad puede negarse a recibir o radicar una petición, ni siquiera si considera que no es competente o que está incompleta.",
            "Las peticiones anónimas deben admitirse y tramitarse siempre que los hechos narrados ameriten una actuación o queja verificable.",
            "Peticiones de congresistas en ejercicio de control político se rigen por la Ley 5ª de 1992 (5 días calendario siguientes a su recepción)."
          ],
          videos: [
            {
              titulo: "Ley 1755 de 2015 · Derecho de Petición, Términos y Silencio Positivo en Documentos",
              canal: "Función Pública / Capacitación Estatal",
              duracion: "17:05",
              searchUrl: "https://www.youtube.com/results?search_query=Ley+1755+de+2015+derecho+de+peticion+terminos+concurso+de+meritos"
            }
          ],
          flashcards: [
            {
              id: "fc-au201-1",
              categoria: "Ley 1755 de 2015",
              frente: "¿Cuáles son los 3 términos básicos del Derecho de Petición (Art. 14 Ley 1755)?",
              reverso:
                "• 15 días hábiles: Peticiones generales, particulares, quejas y reclamos.\n• 10 días hábiles: Peticiones de información y copias de documentos.\n• 30 días hábiles: Consultas o conceptos jurídicos/técnicos.",
              referencia: "Art. 14 Ley 1755 de 2015"
            },
            {
              id: "fc-au201-2",
              categoria: "Falta de Competencia",
              frente: "¿Qué plazo tiene la entidad para trasladar una petición escrita cuando NO es competente?",
              reverso:
                "Cinco (5) días hábiles siguientes a la recepción, remitiéndola a la autoridad competente e informando de inmediato al peticionario con copia del oficio remisorio.",
              referencia: "Art. 21 Ley 1755 de 2015"
            },
            {
              id: "fc-au201-3",
              categoria: "Aceptación Tácita Documentos",
              frente: "¿Qué ocurre si pasan 10 días hábiles sin responder una solicitud de copias/documentos?",
              reverso:
                "Se entiende aceptada la solicitud para todos los efectos legales y las copias deberán entregarse dentro de los tres (3) días hábiles siguientes.",
              referencia: "Art. 14 Num. 1 Ley 1755 de 2015"
            }
          ],
          caseQuestion: {
            stem: "Un ciudadano radica en la Procuraduría una solicitud de copias simples de un informe de gestión pública que no goza de reserva legal. Transcurridos once (11) días hábiles desde la radicación sin que la dependencia haya emitido respuesta ni informado prórroga antes del vencimiento, ¿qué efecto jurídico se produce según el artículo 14 de la Ley 1755 de 2015?",
            options: [
              "El término se prorroga automáticamente por otros 10 días hábiles adicionales sin necesidad de aviso previo.",
              "Se entiende, para todos los efectos legales, que la respectiva solicitud ha sido aceptada y los documentos deberán entregarse dentro de los tres (3) días siguientes.",
              "El ciudadano debe presentar nuevamente la solicitud invocando el silencio administrativo negativo.",
              "El funcionario dispone hasta el día quince (15) hábil porque toda petición ciudadana se asimila a interés general."
            ],
            correctIndex: 1,
            explanation: "El numeral 1 del artículo 14 de la Ley 1755 de 2015 dispone que las peticiones de documentos y de información deben resolverse en diez (10) días hábiles; si en ese lapso no se ha dado respuesta al peticionario, se entenderá aceptada la solicitud y las copias deberán entregarse dentro de los tres (3) días hábiles siguientes."
          }
        },
        {
          id: "au-202",
          code: "3.2",
          title: "Tipología de Solicitudes en la PGN: PQRSDF y Quejas Disciplinarias",
          duration: "15 min",
          priority: "Esencial",
          normativa: ["Resolución PGN de Atención al Ciudadano", "Ley 1952 de 2019", "Ley 1712 de 2014"],
          summary:
            "Clasificación precisa de las solicitudes ciudadanas ante el Ministerio Público y distinción crítica entre queja por atención al servicio y queja o denuncia de carácter disciplinario.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: El Quejoso NO es Sujeto Procesal",
            alerta:
              "En el proceso disciplinario (Art. 110 Parágrafo 1 de la Ley 1952 de 2019), el quejoso NO tiene calidad de sujeto procesal. Solo tiene 3 facultades taxativas: 1) presentar y ampliar la queja bajo juramento, 2) aportar las pruebas que tenga en su poder y 3) recurrir la decisión de archivo y el fallo absolutorio. Además, en ventanilla NUNCA se rechaza una queja porque al ciudadano le falten pruebas físicas."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #1 y #4)",
            descripcion:
              "En el Centro de Atención al Público (CAP) o ventanilla de una Procuraduría Regional, cuando un ciudadano acude a denunciar una conducta irregular de un servidor público, tu deber como Auxiliar Administrativo 5AM-09 es recibirla, radicarla con trato respetuoso y orientarlo sobre el trámite de evaluación disciplinaria."
          },
          sections: [
            {
              heading: "1. Clasificación Técnica de las PQRSDF",
              body: "En el punto de recepción o canal virtual de la Procuraduría General de la Nación, identificar correctamente la naturaleza del requerimiento determina la dependencia competente y el flujo procesal:",
              table: {
                headers: ["Tipología", "Definición Operativa en la PGN", "Trámite / Destino"],
                rows: [
                  [
                    "Petición (Interés General/Particular)",
                    "Solicitud de actuación administrativa, reconocimiento de un derecho o intervención preventiva/judicial del Ministerio Público.",
                    "Dependencia misional o administrativa según el asunto (15 días hábiles)."
                  ],
                  [
                    "Queja Disciplinaria / Denuncia",
                    "Puesta en conocimiento de presuntas conductas irregulares o faltas cometidas por servidores públicos o particulares que ejercen funciones públicas.",
                    "Evaluación y reparto disciplinario (Ley 1952 de 2019). El quejoso NO es sujeto procesal, pero tiene facultades limitadas."
                  ],
                  [
                    "Queja por Servicio (Atención)",
                    "Manifestación de inconformidad por la forma o trato en que un funcionario de la entidad prestó un servicio al ciudadano.",
                    "División de Atención al Público / Control Disciplinario Interno según gravedad."
                  ],
                  [
                    "Reclamo",
                    "Exigencia o inconformidad por la prestación irregular, suspensión o incumplimiento de un servicio o trámite institucional.",
                    "Dependencia responsable del proceso para corrección y respuesta en 15 días hábiles."
                  ],
                  [
                    "Sugerencia / Felicitación",
                    "Propuesta de mejora para los procesos institucionales o reconocimiento positivo a la labor de un servidor público.",
                    "Sistema de Gestión de Calidad / Talento Humano para retroalimentación y mejora continua."
                  ]
                ]
              }
            },
            {
              heading: "2. El Rol del Quejoso en las Actuaciones de la PGN",
              body: "Una pregunta recurrente en las pruebas de la Procuraduría aborda la diferencia entre un peticionario ordinario y quien presenta una queja disciplinaria:",
              callout: {
                type: "norma",
                title: "Parágrafo 1 del Artículo 110 del Código General Disciplinario (Ley 1952 de 2019)",
                text: "En el proceso disciplinario el quejoso NO es sujeto procesal. Su intervención se limita únicamente a presentar y ampliar la queja bajo la gravedad del juramento, a aportar las pruebas que tenga en su poder y a recurrir la decisión de archivo y el fallo absolutorio."
              }
            }
          ],
          keyPoints: [
            "Cuando un ciudadano presenta una queja contra un alcalde, concejal o servidor público externo, se clasifica como Queja Disciplinaria (misional), no como reclamo administrativo interno.",
            "Las peticiones de intervención judicial o administrativa buscan que un Procurador Judicial o Delegado actúe como Ministerio Público en defensa del orden jurídico o derechos fundamentales.",
            "Toda solicitud recibida debe quedar registrada en el sistema de gestión documental de la PGN entregando al ciudadano su número de radicado."
          ],
          videos: [
            {
              titulo: "PQRSDF en el Sector Público y Trámite de Quejas Disciplinarias en la PGN",
              canal: "Instituto de Estudios del Ministerio Público - IEMP",
              duracion: "14:40",
              searchUrl: "https://www.youtube.com/results?search_query=atencion+al+ciudadano+PQRSDF+queja+disciplinaria+procuraduria"
            }
          ],
          flashcards: [
            {
              id: "fc-au202-1",
              categoria: "Proceso Disciplinario",
              frente: "¿Cuáles son las únicas 3 facultades del quejoso en el proceso disciplinario?",
              reverso:
                "1) Presentar y ampliar la queja bajo juramento, 2) Aportar las pruebas que tenga en su poder y 3) Recurrir la decisión de archivo y el fallo absolutorio (No es sujeto procesal).",
              referencia: "Art. 110 Parágrafo 1 Ley 1952 de 2019"
            }
          ],
          caseQuestion: {
            stem: "Una ciudadana acude al Centro de Atención al Público (CAP) de la Procuraduría para manifestar que un funcionario de una alcaldía municipal le exigió dinero para agilizar una licencia urbanística. Al clasificar y orientar este requerimiento, el servidor de la PGN debe:",
            options: [
              "Rechazar la solicitud e indicarle que solo la Fiscalía General de la Nación puede recibir denuncias por hechos ocurridos en alcaldías.",
              "Recibir y radicar el escrito como una Queja Disciplinaria para su reparto a la dependencia competente (Procuraduría Provincial/Distrital), sin perjuicio de la compulsa penal correspondiente.",
              "Tramitarla como un Reclamo de Servicio Interno de la PGN con plazo de respuesta de 10 días hábiles.",
              "Exigirle que primero agote un derecho de petición ante el alcalde municipal antes de acudir a la Procuraduría."
            ],
            correctIndex: 1,
            explanation: "La conducta descrita compromete la moralidad pública y constituye una presunta falta disciplinaria gravísima de un servidor público municipal. Por tanto, la PGN debe recibirla y radicarla como Queja Disciplinaria para el ejercicio de la acción disciplinaria, además de poner el hecho en conocimiento de la Fiscalía."
          }
        },
        {
          id: "au-203",
          code: "3.3",
          title: "Protocolos de Atención, Enfoque Diferencial y Transparencia (Ley 1712 de 2014)",
          duration: "14 min",
          priority: "Alta",
          normativa: ["Ley 1712 de 2014", "Ley 1755 de 2015 Art. 20", "Directivas PGN sobre Enfoque Diferencial"],
          summary:
            "Atención prioritaria a sujetos de especial protección constitucional, lenguaje claro, comunicación asertiva y garantía del derecho de acceso a la información pública.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Información Clasificada vs. Información Reservada",
            alerta:
              "En la Ley 1712 de 2014, la Información PÚBLICA CLASIFICADA protege datos privados/semiprivados de personas particulares (ej. historia clínica, intimidad, datos personales sensibles), mientras que la Información PÚBLICA RESERVADA protege intereses públicos superiores del Estado (ej. seguridad nacional, defensa, investigaciones disciplinarias en curso antes del pliego de cargos o etapa reservada)."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #4 y #10)",
            descripcion:
              "Al expedir copias autorizadas o atender público en ventanilla, el Auxiliar Administrativo 5AM-09 debe dar turno preferente a adultos mayores, gestantes y personas con discapacidad, y verificar que en las versiones públicas de actos administrativos se testen los datos sensibles."
          },
          sections: [
            {
              heading: "1. Atención Prioritaria y Sujetos de Especial Protección",
              body: "De conformidad con el artículo 20 de la Ley 1755 de 2015 y la jurisprudencia constitucional, las autoridades darán atención prioritaria a las peticiones:",
              bullets: [
                "De reconocimiento de un derecho fundamental cuando deban ser resueltas para evitar un perjuicio irremediable al peticionario (quien deberá probar siquiera sumariamente la titularidad del derecho y el riesgo del perjuicio).",
                "Cuando por razones de salud o de seguridad personal esté en peligro inminente la vida o la integridad del destinatario de la medida solicitada (la autoridad adoptará de inmediato las medidas de urgencia necesarias).",
                "Presentadas por periodistas para el ejercicio de su actividad (tramitación preferente).",
                "En la atención presencial (turnos y orientación): adultos mayores (Ley 1251 de 2008), mujeres gestantes, personas con discapacidad, víctimas del conflicto armado, niñas, niños y adolescentes."
              ]
            },
            {
              heading: "2. Principios de la Ley de Transparencia y Acceso a la Información (Ley 1712 de 2014)",
              body: "En el servicio al ciudadano rige el Principio de Máxima Publicidad: toda información en posesión, bajo control o custodia de un sujeto obligado es pública y no podrá ser reservada o limitada sino por disposición constitucional o legal:",
              table: {
                headers: ["Concepto en Ley 1712", "Alcance Jurídico", "Ejemplo en la Función Pública"],
                rows: [
                  [
                    "Información Pública Clasificada",
                    "Aquella que pertenece al ámbito propio, particular y privado o semiprivado de una persona natural o jurídica.",
                    "Historia clínica, datos personales sensibles (Ley 1581 de 2012), intimidad familiar o secretos comerciales."
                  ],
                  [
                    "Información Pública Reservada",
                    "Aquella cuyo acceso podrá ser rechazado o denegado de manera motivada por daño a intereses públicos superiores.",
                    "Defensa y seguridad nacional, estabilidad macroeconómica, investigaciones disciplinarias o penales en etapa reservada."
                  ],
                  [
                    "Transparencia Activa",
                    "Obligación de publicar proactivamente en el sitio web institucional información mínima obligatoria sin que medie solicitud.",
                    "Directorio de servidores, escala salarial, Plan Anual de Adquisiciones, informes de gestión y presupuesto."
                  ],
                  [
                    "Transparencia Pasiva",
                    "Obligación de responder oportuna y verazmente las solicitudes de información que formulen los ciudadanos.",
                    "Entrega de datos abiertos, estadísticas o copias de actos administrativos solicitados por petición."
                  ]
                ]
              }
            }
          ],
          keyPoints: [
            "Cuando la reserva o clasificación solo aplica a una parte de un documento, se debe elaborar una 'versión pública' tachando o suprimiendo únicamente los datos reservados (Principio de Divisibilidad).",
            "Las peticiones formuladas por niños, niñas o adolescentes no requieren representación de adulto ni abogado para ser recibidas y atendidas.",
            "La reproducción de documentos solo puede cobrar el costo real de producción del medio físico; el envío por correo electrónico es gratuito."
          ],
          videos: [
            {
              titulo: "Ley 1712 de 2014 · Transparencia, Información Clasificada vs. Reservada",
              canal: "Función Pública Colombia",
              duracion: "12:50",
              searchUrl: "https://www.youtube.com/results?search_query=Ley+1712+de+2014+informacion+clasificada+y+reservada+colombia"
            }
          ],
          flashcards: [
            {
              id: "fc-au203-1",
              categoria: "Ley 1712 de 2014",
              frente: "¿Qué diferencia a la Información Pública Clasificada de la Información Pública Reservada?",
              reverso:
                "La Clasificada protege la intimidad y datos personales/sensibles de personas particulares; la Reservada protege intereses públicos superiores (seguridad nacional, orden público, investigaciones reservadas).",
              referencia: "Arts. 18 y 19 Ley 1712 de 2014"
            }
          ],
          caseQuestion: {
            stem: "Un ciudadano solicita copia de una resolución administrativa de la Procuraduría que, en uno de sus párrafos, menciona datos personales sensibles sobre el estado de salud e historia clínica de un funcionario. De acuerdo con la Ley 1712 de 2014, la actuación correcta es:",
            options: [
              "Negar la entrega total de la resolución argumentando que un solo dato sensible contamina todo el documento público.",
              "Entregar una versión pública del documento en la que se oculten o testen únicamente los datos personales sensibles (información clasificada), dejando visible el resto del contenido público.",
              "Entregar el documento íntegro sin restricción alguna porque fue expedido por una entidad pública.",
              "Exigirle al ciudadano una orden de un juez penal para poder conocer cualquier parte de la resolución."
            ],
            correctIndex: 1,
            explanation: "En virtud del principio de máxima publicidad y de la figura de reserva parcial (artículo 21 de la Ley 1712 de 2014), cuando un documento contenga partes reservadas o clasificadas (como datos sensibles de salud), la entidad debe suministrar una versión pública suprimiendo únicamente los fragmentos protegidos."
          }
        }
      ]
    },
    {
      id: "mod-inventarios",
      code: "MÓDULO IV",
      title: "Administración de Inventarios, Bienes y Almacén Público",
      subtitle: "Bienes devolutivos vs. consumo, custodia, responsabilidad fiscal/disciplinaria y bajas",
      icon: "boxes",
      topics: [
        {
          id: "inv-301",
          code: "4.1",
          title: "Clasificación de Bienes (Consumo vs. Devolutivos), Salidas de Almacén y Métodos PEPS/Kardex",
          duration: "16 min",
          priority: "Esencial",
          normativa: ["Marco Normativo Contaduría General de la Nación (NICSP)", "Manual de Administración de Bienes PGN", "Ley 80 de 1993"],
          summary:
            "Distinción técnica y contable entre bienes de consumo y bienes devolutivos, flujo documental de entradas y salidas de almacén, plaqueteo y valoración de activos.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Comprobante de Salida de Almacén vs. Factura",
            alerta:
              "Cuando el examen pregunta qué documento soporta formalmente la entrega de elementos del almacén al servidor público y traslada la responsabilidad de custodia, la respuesta NUNCA es la factura del proveedor ni un correo electrónico: siempre es el COMPROBANTE DE EGRESO O SALIDA DE ALMACÉN debidamente firmado."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #6 y #7)",
            descripcion:
              "Como Auxiliar Administrativo 5AM-09 debes recibir físicamente la papelería e insumos de oficina (bienes de consumo) y los equipos o mobiliario (bienes devolutivos), verificando cantidades, placas y firmando el comprobante de salida de almacén."
          },
          sections: [
            {
              heading: "1. Bienes Devolutivos vs. Bienes de Consumo",
              body: "En la gestión administrativa de recursos físicos de la Procuraduría, los bienes muebles se dividen en dos grandes categorías según su naturaleza, vida útil y control individual:",
              table: {
                headers: ["Atributo Técnico", "Bienes Devolutivos (Propiedad, Planta y Equipo)", "Bienes de Consumo (Fungibles)"],
                rows: [
                  [
                    "Naturaleza y Uso",
                    "No se extinguen con el primer uso; tienen vocación de permanencia superior a un (1) año aunque sufran desgaste o depreciación.",
                    "Se agotan, extinguen o transforman con el primer uso o tienen una durabilidad corta e incorporación inmediata al gasto."
                  ],
                  [
                    "Ejemplos Institucionales",
                    "Computadores, impresoras, escritorios, sillas ergonómicas, vehículos oficiales, equipos de comunicación y aire acondicionado.",
                    "Resmas de papel, tóneres, bolígrafos, carpetas de cartón, insumos de cafetería y elementos de aseo."
                  ],
                  [
                    "Control Individual / Plaqueteo",
                    "Requieren código o placa de inventario individual (código de barras/RFID) y se cargan al inventario personal del servidor responsable.",
                    "Se controlan por lotes, unidades de medida y Kardex en el almacén hasta su entrega definitiva a la dependencia."
                  ],
                  [
                    "Reintegro al Almacén",
                    "Deben devolverse al almacén cuando cesa su necesidad, por traslado/retiro del funcionario o para trámite de baja.",
                    "No son objeto de devolución tras su consumo normal en las actividades del servicio."
                  ]
                ]
              }
            },
            {
              heading: "2. Ciclo Documental de Almacén (Entradas, Salidas y Traslados)",
              body: "Ningún bien puede ingresar ni salir de las bodegas institucionales sin su respectivo soporte técnico y contable debidamente firmado:",
              bullets: [
                "Comprobante de Entrada a Almacén: Documento oficial que certifica el ingreso físico y jurídico de bienes adquiridos (por compra, donación, traspaso o comodato). Exige verificar factura/remisión, contrato u orden de compra, especificaciones técnicas y certificación del supervisor.",
                "Comprobante de Salida de Almacén / Asignación: Registra la entrega de bienes de consumo a las dependencias o la asignación de bienes devolutivos a un servidor público específico, quien firma aceptando la custodia.",
                "Comprobante de Traspaso o Traslado entre Funcionarios: Cuando un bien devolutivo cambia de usuario responsable o de ubicación física, debe formalizarse mediante acta o formato de traslado en el sistema de inventarios; nunca debe hacerse 'de mano en mano' de forma informal."
              ]
            }
          ],
          keyPoints: [
            "Ningún bien adquirido por la entidad puede entregarse directamente del proveedor al usuario final sin surtir previamente el registro de Entrada y Salida de Almacén.",
            "El plaqueteo (asignación de placa única de identificación) es obligatorio para todo bien devolutivo antes de su puesta en servicio.",
            "El Comprobante de Salida de Almacén firmado formaliza la entrega; en bodega, las existencias se controlan con tarjetas Kardex y métodos como PEPS (Primeras en Entrar, Primeras en Salir) o Promedio Ponderado para evitar vencimiento o deterioro de insumos."
          ],
          videos: [
            {
              titulo: "Administración de Bienes Públicos: Bienes de Consumo vs. Bienes Devolutivos",
              canal: "Contaduría General de la Nación / Gestión Pública",
              duracion: "14:10",
              searchUrl: "https://www.youtube.com/results?search_query=bienes+devolutivos+y+de+consumo+almacen+inventarios+sector+publico"
            }
          ],
          flashcards: [
            {
              id: "fc-inv301-1",
              categoria: "Inventarios y Almacén",
              frente: "¿Cuál es la diferencia esencial entre un Bien de Consumo y un Bien Devolutivo?",
              reverso:
                "El bien de consumo se agota o extingue con su uso (ej. papel, tóner); el bien devolutivo tiene vida útil prolongada, lleva placa de inventario individual y debe reintegrarse al almacén.",
              referencia: "Manual de Administración de Bienes PGN"
            },
            {
              id: "fc-inv301-2",
              categoria: "Soportes de Almacén",
              frente: "¿Qué documento soporta formalmente la entrega de elementos del almacén a un funcionario y le traslada la custodia?",
              reverso:
                "El Comprobante de Egreso o Salida de Almacén debidamente firmado por el servidor que recibe.",
              referencia: "Procedimiento de Almacén e Inventarios PGN"
            }
          ],
          caseQuestion: {
            stem: "Un contratista proveedor entrega directamente en una Procuraduría Provincial 10 computadores portátiles nuevos objeto de un contrato de compraventa. El coordinador administrativo reparte de inmediato los equipos a los funcionarios para agilizar el trabajo, sin tramitar comprobante de entrada a almacén ni asignar placas de inventario. Esta actuación es:",
            options: [
              "Acertada en virtud del principio de eficacia administrativa, pues las placas pueden colocarse al finalizar la vigencia fiscal.",
              "Irregular, porque todo bien devolutivo debe surtir el ingreso formal a almacén, verificación de supervisión, plaqueteo de identificación y comprobante de salida/asignación individual antes de ponerse en servicio.",
              "Válida siempre que los computadores sean considerados bienes de consumo por su obsolescencia tecnológica.",
              "Permitida únicamente si los funcionarios firman un recibo simple en un cuaderno interno de la oficina."
            ],
            correctIndex: 1,
            explanation: "Los computadores son bienes devolutivos (Propiedad, Planta y Equipo). Es obligatorio legalizar su Comprobante de Entrada a Almacén, asignarles placa única de inventario y suscribir el Comprobante de Salida/Asignación individual para establecer la custodia y el aseguramiento del activo público."
          }
        },
        {
          id: "inv-302",
          code: "4.2",
          title: "Custodia, Responsabilidad Disciplinaria y Fiscal sobre los Bienes Asignados",
          duration: "15 min",
          priority: "Esencial",
          normativa: ["Ley 1952 de 2019 Art. 38 y 39", "Ley 610 de 2000 (Responsabilidad Fiscal)", "Manual de Bienes PGN"],
          summary:
            "Deberes de guarda, uso exclusivo para el servicio, prohibición de préstamos o traslados no autorizados, paz y salvo de inventarios y procedimiento ante pérdida o daño.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Préstamos Verbales entre Compañeros",
            alerta:
              "Si en un caso situacional el funcionario A le entrega su computador o escáner al funcionario B 'de palabra' por un traslado urgente y el equipo se pierde, la responsabilidad administrativa primaria ante Almacén recae sobre el funcionario A, porque el bien continúa cargado a su inventario individual hasta que se legalice el formato oficial de traslado."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #6 y #7)",
            descripcion:
              "El Auxiliar Administrativo 5AM-09 debe velar por que ningún equipo de cómputo, impresora o mobiliario cambie de oficina o de responsable sin tramitar previamente el acta de traslado en el sistema de inventarios."
          },
          sections: [
            {
              heading: "1. Obligaciones del Servidor Público frente a su Inventario Individual",
              body: "Cada servidor público es responsable fiscal, disciplinaria y administrativamente por la conservación, buen uso y custodia de los bienes devolutivos que figuran en su inventario individual:",
              bullets: [
                "Uso Exclusivo Oficial: Está prohibido dar a los bienes del Estado utilización diferente a la del servicio público o usarlos en beneficio propio o de terceros (numeral 22 Art. 38 y Art. 39 de la Ley 1952 de 2019).",
                "Prohibición de Movimientos Informales: El servidor a cuyo nombre figura cargado un bien sigue siendo responsable del mismo aunque lo haya prestado verbalmente a un compañero. Todo cambio de responsable exige legalizar el traslado ante el grupo de almacén e inventarios.",
                "Entrega de Inventario por Novedad de Personal: En caso de retiro definitivo del servicio, traslado de dependencia, comisión de estudios o vacaciones prolongadas, el servidor debe hacer entrega formal de los bienes a su cargo y obtener el respectivo Paz y Salvo de Almacén."
              ]
            },
            {
              heading: "2. Actuación Obligatoria en Caso de Pérdida, Hurto o Daño de un Bien",
              body: "Si un bien público asignado sufre hurto, pérdida o daño grave, el servidor responsable debe activar de inmediato el siguiente protocolo institucional:",
              callout: {
                type: "alerta",
                title: "Ruta Crítica ante Pérdida o Hurto de Bienes Públicos",
                text: "1) Formular denuncia penal inmediata ante la Fiscalía o Policía Nacional especificando marca, modelo, serial y número de placa de inventario. 2) Informar por escrito de inmediato al jefe inmediato y al Grupo de Almacén/Inventarios y Seguros adjuntando la denuncia para activar la reclamación ante la aseguradora. 3) Atender la actuación disciplinaria y/o de responsabilidad fiscal o reponer el bien por uno de iguales o superiores características técnicas previa autorización."
              }
            }
          ],
          keyPoints: [
            "Si el servidor A le entrega sin soporte de almacén su computador al servidor B, y el equipo se pierde, la responsabilidad administrativa primaria recae sobre A por figurar como titular del inventario y haber omitido el trámite oficial de traslado.",
            "La responsabilidad fiscal (Ley 610 de 2000) es de carácter patrimonial y resarcitorio: busca recuperar el detrimento patrimonial sufrido por el Estado cuando hay dolo o culpa grave.",
            "Para retirar un equipo de las instalaciones de la entidad (ej. trabajo en casa o comisión) se requiere autorización expresa de salida de bienes."
          ],
          videos: [
            {
              titulo: "Responsabilidad Fiscal (Ley 610 de 2000) y Disciplinaria sobre Bienes del Estado",
              canal: "Formación Control Fiscal y Disciplinario",
              duracion: "15:00",
              searchUrl: "https://www.youtube.com/results?search_query=responsabilidad+fiscal+y+disciplinaria+custodia+de+bienes+publicos"
            }
          ],
          flashcards: [
            {
              id: "fc-inv302-1",
              categoria: "Custodia de Bienes",
              frente: "¿Qué debe hacer de inmediato un servidor público si sufre el hurto de un equipo institucional asignado?",
              reverso:
                "1) Interponer denuncia penal indicando marca, serial y placa de inventario, y 2) Informar por escrito de inmediato al jefe inmediato y al Grupo de Almacén/Seguros adjuntando la denuncia.",
              referencia: "Manual de Bienes PGN"
            }
          ],
          caseQuestion: {
            stem: "Un funcionario de la Procuraduría es trasladado de dependencia y, por premura, le deja su computador de escritorio y su escáner a un compañero de oficina mediante un acuerdo verbal, sin reportar ni tramitar el traslado ante el Grupo de Almacén e Inventarios. Tres meses después, en la toma física, el escáner no aparece. ¿Sobre quién recae primariamente el requerimiento administrativo de inventarios?",
            options: [
              "Exclusivamente sobre el vigilante de turno del edificio por no controlar las salidas.",
              "Sobre el funcionario a cuyo nombre continúa cargado el bien en el inventario oficial de almacén, por no haber legalizado el traslado formal ni obtenido paz y salvo.",
              "Sobre el proveedor que vendió el escáner originalmente a la entidad.",
              "Sobre nadie, ya que el traslado de oficina extingue automáticamente los registros de almacén."
            ],
            correctIndex: 1,
            explanation: "Mientras no se tramite y legalice el formato oficial de traslado o reintegro ante el Grupo de Almacén e Inventarios, el servidor titular del inventario individual mantiene la responsabilidad administrativa sobre los bienes asignados a su cargo."
          }
        },
        {
          id: "inv-303",
          code: "4.3",
          title: "Toma Física de Inventarios, Conciliación Contable y Baja de Bienes",
          duration: "15 min",
          priority: "Alta",
          normativa: ["Resoluciones Contaduría General de la Nación", "Ley 42 de 1993", "Decreto 1082 de 2015"],
          summary:
            "Procedimientos periódicos de verificación física, conciliación entre almacén y contabilidad, avalúo técnico y causales legales para la baja definitiva de bienes públicos.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Bienes Inservibles en Oficina",
            alerta:
              "Jamás selecciones una opción donde un funcionario 'bota a la basura', 'regala' o 'desarma' un equipo dañado en su propia oficina. Todo bien devolutivo dañado u obsoleto debe REINTEGRARSE primero a la bodega de Almacén con concepto técnico para que el Comité de Bajas y el ordenador del gasto expidan el acto administrativo de baja."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Función #7)",
            descripcion:
              "Durante la toma física anual en la Procuraduría Regional, el Auxiliar Administrativo 5AM-09 acompaña la verificación de placas y seriales y tramita el reintegro al almacén de los bienes deteriorados u obsoletos."
          },
          sections: [
            {
              heading: "1. Toma Física y Conciliación Almacén - Contabilidad",
              body: "Para garantizar la razonabilidad de los estados financieros de la entidad y el control efectivo de los activos, el área de almacén realiza verificaciones periódicas:",
              bullets: [
                "Toma Física de Inventarios: Conteo y verificación presencial (al menos una vez al año o de forma selectiva/rotativa) contrastando la existencia real, placa, serial, estado de conservación (bueno, regular, malo/inservible) y ubicación frente a los registros del sistema.",
                "Sobrantes y Faltantes: Si se detectan bienes sobrantes (físicamente presentes pero no registrados) o faltantes (registrados pero no hallados físicamente), se levanta acta de novedades para investigación, ajuste o cobro.",
                "Conciliación Contable Mensual: El saldo del inventario de almacén (entradas, salidas, bajas y depreciaciones) debe cruzarse y conciliarse mensualmente con los registros del Grupo de Contabilidad."
              ]
            },
            {
              heading: "2. El Proceso de Baja de Bienes (Obsolescencia, Deterioro o Inservibilidad)",
              body: "Dar de baja un bien consiste en retirarlo definitivamente del patrimonio y de los registros contables y de inventario de la entidad cuando ya no presta utilidad al servicio:",
              table: {
                headers: ["Etapa del Proceso de Baja", "Requisito Técnico / Jurídico Obligatorio"],
                rows: [
                  [
                    "1. Reintegro al Almacén",
                    "El usuario devuelve el bien como 'devolutivo en bodega / inservible' mediante comprobante de reintegro."
                  ],
                  [
                    "2. Concepto Técnico",
                    "Idoneidad técnica que certifique obsolescencia, daño irreparable o costo de reparación antieconómico (ej. Oficina de Sistemas para equipos TI)."
                  ],
                  [
                    "3. Comité de Bajas / Inventarios",
                    "Evaluación y recomendación del comité asesor sobre el destino final del bien (enajenación onerosa, transferencia gratuita entre entidades públicas, chatarrización o destrucción)."
                  ],
                  [
                    "4. Acto Administrativo y Acta Final",
                    "Resolución motivada del ordenador del gasto o delegado autorizando la baja y acta de entrega, subasta o desintegración ecológica certificada (RAEE)."
                  ]
                ]
              }
            }
          ],
          keyPoints: [
            "Para dar de baja equipos tecnológicos (computadores, impresoras) es indispensable el concepto técnico previo del área de Sistemas / TI y el borrado seguro de la información.",
            "Los residuos de aparatos eléctricos y electrónicos (RAEE) dados de baja requieren disposición final ambientalmente segura con gestor autorizado (Ley 1672 de 2013).",
            "Un bien inservible en una oficina no debe arrojarse a la basura; debe reintegrarse primero al almacén para surtir el procedimiento legal de baja."
          ],
          videos: [
            {
              titulo: "Toma Física de Inventarios, Conciliación Contable y Baja de Bienes Públicos",
              canal: "Gestión Financiera y Contable Pública",
              duracion: "13:20",
              searchUrl: "https://www.youtube.com/results?search_query=baja+de+bienes+publicos+toma+fisica+inventarios+contaduria+general"
            }
          ],
          flashcards: [
            {
              id: "fc-inv303-1",
              categoria: "Baja de Bienes",
              frente: "¿Cuáles son los 4 pasos obligatorios para dar de baja un equipo de cómputo dañado en la PGN?",
              reverso:
                "1) Reintegro físico al Almacén, 2) Concepto técnico de Sistemas/TI (y borrado seguro), 3) Recomendación del Comité de Bajas y 4) Acto administrativo motivado + disposición RAEE.",
              referencia: "Manual de Administración de Bienes PGN"
            }
          ],
          caseQuestion: {
            stem: "En una oficina de la Procuraduría una impresora láser sufre un daño grave en su tarjeta principal. El técnico informa verbalmente que repararla cuesta más que comprar una nueva. ¿Cuál es el procedimiento administrativo correcto para retirar ese activo del inventario?",
            options: [
              "Desechar la impresora en el depósito de reciclaje del edificio y borrarla manualmente del listado de Excel de la oficina.",
              "Reintegrar el bien al Almacén adjuntando el concepto técnico escrito de la oficina de sistemas, para que el Comité competente tramite el acto administrativo de baja y disposición final.",
              "Vender directamente las piezas de la impresora desde la oficina para comprar resmas de papel.",
              "Dejar la impresora indefinidamente debajo del escritorio del funcionario sin reportar novedad al almacén."
            ],
            correctIndex: 1,
            explanation: "Ningún servidor puede desechar o destruir por su cuenta un bien devolutivo. Debe reintegrarse formalmente al almacén acompañado del concepto técnico de inservibilidad u obsolescencia para que se expida el acto administrativo de baja y se realice su disposición final (ej. gestión RAEE)."
          }
        }
      ]
    },
    {
      id: "mod-institucional-pgn",
      code: "MÓDULO V",
      title: "Estructura de la Procuraduría y Gestión Pública del Estado",
      subtitle: "Decreto Ley 262 de 2000, funciones misionales y Código General Disciplinario",
      icon: "scale",
      topics: [
        {
          id: "pgn-400",
          code: "5.1",
          title: "Ramas del Poder Público, Órganos de Control y Ministerio Público (Constitución de 1991)",
          duration: "16 min",
          priority: "Esencial",
          normativa: ["Constitución Política de 1991", "Decreto Ley 262 de 2000", "Ley 489 de 1998"],
          summary:
            "El Estado colombiano se organiza en ramas del poder público y órganos autónomos de control. La Procuraduría General de la Nación hace parte del Ministerio Público; conocer dónde se ubica y quién la dirige es base para todo el módulo.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: La Procuraduría NO es una rama del poder",
            alerta:
              "Las ramas del poder público son tres: legislativa, ejecutiva y judicial. La Procuraduría y la Contraloría son ÓRGANOS DE CONTROL autónomos e independientes (no pertenecen a ninguna rama). El Ministerio Público lo ejercen el Procurador General de la Nación, el Defensor del Pueblo, los procuradores delegados y agentes, y los personeros municipales; la Contraloría NO hace parte del Ministerio Público."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Orientación al ciudadano)",
            descripcion:
              "Si un ciudadano pregunta por una queja contra un alcalde o contra un funcionario, debes saber que la PGN ejerce control disciplinario sobre servidores públicos (con las excepciones constitucionales), mientras que el control fiscal corresponde a la Contraloría. Con esa claridad lo orientas a la dependencia o entidad correcta."
          },
          sections: [
            {
              heading: "1. Ramas del poder y órganos autónomos",
              bullets: [
                "Ramas del poder público (art. 113 C.P.): legislativa, ejecutiva y judicial.",
                "Órganos autónomos e independientes: los de control (Ministerio Público y Contraloría) y los de la organización electoral.",
                "Los diferentes órganos del Estado tienen funciones separadas pero colaboran armónicamente para realizar sus fines."
              ]
            },
            {
              heading: "2. El Ministerio Público",
              body: "Según la Constitución, el Ministerio Público es ejercido por:",
              bullets: [
                "El Procurador General de la Nación, supremo director del Ministerio Público.",
                "El Defensor del Pueblo.",
                "Los procuradores delegados y los agentes del Ministerio Público ante las autoridades jurisdiccionales.",
                "Los personeros municipales y los demás funcionarios que determine la ley."
              ],
              callout: {
                type: "norma",
                title: "Elección del Procurador General (art. 276 C.P.)",
                text: "Es elegido por el Senado de la República para un período de cuatro años, de terna integrada por candidatos del Presidente de la República, la Corte Suprema de Justicia y el Consejo de Estado."
              }
            },
            {
              heading: "3. Principios de la función administrativa (art. 209 C.P.)",
              body: "La función administrativa está al servicio de los intereses generales y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad, mediante la descentralización, la delegación y la desconcentración de funciones."
            }
          ],
          keyPoints: [
            "Tres ramas del poder: legislativa, ejecutiva y judicial; la PGN y la Contraloría son órganos de control autónomos.",
            "El Procurador General es el supremo director del Ministerio Público y es elegido por el Senado para un período de cuatro años.",
            "Principios del art. 209: igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad."
          ],
          videos: [
            {
              titulo: "Estructura del Estado colombiano: ramas del poder y órganos de control",
              canal: "Educación Cívica Colombia",
              duracion: "13:00",
              searchUrl: "https://www.youtube.com/results?search_query=estructura+del+estado+colombiano+ramas+del+poder+organos+de+control+ministerio+publico"
            },
            {
              titulo: "Principios de la función administrativa artículo 209 Constitución",
              canal: "Derecho Administrativo Colombia",
              duracion: "09:30",
              searchUrl: "https://www.youtube.com/results?search_query=principios+funcion+administrativa+articulo+209+constitucion+colombia"
            }
          ],
          flashcards: [
            {
              id: "fc-pgn400-1",
              categoria: "Estructura del Estado",
              frente: "¿Cuáles son las tres ramas del poder público?",
              reverso: "Legislativa, ejecutiva y judicial. Los órganos de control y electorales son autónomos e independientes.",
              referencia: "Art. 113 C.P."
            },
            {
              id: "fc-pgn400-2",
              categoria: "Ministerio Público",
              frente: "¿Quiénes ejercen el Ministerio Público?",
              reverso: "El Procurador General, el Defensor del Pueblo, los procuradores delegados y agentes, y los personeros municipales (entre otros que determine la ley).",
              referencia: "Art. 118 C.P."
            },
            {
              id: "fc-pgn400-3",
              categoria: "Procurador General",
              frente: "¿Quién elige al Procurador General y por cuánto tiempo?",
              reverso: "El Senado, de terna del Presidente, la Corte Suprema de Justicia y el Consejo de Estado, para un período de 4 años.",
              referencia: "Art. 276 C.P."
            },
            {
              id: "fc-pgn400-4",
              categoria: "Función administrativa",
              frente: "Enumera los principios del artículo 209 de la Constitución.",
              reverso: "Igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad.",
              referencia: "Art. 209 C.P."
            }
          ],
          caseQuestion: {
            stem: "Una persona pregunta si la Procuraduría General de la Nación pertenece a la rama ejecutiva, ya que 'investiga a los funcionarios del Gobierno'. ¿Cuál es la respuesta correcta?",
            options: [
              "Sí, pertenece a la rama ejecutiva porque depende del Presidente.",
              "No; es un órgano de control autónomo e independiente que hace parte del Ministerio Público.",
              "Pertenece a la rama judicial porque emite sentencias.",
              "Pertenece a la rama legislativa porque la elige el Senado."
            ],
            correctIndex: 1,
            explanation: "La Procuraduría es un órgano de control autónomo e independiente; el Ministerio Público no hace parte de las tres ramas del poder. Que el Senado elija al Procurador no la convierte en rama legislativa."
          }
        },
        {
          id: "pgn-401",
          code: "5.2",
          title: "Naturaleza Constitucional del Ministerio Público y Decreto Ley 262 de 2000",
          duration: "17 min",
          priority: "Esencial",
          normativa: ["Constitución Política Arts. 275 a 284", "Decreto Ley 262 de 2000", "Decreto Ley 1851 de 2021"],
          summary:
            "Ubicación de la Procuraduría como órgano de control autónomo e independiente, sus tres ejes misionales (Preventivo, Intervención y Disciplinario) y su estructura territorial.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Ministerio Público vs. Rama Ejecutiva / Fiscalía",
            alerta:
              "La Procuraduría General de la Nación NO pertenece a la Rama Ejecutiva ni a la Rama Judicial (donde está la Fiscalía): es el máximo organismo del MINISTERIO PÚBLICO (Órgano de Control autónomo e independiente). Además, recuerda que la Función Preventiva vigila y exhorta, pero NUNCA puede coadministrar."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Nivel Territorial / Regional Atlántico)",
            descripcion:
              "En una Procuraduría Regional o Provincial, el Auxiliar Administrativo 5AM-09 apoya transversalmente los tres ejes misionales: tramita expedientes de actuaciones preventivas, comunicaciones de intervención judicial/administrativa y procesos disciplinarios (distinguiendo entre despachos de Instrucción y de Juzgamiento)."
          },
          sections: [
            {
              heading: "1. ¿Qué es el Ministerio Público y quién lo dirige?",
              body: "De acuerdo con el artículo 118 y el artículo 275 de la Constitución Política de Colombia, el Ministerio Público es un órgano de control autónomo e independiente (no pertenece a las ramas Ejecutiva, Legislativa ni Judicial). El Procurador General de la Nación es el supremo director del Ministerio Público, elegido por el Senado de la República para un período de cuatro (4) años de terna integrada por candidatos del Presidente de la República, la Corte Suprema de Justicia y el Consejo de Estado.",
              bullets: [
                "Integración del Ministerio Público: Es ejercido por el Procurador General de la Nación, por el Defensor del Pueblo, por los procuradores delegados y los agentes del Ministerio Público ante las autoridades jurisdiccionales, por los personeros municipales y por los demás funcionarios que determine la ley.",
                "Poder Preferente Disciplinario: La Procuraduría General de la Nación es titular del ejercicio preferente del poder disciplinario; en consecuencia, puede iniciar, proseguir o remitir cualquier investigación o juzgamiento de competencia de los órganos de control disciplinario interno de las entidades públicas y personerías municipales."
              ]
            },
            {
              heading: "2. Las Tres Funciones Misionales de la Procuraduría General de la Nación",
              body: "El quehacer misional de la PGN se articula en tres grandes funciones constitucionales y legales:",
              table: {
                headers: ["Función Misional", "Propósito Constitucional", "Alcance y Límites"],
                rows: [
                  [
                    "1. Función Preventiva",
                    "Vigilar el cumplimiento de la Constitución, las leyes y las decisiones judiciales; anticiparse y evitar la vulneración de derechos o la comisión de faltas.",
                    "NO implica coadministración: la Procuraduría advierte, acompaña y exhorta, pero no toma decisiones administrativas en reemplazo del gestor público."
                  ],
                  [
                    "2. Función de Intervención",
                    "Intervenir en los procesos y ante las autoridades judiciales o administrativas cuando sea necesario en defensa del orden jurídico, del patrimonio público o de los derechos y garantías fundamentales.",
                    "Se ejerce a través de Procuradores Delegados y Procuradores Judiciales I y II (en lo penal, administrativo, familia, laboral, restitución de tierras, etc.)."
                  ],
                  [
                    "3. Función Disciplinaria",
                    "Iniciar, adelantar y fallar las investigaciones que por faltas disciplinarias se sigan contra los servidores públicos y contra los particulares que cumplen funciones públicas o manejan recursos del Estado.",
                    "Se rige por el Código General Disciplinario (Ley 1952 de 2019 y Ley 2094 de 2021) garantizando la separación entre las etapas de instrucción y juzgamiento."
                  ]
                ]
              }
            },
            {
              heading: "3. Organización del Nivel Territorial de la PGN",
              body: "Además del Nivel Central (Despacho del Procurador, Viceprocuraduría, Salas Disciplinarias, Procuradurías Delegadas y Auxiliares), la entidad hace presencia en las regiones a través de:",
              bullets: [
                "Procuradurías Regionales (De Instrucción y de Juzgamiento).",
                "Procuradurías Distritales (De Instrucción y de Juzgamiento).",
                "Procuradurías Provinciales (De Instrucción y de Juzgamiento).",
                "Nota clave del Decreto Ley 1851 de 2021: En cumplimiento de la Ley 2094 de 2021, se escindieron las funciones para que el funcionario que investiga y formula pliego de cargos (Instrucción) sea distinto e independiente del funcionario que profiere el fallo (Juzgamiento)."
              ]
            }
          ],
          keyPoints: [
            "El Procurador General de la Nación es elegido por el Senado para un período institucional de 4 años y NO es reelegible.",
            "La función preventiva vigila y alerta oportunamente, pero tiene expresamente prohibido coadministrar o cogobernar con las entidades vigiladas.",
            "El Instituto de Estudios del Ministerio Público (IEMP) es la unidad administrativa especial de la PGN encargada de la capacitación, investigación y gestión del conocimiento."
          ],
          videos: [
            {
              titulo: "Estructura de la Procuraduría General de la Nación (Decreto Ley 262 de 2000)",
              canal: "Procuraduría General de la Nación / IEMP",
              duracion: "16:40",
              searchUrl: "https://www.youtube.com/results?search_query=Decreto+262+de+2000+estructura+Procuraduria+General+de+la+Nacion+funciones"
            }
          ],
          flashcards: [
            {
              id: "fc-pgn401-1",
              categoria: "Estructura Constitucional",
              frente: "¿De qué órgano constitucional es supremo director el Procurador General de la Nación y quién lo elige?",
              reverso:
                "Es el supremo director del Ministerio Público. Lo elige el Senado de la República para un período de 4 años de terna enviada por el Presidente, la Corte Suprema y el Consejo de Estado.",
              referencia: "Arts. 275 y 276 Constitución Política"
            },
            {
              id: "fc-pgn401-2",
              categoria: "Funciones Misionales PGN",
              frente: "¿Cuáles son las 3 funciones misionales de la Procuraduría General de la Nación?",
              reverso:
                "1) Función Preventiva (sin coadministrar), 2) Función de Intervención Judicial y Administrativa, y 3) Función Disciplinaria (con poder preferente).",
              referencia: "Decreto Ley 262 de 2000"
            }
          ],
          caseQuestion: {
            stem: "En desarrollo de una actuación preventiva frente a una licitación pública de un municipio, un funcionario de la Procuraduría le ordena al alcalde adjudicar el contrato a uno de los oferentes específicos que participa en el proceso. Esta actuación:",
            options: [
              "Es legítima porque el poder preferente de la Procuraduría le permite adjudicar contratos municipales.",
              "Excede los límites de la Función Preventiva al incurrir en coadministración, invadiendo la órbita exclusiva del ordenador del gasto.",
              "Es válida si el funcionario pertenece a una Procuraduría Regional de Juzgamiento.",
              "Hace parte de la función de intervención judicial ante la jurisdicción contencioso administrativa."
            ],
            correctIndex: 1,
            explanation: "La Función Preventiva faculta a la Procuraduría para vigilar, advertir riesgos y exhortar al cumplimiento de la ley, pero prohíbe la coadministración; es decir, la PGN no puede sustituir a la administración en la toma de decisiones propias de su competencia como adjudicar a un proponente específico."
          }
        },
        {
          id: "pgn-402",
          code: "5.3",
          title: "Código General Disciplinario (Ley 1952 de 2019 y Ley 2094 de 2021)",
          duration: "18 min",
          priority: "Esencial",
          normativa: ["Ley 1952 de 2019", "Ley 2094 de 2021", "Sentencia C-030 de 2023"],
          summary:
            "Principios rectores de la acción disciplinaria, ilicitud sustancial, clasificación de las faltas, formas de culpabilidad (dolo y culpa) y etapas del proceso disciplinario.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Culpa Leve e Indagación Previa",
            alerta:
              "Trampa 1: En derecho disciplinario colombiano NO existe sanción por Culpa Leve (solo Dolo, Culpa Gravísima o Culpa Grave). Trampa 2: La Indagación Previa (6 meses) NO es obligatoria en todos los procesos; solo procede cuando existe DUDA sobre la identificación o individualización del autor de la falta."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #8, #9 y #10)",
            descripcion:
              "En el apoyo administrativo a los despachos de Instrucción y Juzgamiento, el Auxiliar Administrativo 5AM-09 elabora oficios de notificación, controla que los expedientes se remitan del despacho instructor al de juzgamiento tras el pliego de cargos y protege la reserva legal de las actuaciones."
          },
          sections: [
            {
              heading: "1. Estructura de la Responsabilidad Disciplinaria",
              body: "Para que una conducta sea sancionable disciplinariamente bajo la Ley 1952 de 2019, deben concurrir tres elementos estructurales:",
              bullets: [
                "1. Tipicidad (Art. 4): El servidor público o particular en ejercicio de funciones públicas solo será investigado y sancionado por comportamientos que estén descritos como falta en la ley vigente al momento de su realización.",
                "2. Ilicitud Sustancial (Art. 9): La conducta del disciplinable será ilícita cuando afecte sustancialmente el deber funcional sin justificación alguna (no basta la simple infracción formal si no se quebranta sustancialmente el deber funcional).",
                "3. Culpabilidad (Art. 10 y 29): En materia disciplinaria queda proscrita toda forma de responsabilidad objetiva. Las faltas solo son sancionables a título de DOLO o CULPA (Culpa Gravísima o Culpa Grave; la culpa leve no es sancionable disciplinariamente)."
              ]
            },
            {
              heading: "2. Clasificación de las Faltas y Culpabilidad",
              body: "Las faltas disciplinarias se clasifican en tres niveles que determinan, junto con la modalidad de culpabilidad, la sanción aplicable:",
              table: {
                headers: ["Clase de Falta", "Definición Legal", "Sanción Principal (Art. 48)"],
                rows: [
                  [
                    "Faltas Gravísimas",
                    "Están taxativamente señaladas en el catálogo del Libro II (Arts. 52 a 65 de la Ley 1952 de 2019: DIH, contratación, hacienda pública, moralidad, servicio, etc.).",
                    "Con Dolo: Destitución e inhabilidad general de 10 a 20 años.\nCon Culpa Gravísima: Destitución e inhabilidad general de 8 a 10 años.\nCon Culpa Grave: Suspensión en el ejercicio del cargo de 3 a 18 meses."
                  ],
                  [
                    "Faltas Graves",
                    "Incumplimiento de deberes, abuso de derechos, extralimitación de funciones o violación al régimen de prohibiciones/impedimentos según criterios de gravedad del Art. 47.",
                    "Con Dolo: Suspensión de 3 a 18 meses e inhabilidad especial.\nCon Culpa Grave: Suspensión de 1 a 12 meses."
                  ],
                  [
                    "Faltas Leves",
                    "Incumplimiento de deberes o violación de prohibiciones que, valorados según los criterios del Art. 47, revisten menor entidad.",
                    "Con Dolo: Multa de 10 a 180 días de salario básico devengado.\nCon Culpa Grave: Amonestación escrita (se anota en la hoja de vida)."
                  ]
                ]
              }
            },
            {
              heading: "3. Etapas del Proceso Disciplinario y Separación de Roles",
              body: "Con la reforma de la Ley 2094 de 2021, el proceso disciplinario garantiza que ningún funcionario sea juez y parte:",
              callout: {
                type: "norma",
                title: "Flujo Procesal Disciplinario (Instrucción vs. Juzgamiento)",
                text: "FASE DE INSTRUCCIÓN: 1) Indagación Previa (hasta 6 meses para identificar al autor) → 2) Investigación Disciplinaria (para verificar ocurrencia, ilicitud y responsabilidad) → 3) Cierre de investigación y Evaluación (Archivo definitivo o Pliego de Cargos). || FASE DE JUZGAMIENTO (ante funcionario distinto): 4) Traslado del pliego, variación de juicio (ordinario o verbal), descargos, práctica de pruebas de juicio, alegatos previos al fallo y Fallo de Primera Instancia."
              }
            }
          ],
          keyPoints: [
            "En derecho disciplinario NO existe responsabilidad por culpa leve; solo se sanciona por Dolo, Culpa Gravísima (ignorancia supina, desatención elemental o violación manifiesta de reglas de obligatorio cumplimiento) o Culpa Grave.",
            "La Indagación Previa tiene una duración de seis (6) meses y procede únicamente cuando existe duda sobre la identificación o individualización del posible autor de la falta.",
            "La acción disciplinaria caduca/prescribe conforme al artículo 33 de la Ley 1952 de 2019 (5 años para faltas instantáneas o desde el último acto en las permanentes; hasta 12 años para faltas gravísimas de DIH y DDHH)."
          ],
          videos: [
            {
              titulo: "Código General Disciplinario (Ley 1952 de 2019 y Ley 2094 de 2021) Explicado",
              canal: "IEMP · Procuraduría General de la Nación",
              duracion: "19:10",
              searchUrl: "https://www.youtube.com/results?search_query=Codigo+General+Disciplinario+Ley+1952+de+2019+Ley+2094+de+2021+etapas"
            }
          ],
          flashcards: [
            {
              id: "fc-pgn402-1",
              categoria: "Código General Disciplinario",
              frente: "¿Cuándo procede abrir Indagación Previa y cuál es su término máximo?",
              reverso:
                "Procede únicamente cuando existe duda sobre la identificación o individualización del posible autor de la falta disciplinaria, y tiene un término máximo de seis (6) meses.",
              referencia: "Art. 208 Ley 1952 de 2019 (Mod. Ley 2094/2021)"
            }
          ],
          caseQuestion: {
            stem: "Se presenta una queja disciplinaria en la que están plenamente identificados con nombre, cédula y cargo los dos servidores públicos presuntamente responsables de una irregularidad contractual. De acuerdo con el Código General Disciplinario (Ley 1952 de 2019), ¿qué actuación procesal procede abrir?",
            options: [
              "Indagación Previa por seis (6) meses, ya que siempre es obligatoria antes de cualquier investigación.",
              "Investigación Disciplinaria directamente, dado que la Indagación Previa solo procede cuando existe duda sobre la identificación o individualización del posible autor de la falta.",
              "Fallo sancionatorio inmediato en única instancia sin etapa de instrucción.",
              "Pliego de cargos directo sin abrir investigación disciplinaria."
            ],
            correctIndex: 1,
            explanation: "Según el artículo 208 del Código General Disciplinario (modificado por la Ley 2094 de 2021), la Indagación Previa solo tiene lugar en caso de duda sobre la identificación o individualización del posible autor. Si los presuntos responsables ya están plenamente identificados, procede abrir directamente Investigación Disciplinaria."
          }
        }
      ]
    },
    {
      id: "mod-ofimatica-seguridad",
      code: "MÓDULO VI",
      title: "Sistemas de Gestión (MIPG / Calidad) y Ofimática Institucional",
      subtitle: "Política de Gobierno Digital (MIPG), Tríada CID, firmas electrónicas y herramientas ofimáticas",
      icon: "shield-laptop",
      topics: [
        {
          id: "sg-601",
          code: "6.1",
          title: "MIPG, MECI y Sistema de Gestión de Calidad (ISO 9001)",
          duration: "17 min",
          priority: "Esencial",
          normativa: ["Decreto 1499 de 2017", "Decreto 1083 de 2015", "NTC-ISO 9001:2015"],
          summary:
            "El Modelo Integrado de Planeación y Gestión (MIPG) es el marco de referencia para dirigir, planear, ejecutar, hacer seguimiento, evaluar y controlar la gestión de las entidades públicas. Incluye siete dimensiones, y en la última se integra el MECI; la ISO 9001 aporta el enfoque de calidad por procesos.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Las 7 dimensiones y el lugar del MECI",
            alerta:
              "El MECI NO es una dimensión aparte: se integra en la séptima dimensión de MIPG (Control Interno). Otra confusión típica es cambiar el orden o inventar dimensiones. Memoriza: 1) Talento Humano, 2) Direccionamiento Estratégico y Planeación, 3) Gestión con Valores para Resultados, 4) Evaluación de Resultados, 5) Información y Comunicación, 6) Gestión del Conocimiento y la Innovación, 7) Control Interno."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Procesos y control en la oficina)",
            descripcion:
              "Cuando sigues el procedimiento documentado para radicar y archivar, diligencias los formatos oficiales y reportas una falla del proceso, estás aplicando la lógica de calidad y control interno: ejecutas bien tu parte (primera línea de defensa) y dejas evidencia que luego puede revisarse."
          },
          sections: [
            {
              heading: "1. MIPG: marco y dimensiones",
              body: "MIPG fue adoptado por el Decreto 1499 de 2017 e integra los sistemas de Desarrollo Administrativo y de Gestión de la Calidad con el Sistema de Control Interno. Opera a través de siete dimensiones articuladas:",
              table: {
                headers: ["#", "Dimensión", "Idea central"],
                rows: [
                  ["1", "Talento Humano", "Corazón del modelo: personas competentes y motivadas"],
                  ["2", "Direccionamiento Estratégico y Planeación", "Definir a dónde va la entidad y cómo"],
                  ["3", "Gestión con Valores para Resultados", "Ejecutar procesos y servir al ciudadano"],
                  ["4", "Evaluación de Resultados", "Medir avances y resultados"],
                  ["5", "Información y Comunicación", "Gestión documental, transparencia y comunicación"],
                  ["6", "Gestión del Conocimiento y la Innovación", "Aprender y mejorar de manera continua"],
                  ["7", "Control Interno", "Aseguramiento de objetivos y gestión de riesgos"]
                ]
              }
            },
            {
              heading: "2. MECI y líneas de defensa",
              body: "El Modelo Estándar de Control Interno se articula en la séptima dimensión y se estructura en cinco componentes:",
              bullets: [
                "Ambiente de control.",
                "Evaluación del riesgo.",
                "Actividades de control.",
                "Información y comunicación.",
                "Actividades de monitoreo.",
                "Líneas de defensa: línea estratégica (alta dirección), primera línea (líderes de proceso y sus equipos), segunda línea (planeación, supervisión y coordinación) y tercera línea (control interno)."
              ]
            },
            {
              heading: "3. Calidad: ISO 9001",
              body: "La norma ISO 9001 (versión 2015) establece requisitos para un sistema de gestión de la calidad basado en el enfoque por procesos, el pensamiento basado en riesgos y la mejora continua.",
              callout: {
                type: "norma",
                title: "Ciclo PHVA",
                text: "Planear (definir objetivos y procesos) → Hacer (implementar) → Verificar (hacer seguimiento y medir) → Actuar (tomar acciones de mejora). Es el ciclo que sostiene la mejora continua."
              }
            }
          ],
          keyPoints: [
            "MIPG se adopta con el Decreto 1499 de 2017 y tiene 7 dimensiones; Talento Humano es el corazón del modelo.",
            "El MECI se integra en la séptima dimensión (Control Interno) con 5 componentes.",
            "ISO 9001 se basa en procesos, riesgos y mejora continua (ciclo PHVA)."
          ],
          videos: [
            {
              titulo: "MIPG: las 7 dimensiones explicadas",
              canal: "Función Pública Colombia",
              duracion: "15:20",
              searchUrl: "https://www.youtube.com/results?search_query=MIPG+7+dimensiones+modelo+integrado+de+planeacion+y+gestion+funcion+publica"
            },
            {
              titulo: "MECI y líneas de defensa en las entidades públicas",
              canal: "Función Pública Colombia",
              duracion: "12:40",
              searchUrl: "https://www.youtube.com/results?search_query=MECI+componentes+lineas+de+defensa+control+interno+entidades+publicas"
            }
          ],
          flashcards: [
            {
              id: "fc-sg601-1",
              categoria: "MIPG",
              frente: "¿Con qué decreto se adopta el MIPG y cuántas dimensiones tiene?",
              reverso: "Con el Decreto 1499 de 2017; tiene 7 dimensiones articuladas.",
              referencia: "Decreto 1499 de 2017"
            },
            {
              id: "fc-sg601-2",
              categoria: "MIPG",
              frente: "¿Cuál es la dimensión considerada el corazón de MIPG?",
              reverso: "Talento Humano (primera dimensión).",
              referencia: "MIPG"
            },
            {
              id: "fc-sg601-3",
              categoria: "MECI",
              frente: "¿Cuáles son los 5 componentes del MECI?",
              reverso: "Ambiente de control, evaluación del riesgo, actividades de control, información y comunicación, y actividades de monitoreo.",
              referencia: "MIPG · Dimensión 7"
            },
            {
              id: "fc-sg601-4",
              categoria: "ISO 9001",
              frente: "¿Qué significa PHVA?",
              reverso: "Planear, Hacer, Verificar y Actuar: el ciclo de la mejora continua.",
              referencia: "NTC-ISO 9001:2015"
            }
          ],
          caseQuestion: {
            stem: "En un taller se afirma que 'el MECI es la octava dimensión de MIPG'. ¿Qué respuesta es la correcta?",
            options: [
              "Es correcta: MIPG tiene 8 dimensiones y la última es el MECI.",
              "Es incorrecta: MIPG tiene 7 dimensiones y el MECI se integra en la séptima, Control Interno.",
              "Es incorrecta: el MECI reemplaza a la dimensión de Talento Humano.",
              "Es correcta, pero solo para entidades territoriales."
            ],
            correctIndex: 1,
            explanation: "MIPG tiene siete dimensiones; el MECI no es una dimensión adicional, sino el modelo de control que se articula en la séptima dimensión (Control Interno)."
          }
        },
        {
          id: "ofi-501",
          code: "6.2",
          title: "Seguridad de la Información, Gobierno Digital y Validez Electrónica",
          duration: "14 min",
          priority: "Alta",
          normativa: ["Ley 527 de 1999", "Decreto 2364 de 2012", "Ley 1581 de 2012", "Política de Gobierno Digital (MIPG)"],
          summary:
            "Principios de Confidencialidad, Integridad y Disponibilidad (CID), diferencias entre firma digital y firma electrónica, protección de datos personales y controles de seguridad en el puesto de trabajo.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Tríada CID y Firma Escaneada",
            alerta:
              "Pegar la foto o imagen escaneada de tu rúbrica en un Word NO es una Firma Digital ni Electrónica (carece de mecanismo criptográfico o de autenticación confiable). Y en la Tríada CID: divulgar información reservada rompe la CONFIDENCIALIDAD; alterar cifras o fechas sin permiso rompe la INTEGRIDAD; que el servidor se caiga sin backup rompe la DISPONIBILIDAD."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #9 y #10)",
            descripcion:
              "El Auxiliar Administrativo 5AM-09 aplica la política de Escritorio Limpio y Pantalla Limpia (bloquear Windows con Win+L al levantarse del puesto y guardar bajo llave los expedientes disciplinarios reservados) y nunca presta su usuario de SIGDEA/SIM."
          },
          sections: [
            {
              heading: "1. La Tríada CID de la Seguridad de la Información (ISO/IEC 27001 / MSPI)",
              body: "El Modelo de Seguridad y Privacidad de la Información (MSPI) del Estado colombiano se fundamenta en tres pilares esenciales que suelen evaluarse mediante casos situacionales:",
              table: {
                headers: ["Pilar de Seguridad", "Definición Técnica", "Ejemplo de Incidente en la Entidad"],
                rows: [
                  [
                    "Confidencialidad",
                    "Garantizar que la información sea accesible únicamente a aquellas personas o sistemas debidamente autorizados.",
                    "Dejar en la impresora compartida un pliego de cargos reservado o compartir la contraseña institucional con un tercero."
                  ],
                  [
                    "Integridad",
                    "Salvaguardar la exactitud y completitud de la información, evitando su alteración o modificación no autorizada.",
                    "Que un archivo de inventario o un acto administrativo sea modificado tras su aprobación sin rastro ni control de cambios."
                  ],
                  [
                    "Disponibilidad",
                    "Asegurar que los usuarios autorizados tengan acceso oportuno a la información y a los sistemas cuando lo requieran.",
                    "Caída del sistema de radicación sin respaldo (backup) justo el día del vencimiento de términos procesales."
                  ]
                ]
              }
            },
            {
              heading: "2. Firma Digital vs. Firma Electrónica en Colombia",
              body: "En el trámite de documentos electrónicos de archivo es clave distinguir jurídicamente ambas figuras:",
              bullets: [
                "Firma Digital (Ley 527 de 1999): Valor numérico que se adhiere a un mensaje de datos utilizando criptografía asimétrica (clave pública y privada) respaldada por un certificado digital emitido por una Entidad de Certificación Digital Abierta acreditada por la ONAC.",
                "Firma Electrónica (Decreto 2364 de 2012): Métodos tales como códigos, contraseñas, datos biométricos o claves criptográficas privadas que permiten identificar a una persona en relación con un mensaje de datos, siempre y cuando el método sea confiable y apropiado. (La imagen pegada de una firma manuscrita escaneada en un Word/PDF sin mecanismo de autenticación NO constituye por sí sola firma electrónica ni digital)."
              ]
            }
          ],
          keyPoints: [
            "Política de Escritorio Limpio y Pantalla Limpia: Bloquear siempre la sesión del computador al ausentarse del puesto de trabajo y guardar bajo llave los expedientes físicos con reserva al terminar la jornada.",
            "Las credenciales de acceso a los sistemas institucionales (SIM, SIGDEA, SIAF) son personales e intransferibles; prestarlas acarrea responsabilidad disciplinaria.",
            "El principio de Equivalencia Funcional (Ley 527 de 1999) otorga a los mensajes de datos la misma validez y fuerza probatoria que los documentos en soporte papel."
          ],
          videos: [
            {
              titulo: "Seguridad de la Información (Tríada CID) y Firma Digital vs. Electrónica (Ley 527)",
              canal: "MinTIC / Gobierno Digital Colombia",
              duracion: "12:15",
              searchUrl: "https://www.youtube.com/results?search_query=triada+confidencialidad+integridad+disponibilidad+firma+digital+ley+527+de+1999"
            }
          ],
          flashcards: [
            {
              id: "fc-ofi501-1",
              categoria: "Seguridad de la Información",
              frente: "¿Qué significan los 3 pilares de la Tríada CID?",
              reverso:
                "• Confidencialidad: Acceso solo a personal autorizado.\n• Integridad: Exactitud y no alteración no autorizada.\n• Disponibilidad: Acceso oportuno cuando se requiera.",
              referencia: "Modelo MSPI / ISO 27001"
            }
          ],
          caseQuestion: {
            stem: "Un servidor público sale a almorzar dejando su computador desbloqueado con la sesión activa en el sistema disciplinario y sobre su escritorio quedan abiertos varios expedientes sometidos a reserva legal. ¿Qué principio de la Seguridad de la Información se pone en riesgo directo e inmediato con esta omisión?",
            options: [
              "Únicamente la Disponibilidad del servicio eléctrico.",
              "La Confidencialidad (y potencialmente la Integridad) al permitir acceso no autorizado a información reservada por incumplir la política de escritorio y pantalla limpia.",
              "El principio de Equivalencia Funcional de la Ley 527 de 1999.",
              "La retención documental del Archivo Histórico."
            ],
            correctIndex: 1,
            explanation: "Dejar la sesión desbloqueada y expedientes reservados expuestos vulnera los controles de escritorio limpio y pantalla limpia, comprometiendo de manera directa la Confidencialidad (acceso por personas no autorizadas) y la Integridad (posible alteración con su usuario activo)."
          }
        },
        {
          id: "ofi-502",
          code: "6.3",
          title: "Herramientas Ofimáticas Aplicadas a la Gestión Administrativa y Control de Términos",
          duration: "15 min",
          priority: "Media",
          normativa: ["Competencias Funcionales Nivel Técnico y Asistencial PGN"],
          summary:
            "Funciones esenciales de hojas de cálculo para control de vencimientos de PQRSDF e inventarios, combinación de correspondencia para oficios masivos y buenas prácticas en documentos institucionales.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: DIA.LAB vs. DIAS.LAB en Excel",
            alerta:
              "Fíjate en la 'S': DIA.LAB (en singular) suma días hábiles a una fecha inicial y te devuelve la FECHA EXACTA DE VENCIMIENTO. En cambio, DIAS.LAB (en plural) cuenta el NÚMERO DE DÍAS HÁBILES transcurridos entre dos fechas."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #5 y #8)",
            descripcion:
              "La Función #8 del Auxiliar Administrativo 5AM-09 exige elaborar oficios masivos mediante Combinación de Correspondencia en Word y controlar en Excel los términos de vencimiento de PQRSDF e inventarios usando DIA.LAB, DIAS.LAB y BUSCARV."
          },
          sections: [
            {
              heading: "1. Funciones de Hoja de Cálculo Clave en Exámenes de Mérito",
              body: "Las pruebas escritas para cargos administrativos, técnicos y asistenciales de la Procuraduría evalúan con frecuencia qué función de Excel/Hoja de Cálculo resuelve un problema práctico de oficina:",
              table: {
                headers: ["Necesidad Administrativa en la PGN", "Función Exacta", "Sintaxis / Aplicación Práctica"],
                rows: [
                  [
                    "Calcular la fecha exacta de vencimiento de una petición en días hábiles (excluyendo fines de semana y festivos)",
                    "DIA.LAB (WORKDAY)",
                    "=DIA.LAB(fecha_radicacion; 15; rango_festivos) → Devuelve la fecha límite exacta del día 15 hábil."
                  ],
                  [
                    "Contar cuántos días hábiles han transcurrido entre la radicación y la respuesta",
                    "DIAS.LAB (NETWORKDAYS)",
                    "=DIAS.LAB(fecha_radicacion; fecha_respuesta; rango_festivos) → Verifica si se respondió en término."
                  ],
                  [
                    "Cruzar la placa de un bien devolutivo para traer automáticamente el nombre del funcionario responsable desde otra tabla",
                    "BUSCARV (VLOOKUP) / BUSCARX",
                    "=BUSCARV(placa_buscada; matriz_inventario; columna_responsable; FALSO) → Búsqueda exacta (FALSO o 0)."
                  ],
                  [
                    "Contar cuántas quejas disciplinarias se encuentran en estado 'Vencido' o 'Por vencer' en una dependencia",
                    "CONTAR.SI / CONTAR.SI.CONJUNTO",
                    "=CONTAR.SI.CONJUNTO(rango_dependencia; \"Provincial\"; rango_estado; \"Pendiente\")."
                  ],
                  [
                    "Mostrar alerta automática 'EN TÉRMINO' o 'VENCIDO' según los días transcurridos",
                    "SI (IF)",
                    "=SI(dias_habiles > 15; \"VENCIDO\"; \"EN TÉRMINO\")."
                  ]
                ]
              }
            },
            {
              heading: "2. Procesador de Texto: Combinación de Correspondencia y Estilos",
              body: "Cuando una dependencia necesita generar 150 oficios de citación o comunicación conservando la misma plantilla institucional pero personalizando el destinatario, dirección y número de expediente a partir de una base de datos en Excel, la herramienta técnica idónea es la Combinación de Correspondencia (Mail Merge). Asimismo, para generar tablas de contenido automáticas en informes extensos, deben aplicarse Estilos de Título jerárquicos (Título 1, Título 2, Título 3).",
              callout: {
                type: "norma",
                title: "Formato de Archivo para Preservación a Largo Plazo (PDF/A)",
                text: "De acuerdo con los lineamientos del Archivo General de la Nación, el estándar internacional para la preservación a largo plazo de documentos electrónicos de texto es el formato PDF/A (ISO 19005), ya que incrusta las fuentes y prohíbe contenido externo o cifrado que impida su lectura futura."
              }
            }
          ],
          keyPoints: [
            "DIA.LAB suma días hábiles a una fecha inicial para hallar la fecha de vencimiento; DIAS.LAB calcula la cantidad de días hábiles entre dos fechas.",
            "En BUSCARV, el cuarto argumento debe ser FALSO (o 0) cuando se busca una coincidencia exacta como un número de radicado, cédula o placa de inventario.",
            "El formato estándar de preservación documental electrónica exigido por el AGN es PDF/A."
          ],
          videos: [
            {
              titulo: "Excel para Concursos Públicos: DIA.LAB, DIAS.LAB, BUSCARV y Combinación de Correspondencia",
              canal: "Ofimática para el Estado",
              duracion: "15:45",
              searchUrl: "https://www.youtube.com/results?search_query=Excel+DIA.LAB+DIAS.LAB+BUSCARV+combinacion+de+correspondencia+concurso"
            }
          ],
          flashcards: [
            {
              id: "fc-ofi502-1",
              categoria: "Ofimática · Control de Términos",
              frente: "¿Qué función de Excel devuelve la FECHA exacta de vencimiento sumando días hábiles y descontando festivos?",
              reverso:
                "=DIA.LAB(fecha_inicial; días_hábiles; [rango_festivos]). Mientras que =DIAS.LAB cuenta la cantidad de días hábiles entre dos fechas.",
              referencia: "Competencias Ofimáticas 5AM-09"
            }
          ],
          caseQuestion: {
            stem: "El encargado de seguimiento de PQRSDF tiene en la celda A2 la fecha de radicación de un derecho de petición de interés particular, en B2 la cantidad de días hábiles de plazo legal (15) y en el rango H2:H20 el listado de días festivos de Colombia en 2026. ¿Qué fórmula de Excel le devuelve automáticamente la fecha exacta de vencimiento excluyendo sábados, domingos y festivos?",
            options: [
              "=SUMA(A2; B2)",
              "=DIA.LAB(A2; B2; H2:H20)",
              "=DIAS.LAB(A2; B2; H2:H20)",
              "=BUSCARV(A2; H2:H20; 15; FALSO)"
            ],
            correctIndex: 1,
            explanation: "La función DIA.LAB(fecha_inicial; días; [vacaciones/festivos]) devuelve la fecha futura que corresponde a un número determinado de días laborables (hábiles) después de la fecha inicial, descontando automáticamente fines de semana y el rango de festivos indicado."
          }
        }
      ]
    }
,
    {
      id: "mod-comportamentales-pgn",
      code: "MÓDULO VII",
      title: "Competencias Comportamentales PGN · Nivel Asistencial (Peso 20%)",
      subtitle: "Orientación al Usuario (Nivel B), Organización del Trabajo (Nivel C), Responsabilidad (Nivel C), Gestión de Recursos (Nivel D) y Cumplimiento (Nivel D)",
      icon: "award",
      topics: [
        {
          id: "comp-701",
          code: "7.1",
          title: "Orientación al Usuario y al Ciudadano (Nivel B) y Servicio con Enfoque Diferencial",
          duration: "16 min",
          priority: "Esencial",
          normativa: ["Manual de Funciones PGN · Código 5AM-09", "Resolución PGN Competencias Comportamentales", "Ley 1755 de 2015"],
          summary:
            "Evalúa la disposición del Auxiliar Administrativo 5AM-09 para atender de forma oportuna, respetuosa, empática e imparcial a los ciudadanos y usuarios internos, aplicando un lenguaje claro y garantizando siempre la radicación y orientación sobre los trámites sin extralimitarse en sus funciones.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Empatía mal entendida vs. Deber Funcional",
            alerta:
              "En las pruebas situacionales de Competencias Comportamentales (20%), los distractores suelen presentar dos extremos erróneos: 1) La indiferencia o rechazo ('no recibir la queja porque falta un anexo o porque está alterada la persona') y 2) El exceso de confianza o extralimitación ('prometerle al ciudadano que la Procuraduría sancionará al implicado' o 'adelantar conceptos jurídicos'). La respuesta correcta siempre combina TRATO RESPETUOSO + RADICACIÓN INMEDIATA + ORIENTACIÓN CLARA DENTRO DE SU COMPETENCIA ASISTENCIAL."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #1, #5 y #7)",
            descripcion:
              "Cuando un ciudadano acude alterado o confundido a la Procuraduría Regional o Provincial, tu conducta observable Nivel B consiste en escuchar activamente sin confrontar, explicarle en lenguaje sencillo el paso a paso del trámite, radicar su solicitud entregándole constancia y canalizarlo con el profesional competente si requiere asesoría jurídica de fondo."
          },
          sections: [
            {
              heading: "1. Conductas Asociadas a Orientación al Usuario (Nivel B)",
              body: "El Manual Específico de Funciones y Competencias Laborales de la Procuraduría exige en el Nivel B de Orientación al Usuario las siguientes conductas observables:",
              bullets: [
                "Atiende con cordialidad, respeto y prontitud las solicitudes de ciudadanos, quejosos, disciplinados y compañeros de dependencia.",
                "Suministra información veraz, completa y en lenguaje claro sobre el estado de los trámites autorizados, sin vulnerar la reserva legal.",
                "Identifica necesidades especiales de atención (adultos mayores, personas con discapacidad, mujeres gestantes, víctimas) y aplica prelación de turno.",
                "Mantiene el autocontrol emocional ante usuarios difíciles o exaltados, evitando discusiones personales."
              ]
            },
            {
              heading: "2. Matriz de Juicio Situacional: Qué hacer y qué evitar",
              body: "En el examen de mérito, analiza cada opción de respuesta bajo esta matriz conductual:",
              table: {
                headers: ["Escenario en Ventanilla / Oficina", "Conducta Incorrecta (Penalizada)", "Conducta Nivel B (Respuesta Correcta)"],
                rows: [
                  [
                    "Ciudadano molesto por demora en su trámite",
                    "Responder en el mismo tono o culpar a otra dependencia de la entidad",
                    "Escuchar con calma, verificar el estado en el sistema y brindarle información clara y verificable"
                  ],
                  [
                    "Petición verbal o escrita incompleta",
                    "Negarse a recibirla o devolver al ciudadano sin radicar",
                    "Recibirla, radicarla e informarle con amabilidad qué documento debe aportar para continuar el trámite"
                  ],
                  [
                    "Solicitud de información con reserva disciplinaria por un tercero",
                    "Entregar copias informales por 'colaborar' con el ciudadano",
                    "Explicar respetuosamente la reserva legal (Art. 115 Ley 1952) y orientarlo sobre quiénes están legitimados"
                  ]
                ]
              }
            }
          ],
          keyPoints: [
            "Las pruebas comportamentales representan el 20% del puntaje total de la convocatoria (carácter clasificatorio).",
            "En Orientación al Usuario Nivel B jamás se elige una opción que implique rechazar al ciudadano, discutir con él o prometer resultados que dependen del Procurador.",
            "El trato digno, la escucha activa y el respeto por la reserva legal van siempre de la mano."
          ],
          videos: [
            {
              titulo: "Competencias Comportamentales en Concursos de Méritos: Orientación al Usuario",
              canal: "Misión Mérito y Función Pública",
              duracion: "14:15",
              searchUrl: "https://www.youtube.com/results?search_query=competencias+comportamentales+orientacion+al+usuario+y+al+ciudadano+juicio+situacional"
            }
          ],
          flashcards: [
            {
              id: "fc-comp701-1",
              categoria: "Comportamental · 20%",
              frente: "¿Qué nivel de la competencia 'Orientación al Usuario y al Ciudadano' se evalúa en el cargo Auxiliar Administrativo 5AM-09?",
              reverso: "Se evalúa en Nivel B: exige trato cordial, información clara y veraz, escucha activa, autocontrol emocional y aplicación de enfoque diferencial.",
              referencia: "Manual de Funciones 5AM-09"
            },
            {
              id: "fc-comp701-2",
              categoria: "Juicio Situacional",
              frente: "¿Cuál es la regla de oro ante un usuario exaltado en una pregunta de juicio situacional?",
              reverso: "Mantener la calma (autocontrol), escuchar sin interrumpir ni confrontar, radicar o verificar su solicitud en el sistema y darle una orientación objetiva sobre el trámite.",
              referencia: "Orientación al Usuario Nivel B"
            }
          ],
          caseQuestion: {
            stem: "Un adulto mayor acude por tercera vez a la ventanilla de la Procuraduría Regional manifestando en voz alta su inconformidad porque no ha recibido respuesta a su queja. Como Auxiliar Administrativo 5AM-09, la actuación que evidencia el Nivel B de Orientación al Usuario es:",
            options: [
              "Pedirle que baje la voz y decirle que debe esperar en su domicilio hasta que le llegue el correo certificado.",
              "Atenderlo con prioridad y respeto, consultar en el sistema el estado actual del radicado y explicarle en lenguaje claro en qué etapa se encuentra su solicitud.",
              "Informarle que los auxiliares no tienen responsabilidad sobre la demora de los abogados sustanciadores.",
              "Permitirle hablar directamente con el Procurador Regional sin verificar antes el número de radicado."
            ],
            correctIndex: 1,
            explanation: "El Nivel B de Orientación al Usuario exige trato prioritario al adulto mayor, escucha respetuosa, verificación diligente en el sistema institucional y explicación clara del estado del trámite sin evadir la atención ni culpar a otros funcionarios."
          }
        },
        {
          id: "comp-702",
          code: "7.2",
          title: "Organización del Trabajo (Nivel C) y Responsabilidad con la Organización (Nivel C)",
          duration: "17 min",
          priority: "Esencial",
          normativa: ["Manual de Funciones PGN · Código 5AM-09", "Ley 1952 de 2019", "Ley 594 de 2000"],
          summary:
            "Estudia las conductas observables de las dos competencias de Nivel C del empleo 5AM-09: la capacidad para planificar, priorizar y mantener al día los trámites y archivos (Organización del Trabajo) y el compromiso ético con la reserva, veracidad y cuidado de la información institucional (Responsabilidad).",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Urgente vs. Importante y Compañerismo mal entendido",
            alerta:
              "En 'Organización del Trabajo Nivel C', nunca elijas atender las tareas por 'orden de amistad' o 'solo por orden de llegada' cuando existe un término legal próximo a vencer (ej. tutela o derecho de petición de información de 10 días). En 'Responsabilidad Nivel C', jamás aceptes ocultar un error propio o de un compañero ('reimprimir un folio sin reportar' o 'prestar tu usuario y clave del sistema SIM/SIGDEA')."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #2, #3, #4 y #8)",
            descripcion:
              "Al iniciar tu jornada en la Procuraduría, revisas el cuadro de control de términos y alertas de vencimiento, organizas las notificaciones y radicaciones según prioridad legal, mantienes los expedientes foliados y bloqueas tu sesión de computador cada vez que te levantas del puesto."
          },
          sections: [
            {
              heading: "1. Organización del Trabajo (Nivel C): Priorización y Método",
              body: "Esta competencia evalúa la habilidad para ordenar las actividades diarias con criterio técnico y aprovechamiento del tiempo:",
              bullets: [
                "Clasifica y prioriza las tareas diarias teniendo en cuenta los plazos legales perentorios (tutelas, derechos de petición, términos disciplinarios).",
                "Mantiene su puesto de trabajo, los expedientes físicos y las carpetas electrónicas debidamente ordenados, foliados y actualizados según las TRD.",
                "Utiliza listas de chequeo y hojas de control para evitar olvidos, duplicidad de radicados o vencimiento de términos.",
                "Informa oportunamente a su superior inmediato cuando una sobrecarga de trabajo puede afectar el cumplimiento de un plazo legal."
              ]
            },
            {
              heading: "2. Responsabilidad con la Organización (Nivel C): Integridad y Reserva",
              body: "Evalúa el grado de compromiso del servidor con los deberes institucionales, la confidencialidad y la exactitud de su labor:",
              bullets: [
                "Asume las consecuencias de sus actos y reporta de inmediato cualquier error de radicación, foliación o envío para corregirlo por la vía formal.",
                "Guarda estricta reserva sobre las investigaciones disciplinarias, quejas, datos personales y documentos clasificados o reservados.",
                "Custodia sus credenciales de acceso (usuario y contraseña) como personales e intransferibles.",
                "Verifica la exactitud de los datos antes de registrar actuaciones en los sistemas institucionales (SIM / SIGDEA)."
              ]
            }
          ],
          keyPoints: [
            "En Organización del Trabajo Nivel C, el criterio rector de priorización es el vencimiento de términos legales y la criticidad misional.",
            "En Responsabilidad Nivel C, ante un error involuntario, la respuesta correcta siempre es reportarlo de inmediato al jefe inmediato y aplicar el procedimiento técnico de corrección (nunca ocultarlo ni destruir folios).",
            "Las credenciales de sistemas oficiales jamás se comparten, ni siquiera en casos de urgencia."
          ],
          videos: [
            {
              titulo: "Casos de Juicio Situacional: Organización del Trabajo y Responsabilidad Pública",
              canal: "Academia Mérito Estatal",
              duracion: "15:10",
              searchUrl: "https://www.youtube.com/results?search_query=juicio+situacional+organizacion+del+trabajo+responsabilidad+concurso+de+meritos"
            }
          ],
          flashcards: [
            {
              id: "fc-comp702-1",
              categoria: "Organización del Trabajo · Nivel C",
              frente: "Si tienes al mismo tiempo tres tareas: archivar oficios ya tramitados, organizar papelería y radicar una respuesta de petición cuyo término vence hoy, ¿cuál priorizas?",
              reverso: "Se prioriza de inmediato la radicación y envío de la respuesta cuyo término legal vence hoy, dejando las labores operativas sin vencimiento fatal para después.",
              referencia: "Organización del Trabajo Nivel C"
            },
            {
              id: "fc-comp702-2",
              categoria: "Responsabilidad · Nivel C",
              frente: "¿Qué debe hacer un Auxiliar Administrativo 5AM-09 si detecta que por error anexó un memorial en un expediente equivocado?",
              reverso: "Informar de inmediato al superior o profesional a cargo y realizar el desglose/traslado técnico dejando la constancia respectiva, sin arrancar ni ocultar folios.",
              referencia: "Responsabilidad Nivel C"
            }
          ],
          caseQuestion: {
            stem: "Faltando 30 minutos para finalizar la jornada laboral, adviertes que por error enviaste por correo electrónico institucional un oficio citatorio a una dirección equivocada. Tu compañero te sugiere borrar el correo de la bandeja de enviados y no comentar nada. ¿Cuál es la actuación acorde con la competencia de Responsabilidad (Nivel C)?",
            options: [
              "Seguir el consejo del compañero y reenviar el correo al día siguiente a primera hora.",
              "Informar de inmediato a tu superior inmediato, enviar la comunicación al destinatario correcto dejando trazabilidad en el expediente y registrar la novedad.",
              "Culpar a la plataforma de correo institucional indicando que el sistema autocompletó mal el destinatario.",
              "Esperar a ver si el destinatario correcto reclama antes de tomar cualquier medida."
            ],
            correctIndex: 1,
            explanation: "La competencia de Responsabilidad en Nivel C exige asumir los errores con transparencia, informar oportunamente al superior y subsanar de inmediato la actuación dejando plena trazabilidad en el expediente."
          }
        },
        {
          id: "comp-703",
          code: "7.3",
          title: "Gestión de Recursos (Nivel D) y Cumplimiento de Parámetros Institucionales (Nivel D)",
          duration: "15 min",
          priority: "Esencial",
          normativa: ["Manual de Funciones PGN · Código 5AM-09", "Acuerdo AGN 060 de 2001", "Acuerdo AGN 042 de 2002"],
          summary:
            "Completa el estudio del 20% comportamental con las dos competencias de Nivel D del cargo 5AM-09: el uso racional, austero y exclusivo para fines oficiales de los bienes e insumos (Gestión de Recursos) y el apego estricto a las normas, protocolos y procedimientos vigentes (Cumplimiento).",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: 'Favores pequeños' que violan el Cumplimiento y la Gestión de Recursos",
            alerta:
              "Los casos situacionales suelen presentar 'pequeñas excepciones' aparentemente inofensivas: reservar un número de radicado para el día siguiente, prestar un portátil institucional el fin de semana para un trabajo universitario, o entregar papelería sin comprobante de salida porque 'es para el jefe'. En Nivel D, TODA excepción a los procedimientos o uso particular de bienes públicos es INCORRECTA."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #6, #9 y #10)",
            descripcion:
              "En tu labor diaria verificas que cada entrega de insumos o traslado de equipos quede respaldada por su comprobante o acta en el sistema de inventarios, reutilizas papel borrador cuando no contenga información reservada y aplicas sin excepciones los Acuerdos del AGN y reglamentos de la Procuraduría."
          },
          sections: [
            {
              heading: "1. Gestión de Recursos (Nivel D): Austeridad y Control de Bienes",
              body: "Evalúa el cuidado, protección y aprovechamiento eficiente de los recursos físicos y tecnológicos asignados:",
              bullets: [
                "Utiliza los insumos de papelería, fotocopiado, impresión y equipos de cómputo exclusivamente para las labores oficiales de la Procuraduría.",
                "Verifica físicamente las cantidades y el estado de los elementos al recibirlos o entregarlos en el almacén.",
                "Aplica prácticas de ahorro de energía, papel y consumibles (política de cero papel y austeridad del gasto público).",
                "Reporta oportunamente cualquier daño, deterioro o necesidad de mantenimiento preventivo de los bienes a su cargo."
              ]
            },
            {
              heading: "2. Cumplimiento (Nivel D): Apego Estricto a Normas y Procedimientos",
              body: "Evalúa la disciplina operativa para ceñirse a los lineamientos legales, técnicos y éticos de la entidad:",
              bullets: [
                "Acatamiento riguroso de los procedimientos de radicación, foliación, archivo, notificación y atención al usuario.",
                "Rechazo a prácticas informales como dejar números de radicado en blanco, fechar documentos con retroactividad o entregar expedientes sin registro de préstamo.",
                "Cumplimiento puntual de los horarios, turnos de atención en ventanilla y entregas asignadas.",
                "Actualización permanente en las circulares, directivas y manuales expedidos por la Procuraduría General de la Nación."
              ]
            }
          ],
          keyPoints: [
            "Las 5 competencias comportamentales del cargo 5AM-09 son: Orientación al Usuario (Nivel B), Organización del Trabajo (Nivel C), Responsabilidad (Nivel C), Gestión de Recursos (Nivel D) y Cumplimiento (Nivel D).",
            "En Gestión de Recursos Nivel D, ningún bien devolutivo ni de consumo puede destinarse a usos personales ni entregarse sin soporte.",
            "En Cumplimiento Nivel D, la legalidad y el procedimiento técnico prevalecen siempre sobre las solicitudes informales de compañeros o superiores."
          ],
          videos: [
            {
              titulo: "Entrenamiento en Juicio Situacional: Cumplimiento de Normas y Gestión de Recursos",
              canal: "Misión Mérito y Función Pública",
              duracion: "13:25",
              searchUrl: "https://www.youtube.com/results?search_query=competencias+comportamentales+cumplimiento+gestion+de+recursos+nivel+asistencial"
            }
          ],
          flashcards: [
            {
              id: "fc-comp703-1",
              categoria: "Gestión de Recursos · Nivel D",
              frente: "¿Cuáles son las 5 competencias comportamentales oficiales del cargo Auxiliar Administrativo 5AM-09 y sus niveles?",
              reverso: "1) Orientación al Usuario (Nivel B), 2) Organización del Trabajo (Nivel C), 3) Responsabilidad (Nivel C), 4) Gestión de Recursos (Nivel D) y 5) Cumplimiento (Nivel D).",
              referencia: "Manual de Funciones 5AM-09"
            },
            {
              id: "fc-comp703-2",
              categoria: "Cumplimiento · Nivel D",
              frente: "Un funcionario te pide apartar tres números de radicado del cierre de hoy para unos oficios que él traerá mañana. ¿Qué dicta la competencia de Cumplimiento (Nivel D)?",
              reverso: "Negarse respetuosamente explicando que el Acuerdo 060 de 2001 prohíbe reservar o dejar espacios en blanco en la numeración consecutiva de comunicaciones oficiales.",
              referencia: "Cumplimiento Nivel D · Acuerdo 060/2001"
            }
          ],
          caseQuestion: {
            stem: "Un profesional de tu dependencia te solicita entregarle de inmediato dos tóners y cinco resmas de papel del armario de suministros sin firmar la planilla de control porque 'tiene mucha prisa y luego regularizan el formato'. De acuerdo con las competencias de Gestión de Recursos y Cumplimiento (Nivel D), tú debes:",
            options: [
              "Entregarle los elementos sin soporte para no entorpecer la labor misional del profesional.",
              "Explicarle con cortesía que la entrega es inmediata pero requiere diligenciar y firmar en ese instante el comprobante de salida para mantener el control de inventario.",
              "Entregarle solo la mitad de los insumos sin registro para reducir el riesgo.",
              "Negarte a entregarle cualquier insumo aunque esté dispuesto a firmar el comprobante."
            ],
            correctIndex: 1,
            explanation: "Las competencias de Gestión de Recursos y Cumplimiento en Nivel D exigen combinar agilidad en el servicio con el respeto estricto por los controles de inventario: todo movimiento de bienes requiere soporte firmado en el momento de la entrega."
          }
        }
      ]
    }
  ]
};

/**
 * Banco Oficial del Motor de Simulacros en Formato de Juicio Situacional (10 Preguntas Oficiales)
 * Incluye: id, modulo, peso_evaluado, competencia_asociada, caso_situacional, pregunta, opciones, respuesta_correcta y justificacion.
 */
const simuladorData = [
  {
    id: "sim-q1",
    modulo: "Gestión Documental",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Organización del Trabajo (Nivel C)",
    caso_situacional:
      "En la Procuraduría Regional del Atlántico, usted como Auxiliar Administrativo (Código 5AM-09) recibe varios expedientes disciplinarios activos para su archivo físico diario. Un practicante sugiere separar todos los autos en una carpeta y todos los oficios de citación en otra carpeta distinta, pero el coordinador le recuerda que debe respetarse la secuencia natural de producción de las actuaciones.",
    pregunta:
      "Según la Ley 594 de 2000, ¿cuál de los siguientes principios archivísticos establece que los documentos deben conservar la disposición física en la que fueron creados por la oficina productora?",
    opciones: [
      "A) Principio de procedencia.",
      "B) Principio de orden original.",
      "C) Principio de ciclo vital.",
      "D) Principio de disposición final."
    ],
    respuesta_correcta: "B",
    justificacion:
      "El principio de orden original respeta la secuencia natural y cronológica de los trámites que dieron origen al documento."
  },
  {
    id: "sim-q2",
    modulo: "Gestión Documental",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Cumplimiento (Nivel D)",
    caso_situacional:
      "Durante la jornada de alistamiento de archivo en su dependencia de la Procuraduría, usted debe verificar cuántos años deben permanecer las carpetas de 'Derechos de Petición' en el Archivo de Gestión antes de ser remitidas en transferencia primaria al Archivo Central y cuál será su destino final.",
    pregunta:
      "¿Qué instrumento archivístico define el tiempo de permanencia de los documentos en cada una de las fases del ciclo vital (gestión, central e histórico)?",
    opciones: [
      "A) Cuadro de Clasificación Documental (CCD).",
      "B) Programa de Gestión Documental (PGD).",
      "C) Tablas de Valoración Documental (TVD).",
      "D) Tablas de Retención Documental (TRD)."
    ],
    respuesta_correcta: "D",
    justificacion:
      "Las TRD son el listado de series con sus correspondientes tipos documentales, a las cuales se asigna el tiempo de permanencia en cada etapa del ciclo vital."
  },
  {
    id: "sim-q3",
    modulo: "Atención al Usuario",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Cumplimiento (Nivel D)",
    caso_situacional:
      "En la ventanilla de radicación de la Procuraduría Regional se recibe la solicitud de un ciudadano que requiere copias simples e información pública sobre las actas de posesión de tres funcionarios de la sede. Usted debe registrarla en la matriz de control de vencimientos de la oficina.",
    pregunta:
      "De acuerdo con la normatividad vigente (Ley 1755 de 2015), ¿cuál es el término general que tiene la entidad para resolver una petición de información pública o documentos?",
    opciones: [
      "A) 10 días hábiles.",
      "B) 15 días hábiles.",
      "C) 30 días hábiles.",
      "D) 5 días hábiles."
    ],
    respuesta_correcta: "A",
    justificacion:
      "Las peticiones de información y solicitud de documentos deben resolverse dentro de los diez (10) días hábiles siguientes a su recepción."
  },
  {
    id: "sim-q4",
    modulo: "Gestión Documental",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Organización del Trabajo (Nivel C)",
    caso_situacional:
      "Habiendo culminado el trámite de varios procesos administrativos de vigencias anteriores y cumplido su tiempo de retención en la oficina productora, usted prepara las cajas y el inventario FUID para remitirlos a la segunda fase del archivo institucional, donde solo serán consultados de manera ocasional.",
    pregunta:
      "En el ciclo vital del documento, ¿cómo se denomina al archivo donde se transfieren los documentos que ya finalizaron su trámite pero siguen siendo de consulta esporádica?",
    opciones: [
      "A) Archivo de Gestión.",
      "B) Archivo Central.",
      "C) Archivo Histórico.",
      "D) Archivo Inactivo."
    ],
    respuesta_correcta: "B",
    justificacion:
      "El Archivo Central agrupa documentos transferidos por las dependencias una vez finalizado su trámite, siendo de consulta esporádica o por precaución legal."
  },
  {
    id: "sim-q5",
    modulo: "Atención al Usuario",
    peso_evaluado: "Comportamentales (20% · Clasificatorio)",
    competencia_asociada: "Orientación al Usuario (Nivel B)",
    caso_situacional:
      "Un ciudadano visiblemente alterado se acerca al punto de atención de la Procuraduría manifestando que desea interponer una queja disciplinaria contra un servidor público municipal, pero indica que en ese momento solo trae su relato escrito y no cuenta aún con los soportes probatorios impresos.",
    pregunta:
      "Como Auxiliar Administrativo, al recibir a un ciudadano que presenta una queja disciplinaria, su deber principal en primera instancia respecto a la atención es:",
    opciones: [
      "A) Rechazar la queja si no trae pruebas documentales físicas.",
      "B) Radicar la solicitud, brindar un trato respetuoso y orientar sobre el trámite a seguir.",
      "C) Resolver la queja inmediatamente en la ventanilla de atención.",
      "D) Remitir al ciudadano verbalmente a las Procuradurías Delegadas sin radicar."
    ],
    respuesta_correcta: "B",
    justificacion:
      "La orientación al usuario exige radicar, clasificar y tramitar según los procedimientos, garantizando siempre el valor del respeto y el compromiso institucional."
  },
  {
    id: "sim-q6",
    modulo: "Inventarios",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Gestión de Recursos (Nivel D)",
    caso_situacional:
      "En el pedido trimestral de recursos físicos para la Procuraduría Regional, usted recibe cajas de resmas de papel carta, cartuchos de tóner, dos escáneres de alta velocidad y tres sillas ergonómicas. Para registrarlos en el control interno de la dependencia, debe separarlos según su naturaleza contable y administrativa.",
    pregunta:
      "Dentro del manejo y control de bienes de la entidad, ¿cuál es la característica principal que diferencia a un 'bien de consumo' de un 'bien devolutivo'?",
    opciones: [
      "A) El bien devolutivo se extingue con su primer uso, el de consumo no.",
      "B) El bien de consumo se agota o perece con su uso, mientras que el devolutivo no se consume rápidamente y debe reintegrarse al almacén.",
      "C) Ambos bienes son idénticos y solo cambian de nombre según la dependencia.",
      "D) Los bienes de consumo solo incluyen papelería, y los devolutivos solo vehículos."
    ],
    respuesta_correcta: "B",
    justificacion:
      "Los bienes de consumo (ej. resmas de papel, tóner) se extinguen con el uso. Los devolutivos (ej. computadores, escritorios) tienen vida útil prolongada y se deprecian, por lo que deben devolverse o darse de baja formalmente."
  },
  {
    id: "sim-q7",
    modulo: "Estructura PGN",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Responsabilidad (Nivel C)",
    caso_situacional:
      "Durante el programa de inducción institucional para nuevos Auxiliares Administrativos 5AM-09, se analiza la ubicación de la Procuraduría General de la Nación dentro de la estructura del Estado colombiano conforme a los artículos 118 y 275 de la Constitución Política y el Decreto Ley 262 de 2000.",
    pregunta:
      "A nivel constitucional e institucional, la Procuraduría General de la Nación es el máximo organismo directivo de:",
    opciones: [
      "A) La Rama Ejecutiva del Poder Público.",
      "B) La Contraloría General de la República.",
      "C) El Ministerio Público.",
      "D) La Fiscalía General de la Nación."
    ],
    respuesta_correcta: "C",
    justificacion:
      "La Procuraduría General de la Nación, junto con la Defensoría del Pueblo y las personerías, conforman el Ministerio Público, encargado de la guarda y promoción de los derechos humanos y la protección del interés público."
  },
  {
    id: "sim-q8",
    modulo: "Gestión Documental",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Organización del Trabajo (Nivel C)",
    caso_situacional:
      "El Procurador Regional le solicita alistar un expediente disciplinario de 180 hojas para remitirlo en traslado a otra dependencia, indicándole que verifique que todas las piezas estén debidamente numeradas conforme a las normas técnicas del Archivo General de la Nación.",
    pregunta:
      "Según el Acuerdo 042 de 2002 del AGN, ¿en qué ubicación del documento físico debe realizarse el proceso de foliación (numeración consecutiva de las hojas)?",
    opciones: [
      "A) En la esquina inferior izquierda.",
      "B) En el centro de la página superior.",
      "C) Al respaldo de cada hoja escrita.",
      "D) En la esquina superior derecha de la cara recta del folio."
    ],
    respuesta_correcta: "D",
    justificacion:
      "La foliación debe realizarse en la esquina superior derecha del anverso (cara recta) de cada documento, utilizando lápiz de mina negra, tipo HB o B, de forma legible."
  },
  {
    id: "sim-q9",
    modulo: "Atención al Usuario",
    peso_evaluado: "Comportamentales (20% · Clasificatorio)",
    competencia_asociada: "Orientación al Usuario (Nivel B) / Cumplimiento (Nivel D)",
    caso_situacional:
      "Al revisar la bandeja de correspondencia radicada en el día, usted encuentra un Derecho de Petición escrito mediante el cual un ciudadano solicita la reliquidación de una factura de acueducto, asunto cuya competencia recae exclusivamente en la empresa prestadora y en la Superintendencia de Servicios Públicos Domiciliarios.",
    pregunta:
      "Si la Procuraduría recibe un Derecho de Petición que no es de su competencia, ¿cuál es el paso a seguir según la Ley 1755 de 2015?",
    opciones: [
      "A) Archivar la petición sin notificar al solicitante.",
      "B) Remitir la petición a la autoridad competente dentro de los 5 días siguientes e informar de inmediato al peticionario.",
      "C) Devolver la petición al ciudadano para que él mismo busque a la entidad correcta.",
      "D) Resolver la petición así no sea de su competencia para garantizar el servicio."
    ],
    respuesta_correcta: "B",
    justificacion:
      "Cuando no se tiene competencia, se debe enviar a quien sí la tiene en un plazo máximo de 5 días hábiles y notificar al ciudadano sobre este traslado."
  },
  {
    id: "sim-q10",
    modulo: "Inventarios",
    peso_evaluado: "Comportamentales (20% · Clasificatorio)",
    competencia_asociada: "Gestión de Recursos (Nivel D) / Responsabilidad (Nivel C)",
    caso_situacional:
      "El almacenista de la sede territorial llega a su oficina para hacer entrega de un computador de escritorio, una impresora multifuncional y los insumos de papelería solicitados para el trimestre. Usted procede a cotejar físicamente los seriales, placas y cantidades recibidas.",
    pregunta:
      "Al recibir materiales de almacén en la dependencia, el Auxiliar Administrativo debe verificar físicamente los elementos recibidos. ¿Qué documento soporta formalmente la entrega y asunción de responsabilidad sobre esos bienes?",
    opciones: [
      "A) El comprobante de egreso o salida de almacén debidamente firmado.",
      "B) La factura original del proveedor.",
      "C) Un correo electrónico del almacenista.",
      "D) El plan de compras anual."
    ],
    respuesta_correcta: "A",
    justificacion:
      "El comprobante de salida de almacén, al ser firmado por quien recibe, formaliza la entrega y traslada la responsabilidad de la custodia y uso del bien al funcionario correspondiente."
  },
  {
    id: "sim-q11",
    modulo: "Gestión Documental",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Cumplimiento (Nivel D)",
    caso_situacional:
      "Un viernes a las 4:45 p. m., un profesional de su dependencia le solicita apartar cuatro números consecutivos de radicación de salida en la Ventanilla Única para unos oficios que él terminará de redactar y pasará a firma del Procurador Regional el lunes a primera hora.",
    pregunta:
      "De conformidad con el artículo 5 del Acuerdo 060 de 2001 del Archivo General de la Nación (AGN), ¿cuál debe ser su actuación como Auxiliar Administrativo 5AM-09?",
    opciones: [
      "A) Reservar los cuatro números dejando una nota provisional en el libro radicador.",
      "B) Negarse respetuosamente, ya que está prohibido reservar números de radicación, dejar espacios en blanco o numerar actos no firmados.",
      "C) Asignarles el mismo número del último oficio del viernes agregando los sufijos BIS-1 a BIS-4.",
      "D) Reservar los números únicamente si el profesional deja un correo electrónico de respaldo."
    ],
    respuesta_correcta: "B",
    justificacion:
      "El artículo 5 del Acuerdo AGN 060 de 2001 prohíbe taxativamente reservar números de radicación, repetirlos, dejar espacios en blanco o usar numeración con sufijos (BIS). Solo se radican comunicaciones debidamente firmadas.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: El Art. 5 del Acuerdo 060 de 2001 exige numeración estrictamente secuencial y prohíbe reservar radicados o numerar documentos sin firma. 2) Por qué A, C y D son trampas: Ni las notas provisionales, ni los sufijos BIS, ni los correos internos autorizan vulnerar la prohibición legal de reserva de consecutivos."
  },
  {
    id: "sim-q12",
    modulo: "Gestión Documental",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Organización del Trabajo (Nivel C)",
    caso_situacional:
      "Durante el proceso técnico de Organización Documental en el Archivo de Gestión de la Procuraduría Provincial, usted ya agrupó las carpetas por series según el CCD y ordenó cronológicamente cada pieza foliándola. Ahora procede a diligenciar el Formato Único de Inventario Documental (FUID) y los metadatos de localización.",
    pregunta:
      "Según el Decreto 1080 de 2015, la actividad de elaborar el inventario FUID e índices de búsqueda corresponde específicamente a la etapa técnica de:",
    opciones: [
      "A) Clasificación documental.",
      "B) Ordenación documental.",
      "C) Descripción documental.",
      "D) Valoración documental."
    ],
    respuesta_correcta: "C",
    justificacion:
      "La Organización Documental se compone de tres fases secuenciales: 1º Clasificación (agrupar por series), 2º Ordenación (disponer cronológicamente y foliar) y 3º Descripción (registrar atributos en el FUID e índices para su recuperación).",
    explicacion_paso_a_paso:
      "1) Por qué C es correcta: La Descripción es la 3ª etapa de la Organización Documental y consiste en elaborar instrumentos de control y consulta como el FUID. 2) Por qué A y B son trampas: Clasificación es agrupar por series/subseries y Ordenación es ubicar cronológicamente y foliar. 3) D es otro de los 8 procesos (determinar valores primarios/secundarios)."
  },
  {
    id: "sim-q13",
    modulo: "Documentos GTC 185",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Cumplimiento (Nivel D)",
    caso_situacional:
      "El Procurador Regional le pide proyectar dos comunicaciones: la primera está dirigida al Alcalde Municipal solicitando copia de un decreto local; la segunda está dirigida al Coordinador del Grupo de Gestión Documental de la misma Procuraduría solicitando cajas de archivo X-200.",
    pregunta:
      "De acuerdo con la Guía Técnica Colombiana GTC 185 y las normas de comunicaciones oficiales, ¿qué tipos documentales debe proyectar respectivamente para cada destinatario?",
    opciones: [
      "A) Un memorando para el Alcalde y un oficio para el Coordinador interno.",
      "B) Un oficio (carta) para el Alcalde Municipal (externo) y un memorando para el Coordinador interno de la entidad.",
      "C) Dos circulares generales sin numeración consecutiva.",
      "D) Dos actas administrativas firmadas únicamente por el auxiliar."
    ],
    respuesta_correcta: "B",
    justificacion:
      "Según la GTC 185, el oficio o carta institucional se emplea para las comunicaciones externas (dirigidas a otras entidades o ciudadanos), mientras que el memorando es el documento propio de la comunicación interna entre dependencias de la misma entidad.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: El oficio va hacia afuera de la PGN (Alcaldía) y el memorando circula internamente entre oficinas de la misma PGN. 2) Por qué A es trampa: Invierte los conceptos de oficio y memorando. 3) C y D usan documentos con finalidades distintas (la circular da instrucciones generales y el acta registra reuniones)."
  },
  {
    id: "sim-q14",
    modulo: "Documentos GTC 185",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Organización del Trabajo (Nivel C)",
    caso_situacional:
      "Usted apoya como secretario técnico una reunión del Comité Regional y debe elaborar el acta correspondiente conforme a la GTC 185. Uno de los asistentes le pide que transcriba palabra por palabra todas las discusiones de dos horas y que deje el acta firmada en blanco para agregar compromisos la semana siguiente.",
    pregunta:
      "Conforme a las buenas prácticas de elaboración de actas (GTC 185), ¿cuál es la actuación técnica correcta?",
    opciones: [
      "A) Firmar el acta en blanco y completarla cuando los asistentes envíen sus comentarios por chat.",
      "B) Consignar el orden del día, asistentes, síntesis de las deliberaciones, decisiones adoptadas y matriz de compromisos (responsable y fecha), pasándola a firma de quien presidió y del secretario sin dejar espacios en blanco.",
      "C) Omitir la lista de asistentes y registrar únicamente las opiniones personales del auxiliar.",
      "D) Reemplazar el acta por una cuenta de cobro interna."
    ],
    respuesta_correcta: "B",
    justificacion:
      "El acta administrativa no es una transcripción literal palabra por palabra, sino el documento probatorio que sintetiza los temas tratados, las decisiones tomadas y los compromisos con responsable y fecha límite, suscrito por presidente y secretario.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Recoge todos los elementos estructurales de la GTC 185 y respeta la prohibición de firmar en blanco. 2) Por qué A es trampa: Jamás se firman actas en blanco ni con espacios abiertos. 3) C y D desnaturalizan el valor probatorio del acta."
  },
  {
    id: "sim-q15",
    modulo: "Documentos GTC 185",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Gestión de Recursos (Nivel D)",
    caso_situacional:
      "En su dependencia se presentan simultáneamente tres necesidades administrativas: 1) Solicitar al almacén 20 resmas de papel y 4 tóners; 2) Ordenar la reparación técnica de una fotocopiadora averiada; y 3) Tramitar el cobro de honorarios de un perito externo no obligado a expedir factura electrónica.",
    pregunta:
      "¿Qué documentos de soporte administrativo corresponden exactamente a cada una de estas tres situaciones (1, 2 y 3)?",
    opciones: [
      "A) 1: Cuenta de cobro; 2: Orden de pedido; 3: Orden de trabajo.",
      "B) 1: Orden de pedido (requisición); 2: Orden de trabajo; 3: Cuenta de cobro con sus soportes y visto bueno de supervisión.",
      "C) 1: Circular; 2: Memorando; 3: Acta de comité.",
      "D) 1: Orden de trabajo; 2: Cuenta de cobro; 3: Requisición de insumos."
    ],
    respuesta_correcta: "B",
    justificacion:
      "La orden de pedido o requisición solicita bienes/suministros al almacén; la orden de trabajo instruye la ejecución de un servicio o mantenimiento; y la cuenta de cobro soporta el pago de servicios a personas no obligadas a facturar.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Asigna a cada necesidad su documento exacto (Bienes = Orden de pedido; Servicio/Mantenimiento = Orden de trabajo; Pago sin factura = Cuenta de cobro). 2) A y D invierten las definiciones para confundir al aspirante."
  },
  {
    id: "sim-q16",
    modulo: "Documentos GTC 185",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Responsabilidad (Nivel C)",
    caso_situacional:
      "Usted termina de digitar un oficio de respuesta proyectado por el abogado sustanciador para la firma del Procurador Provincial. Al final del documento, debajo del bloque de firma y de la línea de 'Anexos', debe incluir las líneas de identificación de trazabilidad según la GTC 185.",
    pregunta:
      "¿Cuál es la finalidad de registrar al pie del oficio las líneas de 'Proyectó / Elaboró' y 'Revisó'?",
    opciones: [
      "A) Reemplazar la firma del Procurador Provincial para que el oficio salga más rápido.",
      "B) Dejar trazabilidad administrativa y documental sobre los servidores que intervinieron en la proyección, digitación y revisión previa del documento antes de la firma del competente.",
      "C) Permitir que el destinatario externo presente recursos contra el digitador.",
      "D) Cumplir un requisito meramente decorativo que puede inventarse con iniciales falsas."
    ],
    respuesta_correcta: "B",
    justificacion:
      "En la GTC 185, las líneas de 'Proyectó/Elaboró' y 'Revisó' garantizan el control interno y la trazabilidad documental dentro del expediente, sin sustituir en ningún caso la firma del jefe o funcionario competente.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Identifica la cadena de responsabilidad interna en la producción documental. 2) Por qué A es trampa: El auxiliar proyecta o digita, pero jamás reemplaza la firma del titular de la competencia."
  },
  {
    id: "sim-q17",
    modulo: "Documentos GTC 185",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Organización del Trabajo (Nivel C)",
    caso_situacional:
      "El Despacho del Procurador Regional necesita comunicar a los 18 funcionarios de la sede el nuevo horario de cierre de inventario documental de fin de mes, utilizando una sola comunicación interna numerada que sea conocida por todos.",
    pregunta:
      "¿Qué documento organizacional de la GTC 185 es el idóneo para impartir una instrucción interna de carácter general a múltiples destinatarios?",
    opciones: [
      "A) La Circular interna numerada.",
      "B) La Cuenta de cobro.",
      "C) El Comprobante de salida de almacén.",
      "D) El Acta de baja de bienes."
    ],
    respuesta_correcta: "A",
    justificacion:
      "La circular tiene como propósito dar a conocer información o instrucciones de carácter general a un grupo plural de destinatarios internos o externos.",
    explicacion_paso_a_paso:
      "1) Por qué A es correcta: La circular está diseñada específicamente para dirigirse a varios destinatarios con una misma instrucción general. 2) B, C y D son soportes contables o de almacén ajenos a una directriz general de personal."
  },
  {
    id: "sim-q18",
    modulo: "Atención al Usuario",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Cumplimiento (Nivel D)",
    caso_situacional:
      "En la sede de la Procuraduría se radican el mismo día dos derechos de petición: el primero es una solicitud de interés particular sobre el reconocimiento de una acreencia laboral; el segundo es una consulta jurídica formulada por un ciudadano sobre la interpretación de una norma disciplinaria.",
    pregunta:
      "Según el artículo 14 de la Ley 1755 de 2015, ¿cuáles son los términos legales máximos para resolver cada una de estas peticiones respectivamente?",
    opciones: [
      "A) 10 días hábiles para la petición general y 15 días hábiles para la consulta.",
      "B) 15 días hábiles para la petición general/particular y 30 días hábiles para la consulta.",
      "C) 30 días calendario para ambas solicitudes.",
      "D) 5 días hábiles para la petición general y 10 días hábiles para la consulta."
    ],
    respuesta_correcta: "B",
    justificacion:
      "El artículo 14 de la Ley 1755 de 2015 establece: 15 días hábiles para peticiones generales o particulares, 10 días hábiles para peticiones de información y documentos, y 30 días hábiles para resolver consultas.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Aplica la regla 15-10-30 de la Ley 1755/2015 (15 días petición general, 10 días documentos/información, 30 días consultas). 2) Por qué C es trampa: En derecho administrativo los términos de días son HÁBILES, nunca calendario, salvo disposición expresa."
  },
  {
    id: "sim-q19",
    modulo: "Atención al Usuario",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Orientación al Usuario (Nivel B)",
    caso_situacional:
      "Al revisar una petición recién radicada, el profesional advierte que falta un documento indispensable para poder decidir de fondo y le pide a usted proyectar el oficio de requerimiento al peticionario para que complete la solicitud conforme al artículo 17 de la Ley 1755 de 2015.",
    pregunta:
      "¿Dentro de qué término debe requerirse al peticionario para que complete su petición y qué plazo tiene el ciudadano para aportar lo faltante antes de que opere el desistimiento tácito?",
    opciones: [
      "A) Requerir en 30 días hábiles y el ciudadano tiene 5 días para responder.",
      "B) Requerir dentro de los 10 días siguientes a la radicación y el ciudadano cuenta con un (1) mes para completar la petición (prorrogable hasta por otro mes si lo solicita antes de vencer).",
      "C) Rechazar de plano la petición el mismo día sin conceder plazo de subsanación.",
      "D) Requerir en 15 días calendario y esperar un año."
    ],
    respuesta_correcta: "B",
    justificacion:
      "El artículo 17 de la Ley 1755 de 2015 dispone que la autoridad debe requerir al peticionario por una sola vez dentro de los diez (10) días siguientes a la fecha de radicación, y el peticionario tendrá un (1) mes para aportar lo requerido.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Cita con exactitud los dos plazos del Art. 17 Ley 1755 (10 días para requerir + 1 mes para que el ciudadano subsane). 2) Por qué C es trampa: Ninguna petición incompleta puede rechazarse de plano sin antes requerir al ciudadano."
  },
  {
    id: "sim-q20",
    modulo: "Atención al Usuario",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Responsabilidad (Nivel C)",
    caso_situacional:
      "Un periodista solicita en ventanilla copia íntegra de un expediente disciplinario que apenas se encuentra en etapa de Investigación Disciplinaria (antes de formularse pliego de cargos). Usted debe verificar el régimen de acceso a la información pública y las excepciones legales.",
    pregunta:
      "De acuerdo con la Ley 1712 de 2014 (Transparencia) y el artículo 115 del Código General Disciplinario (Ley 1952 de 2019), ¿cuál es el estado de reserva de esa actuación?",
    opciones: [
      "A) Es información pública de libre acceso para cualquier tercero desde el primer día.",
      "B) En el proceso disciplinario las actuaciones están sometidas a reserva legal durante la indagación previa y la investigación disciplinaria; solo tienen acceso los sujetos procesales hasta que se cite a audiencia y se formule pliego de cargos o se ordene el archivo.",
      "C) El Auxiliar Administrativo puede entregar copia informal si el solicitante paga las fotocopias.",
      "D) La reserva solo aplica para procesos penales, nunca para procesos disciplinarios en la PGN."
    ],
    respuesta_correcta: "B",
    justificacion:
      "El artículo 115 de la Ley 1952 de 2019 establece que la actuación disciplinaria es reservada durante la indagación previa y la investigación; cesa la reserva para terceros cuando se formula pliego de cargos o se profiere archivo definitivo.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Articula la Ley 1712/2014 con la reserva legal especial del Art. 115 del CGD. 2) Por qué A, C y D son trampas: Entregar copias a terceros no sujetos procesales durante la etapa de investigación constituye falta disciplinaria por violación de la reserva."
  },
  {
    id: "sim-q21",
    modulo: "Inventarios",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Gestión de Recursos (Nivel D)",
    caso_situacional:
      "En el almacén seccional de la Procuraduría existen dos lotes de cajas de resmas de papel ecológico y cartuchos de impresión: el Lote #1 ingresó en febrero con vencimiento de garantía próximo y el Lote #2 ingresó en agosto. Usted debe despachar suministros a las dependencias evitando el deterioro u obsolescencia del stock.",
    pregunta:
      "¿Qué método técnico de gestión y rotación de inventarios en Kardex asegura que los primeros elementos que ingresaron al almacén sean los primeros en entregarse al servicio?",
    opciones: [
      "A) Método UEPS (Últimas en Entrar, Primeras en Salir).",
      "B) Método PEPS / FIFO (Primeras en Entrar, Primeras en Salir).",
      "C) Método de baja automática sin registro Kardex.",
      "D) Método aleatorio sin control de fechas de ingreso."
    ],
    respuesta_correcta: "B",
    justificacion:
      "El método PEPS (Primeras en Entrar, Primeras en Salir, o FIFO) garantiza la rotación ordenada de los bienes de consumo en el Kardex, despachando primero las unidades más antiguas para prevenir su deterioro o vencimiento.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: PEPS despacha primero el lote de febrero antes que el de agosto, protegiendo el patrimonio público frente a vencimientos. 2) Por qué A es trampa: UEPS dejaría envejecer el lote antiguo en el fondo de la bodega."
  },
  {
    id: "sim-q22",
    modulo: "Inventarios",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Responsabilidad (Nivel C)",
    caso_situacional:
      "Un compañero de otra dependencia le pide prestado por dos meses un escáner de alta velocidad que figura cargado en el inventario individual suyo como Auxiliar Administrativo 5AM-09. Él le dice que se lo lleva de una vez y que 'no hace falta avisar a almacén porque están en el mismo piso'.",
    pregunta:
      "Desde el punto de vista del control administrativo y fiscal de bienes devolutivos, ¿cuál es el procedimiento obligatorio antes de entregar el equipo?",
    opciones: [
      "A) Entregarlo verbalmente, pues la responsabilidad fiscal se traslada sola por el simple préstamo físico.",
      "B) Tramitar y suscribir previamente el formato o comprobante oficial de traslado/traspaso de bienes ante el área de Almacén e Inventarios para actualizar el responsable de la custodia.",
      "C) Quitarle la placa de inventario al escáner mientras dure el préstamo.",
      "D) Darlo de baja definitiva en contabilidad."
    ],
    respuesta_correcta: "B",
    justificacion:
      "Todo bien devolutivo está asignado individualmente mediante placa a un servidor responsable. Si el bien se entrega de mano en mano sin acta formal de traslado en Almacén, el funcionario inicial sigue respondiendo disciplinaria y fiscalmente por cualquier pérdida o daño.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Solo el comprobante oficial de traslado actualiza la custodia en el sistema de inventarios. 2) Por qué A es trampa: Los préstamos informales 'de mano en mano' no eximen de responsabilidad al titular del inventario."
  },
  {
    id: "sim-q23",
    modulo: "Inventarios",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Cumplimiento (Nivel D)",
    caso_situacional:
      "Durante el conteo físico anual de inventarios en la Procuraduría Regional, se identifican tres impresoras de matriz de punto totalmente inservibles y sin posibilidad de reparación económica. El coordinador pregunta cómo retirarlas legalmente del inventario y de los estados financieros.",
    pregunta:
      "¿Qué requisitos exige el procedimiento de Baja de Bienes Devolutivos en una entidad pública?",
    opciones: [
      "A) Arrojarlas directamente al contenedor de basura municipal para liberar espacio.",
      "B) Reintegrar los equipos al almacén, contar con el concepto técnico de inservibilidad u obsolescencia, recomendación del comité de bienes, acto administrativo motivado de baja y acta de disposición final (ej. gestor ambiental RAEE).",
      "C) Regalarlas a los funcionarios de la oficina sin acto administrativo.",
      "D) Borrarlas de la hoja de Excel sin soporte técnico ni resolución."
    ],
    respuesta_correcta: "B",
    justificacion:
      "La baja definitiva de bienes públicos requiere reintegro al almacén, dictamen técnico de inservibilidad/obsolescencia, acto administrativo que ordene la baja contable y física, y disposición ambientalmente segura (RAEE en equipos electrónicos).",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Cumple el ciclo legal, técnico, contable y ambiental de baja de activos públicos. 2) A, C y D configuran faltas disciplinarias y fiscales por disposición arbitraria de bienes del Estado."
  },
  {
    id: "sim-q24",
    modulo: "Estructura PGN",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Cumplimiento (Nivel D)",
    caso_situacional:
      "En una jornada de orientación interinstitucional, se analizan las tres funciones misionales que ejerce la Procuraduría General de la Nación conforme a la Constitución Política y al Decreto Ley 262 de 2000 (modificado por el Decreto Ley 1851 de 2021).",
    pregunta:
      "¿Cuáles son las tres (3) funciones misionales que identifican el quehacer de la Procuraduría General de la Nación?",
    opciones: [
      "A) Función Legislativa, Función Electoral y Función Cambiaria.",
      "B) Función Preventiva, Función de Intervención Judicial y Administrativa, y Función Disciplinaria.",
      "C) Función de Control Fiscal, Función Penal Acusatoria y Función Militar.",
      "D) Función Notarial, Función Registral y Función Tributaria."
    ],
    respuesta_correcta: "B",
    justificacion:
      "Conforme al Decreto Ley 262 de 2000, la Procuraduría cumple tres funciones misionales: 1) Preventiva (anticiparse y vigilar el cumplimiento de la ley sin coadministrar), 2) De Intervención (ante autoridades judiciales y administrativas en defensa del orden jurídico) y 3) Disciplinaria (investigar y sancionar faltas de servidores públicos).",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Reúne exactamente los tres ejes misionales del Decreto Ley 262 de 2000. 2) Por qué C es trampa: El control fiscal es de la Contraloría y la acción penal acusatoria es de la Fiscalía General de la Nación."
  },
  {
    id: "sim-q25",
    modulo: "Estructura PGN",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Organización del Trabajo (Nivel C)",
    caso_situacional:
      "Usted debe radicar y repartir internamente las comunicaciones que llegan al despacho, distinguiendo cuándo una actuación corresponde a la competencia territorial de una Procuraduría Regional, Distrital o Provincial y cuándo el Procurador General puede asumir directamente un proceso.",
    pregunta:
      "Según la Constitución Política (Art. 277 num. 6) y el Decreto Ley 262 de 2000, la facultad mediante la cual la Procuraduría puede desplazar el control disciplinario interno de cualquier entidad pública para asumir directamente una investigación se denomina:",
    opciones: [
      "A) Control fiscal excepcional.",
      "B) Poder disciplinario preferente.",
      "C) Coadministración preventiva.",
      "D) Jurisdicción coactiva tributaria."
    ],
    respuesta_correcta: "B",
    justificacion:
      "El poder disciplinario preferente faculta al Procurador General de la Nación (y por delegación a las dependencias competentes de la PGN) para iniciar, proseguir o remitir cualquier investigación o juzgamiento de competencia de los órganos de control disciplinario interno de las entidades públicas.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: El poder preferente es la figura constitucional (Art. 277-6 C.P.) exclusiva del Ministerio Público en materia disciplinaria. 2) Por qué C es trampa: La función preventiva jamás implica coadministrar en las entidades vigiladas."
  },
  {
    id: "sim-q26",
    modulo: "Estructura PGN",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Cumplimiento (Nivel D)",
    caso_situacional:
      "Con la entrada en vigencia del Código General Disciplinario (Ley 1952 de 2019, reformada por la Ley 2094 de 2021), en las Procuradurías se implementó una separación estricta de roles procesales para garantizar la imparcialidad en los procesos disciplinarios. Usted apoya el control de reparto de expedientes.",
    pregunta:
      "¿Cuál es la regla de separación de funciones entre la etapa de Instrucción y la etapa de Juzgamiento establecida por la Ley 2094 de 2021?",
    opciones: [
      "A) El mismo funcionario que investiga y formula el pliego de cargos debe dictar también el fallo de primera instancia.",
      "B) El funcionario que adelanta la etapa de Instrucción (investigación y formulación del pliego de cargos) debe ser diferente e independiente del funcionario que adelanta la etapa de Juzgamiento (descargos, pruebas de juicio y fallo).",
      "C) El Auxiliar Administrativo 5AM-09 puede dictar el fallo disciplinario cuando el Procurador esté en comisión.",
      "D) Ya no existe pliego de cargos en el procedimiento disciplinario colombiano."
    ],
    respuesta_correcta: "B",
    justificacion:
      "La Ley 2094 de 2021 garantizó que en el proceso disciplinario el funcionario instructor (quien investiga y formula cargos) sea siempre distinto del funcionario de juzgamiento (quien dirige la etapa de juicio y profiere el fallo).",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Es el pilar de la reforma de la Ley 2094 de 2021 (separación entre instrucción y juzgamiento). 2) A describe el esquema antiguo ya derogado. 3) C es falso porque el nivel asistencial no tiene competencia sancionatoria."
  },
  {
    id: "sim-q27",
    modulo: "Estructura PGN",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Cumplimiento (Nivel D)",
    caso_situacional:
      "Un ciudadano acude a la sede de la Procuraduría y pregunta quién elige al Procurador General de la Nación, cuánto dura su período constitucional y quiénes integran la terna de candidatos según el artículo 276 de la Constitución Política.",
    pregunta:
      "De acuerdo con el artículo 276 de la Constitución Política de Colombia, el Procurador General de la Nación es elegido por:",
    opciones: [
      "A) La Cámara de Representantes para un período de 8 años, de terna enviada por los Gobernadores.",
      "B) El Senado de la República para un período de cuatro (4) años, de terna integrada por candidatos del Presidente de la República, la Corte Suprema de Justicia y el Consejo de Estado.",
      "C) El Presidente de la República mediante libre nombramiento y remoción.",
      "D) El Congreso en pleno de terna enviada por el Contralor General y el Fiscal General."
    ],
    respuesta_correcta: "B",
    justificacion:
      "El artículo 276 constitucional establece que el Procurador General de la Nación será elegido por el Senado, para un período de cuatro años, de terna integrada por candidatos del Presidente de la República, la Corte Suprema de Justicia y el Consejo de Estado.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Reúne el elector (Senado), el período (4 años) y los tres ternantes (Presidente, Corte Suprema y Consejo de Estado). 2) A, C y D alteran el órgano elector o los integrantes de la terna."
  },
  {
    id: "sim-q28",
    modulo: "MIPG y Ofimática",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Organización del Trabajo (Nivel C)",
    caso_situacional:
      "En la evaluación anual de gestión institucional bajo el Modelo Integrado de Planeación y Gestión (MIPG - Decreto 1499 de 2017), su dependencia revisa cómo contribuye el trabajo diario de archivo, atención al usuario y autocontrol a las 7 dimensiones operativas del modelo.",
    pregunta:
      "Dentro de las siete (7) dimensiones de MIPG, ¿cuál es considerada el 'corazón del modelo' y en cuál dimensión se articula el Modelo Estándar de Control Interno (MECI)?",
    opciones: [
      "A) El corazón es Presupuesto y el MECI es la octava dimensión independiente.",
      "B) El corazón de MIPG es la 1ª dimensión (Talento Humano) y el MECI se integra en la 7ª dimensión (Control Interno).",
      "C) El corazón es Contratación y el MECI reemplaza a la Gestión Documental.",
      "D) MIPG solo tiene 3 dimensiones y no incluye control interno."
    ],
    respuesta_correcta: "B",
    justificacion:
      "MIPG cuenta con 7 dimensiones operativas: la 1ª (Talento Humano) es el corazón del modelo, y en la 7ª dimensión (Control Interno) se estructura el MECI con sus cinco componentes y esquema de líneas de defensa.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Identifica a Talento Humano como corazón de MIPG y ubica al MECI dentro de la 7ª dimensión (Control Interno). 2) Por qué A es trampa frecuente: El MECI NO es una octava dimensión, sino parte de la séptima."
  },
  {
    id: "sim-q29",
    modulo: "MIPG y Ofimática",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Responsabilidad (Nivel C)",
    caso_situacional:
      "Para garantizar la validez jurídica y probatoria de un auto notificado electrónicamente desde la Procuraduría, el área de sistemas verifica que el archivo no haya sido alterado tras su firma, que solo tengan acceso los sujetos autorizados y que esté disponible en el repositorio oficial.",
    pregunta:
      "En Seguridad Digital de la Información (ISO 27001 / Política de Gobierno Digital), ¿cuáles son los tres pilares de la 'Tríada CID' y cuál de ellos garantiza específicamente que el documento no ha sido modificado ni alterado?",
    opciones: [
      "A) Capacidad, Impresión y Duplicidad; garantiza la Impresión.",
      "B) Confidencialidad, Integridad y Disponibilidad; el pilar que garantiza que la información sea exacta, completa y no haya sufrido alteración no autorizada es la Integridad.",
      "C) Clasificación, Inventario y Descarte; garantiza el Descarte.",
      "D) Conectividad, Intranet y Dominio; garantiza el Dominio."
    ],
    respuesta_correcta: "B",
    justificacion:
      "La Tríada CID se compone de Confidencialidad (acceso solo a autorizados), Integridad (exactitud y no alteración de los datos) y Disponibilidad (acceso oportuno cuando se requiera).",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Define con precisión los 3 pilares (Confidencialidad, Integridad y Disponibilidad) e identifica a la Integridad como la garantía contra alteraciones. 2) A, C y D usan acrónimos falsos."
  },
  {
    id: "sim-q30",
    modulo: "MIPG y Ofimática",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Organización del Trabajo (Nivel C)",
    caso_situacional:
      "Como Auxiliar Administrativo 5AM-09, usted lleva en Microsoft Excel la matriz de seguimiento de Derechos de Petición radicados. Tiene en la celda A2 la fecha de recepción, en B2 el plazo legal de 10 días hábiles y en el rango F2:F20 el listado oficial de días festivos de Colombia.",
    pregunta:
      "¿Qué función de Excel le permite calcular automáticamente la fecha exacta de vencimiento sumando únicamente días hábiles y excluyendo fines de semana y los festivos del rango F2:F20?",
    opciones: [
      "A) =SUMA(A2;B2;F2:F20)",
      "B) =DIA.LAB(A2; B2; F2:F20)",
      "C) =CONCATENAR(A2; B2)",
      "D) =CONTAR.SI(A2:B2; \"FESTIVO\")"
    ],
    respuesta_correcta: "B",
    justificacion:
      "La función =DIA.LAB(fecha_inicial; días; [vacaciones]) devuelve la fecha futura después de sumar un número determinado de días laborables (hábiles), descontando sábados, domingos y los festivos indicados.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: =DIA.LAB calcula una fecha de vencimiento sumando días hábiles; (nota: =DIAS.LAB con S cuenta cuántos días hábiles hay entre dos fechas). 2) A suma números simples incluyendo sábados y domingos, lo que daría una fecha errónea."
  },
  {
    id: "sim-q31",
    modulo: "MIPG y Ofimática",
    peso_evaluado: "Conocimientos (60% · Eliminatorio)",
    competencia_asociada: "Organización del Trabajo (Nivel C)",
    caso_situacional:
      "Su dependencia debe generar 60 oficios citatorios personalizados para 60 destinatarios distintos registrados en una tabla de Excel (con columnas Nombre, Cargo, Dirección y Radicado), conservando exactamente el mismo formato institucional en Microsoft Word.",
    pregunta:
      "¿Qué herramienta ofimática de Microsoft Word permite cruzar automáticamente la plantilla del oficio con la base de datos de Excel para generar las 60 comunicaciones personalizadas sin copiar y pegar una por una?",
    opciones: [
      "A) Control de cambios y comentarios.",
      "B) Combinación de correspondencia (Mail Merge).",
      "C) Corrector ortográfico manual.",
      "D) Salto de sección continuo."
    ],
    respuesta_correcta: "B",
    justificacion:
      "La Combinación de correspondencia (en la pestaña Correspondencia de Word) vincula un documento principal con un origen de datos (como una hoja de Excel) para producir masivamente cartas, oficios, sobres o etiquetas personalizados.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Automatiza la inserción de campos variables desde Excel en una plantilla oficial de Word. 2) A, C y D son funciones de edición que no cruzan bases de datos."
  },
  {
    id: "sim-q32",
    modulo: "Comportamentales (20%)",
    peso_evaluado: "Comportamentales (20% · Clasificatorio)",
    competencia_asociada: "Orientación al Usuario (Nivel B)",
    caso_situacional:
      "En la fila de atención presencial de la Procuraduría Regional aguardan cuatro personas, y acaba de ingresar una ciudadana en avanzado estado de gestación junto con un adulto mayor en silla de ruedas que solicitan radicar un escrito urgente. Algunos usuarios en la fila protestan si se les atiende primero.",
    pregunta:
      "De acuerdo con la competencia comportamental de Orientación al Usuario y al Ciudadano (Nivel B) y los protocolos de atención preferencial, ¿cuál debe ser su actuación?",
    opciones: [
      "A) Pedirles que hagan la fila general por orden estricto de llegada para evitar reclamos de los demás ciudadanos.",
      "B) Aplicar de inmediato el protocolo de atención prioritaria y enfoque diferencial para la mujer gestante y el adulto mayor con discapacidad, explicando con cortesía y pedagogía a los demás usuarios el mandato legal de prelación de turno.",
      "C) Cerrar la ventanilla temporalmente hasta que los usuarios se pongan de acuerdo entre ellos.",
      "D) Recibirles el documento sin entregarles número ni constancia de radicado."
    ],
    respuesta_correcta: "B",
    justificacion:
      "El Nivel B de Orientación al Usuario exige identificar sujetos de especial protección constitucional (adultos mayores, personas con discapacidad, gestantes), brindarles atención prioritaria y manejar la situación con asertividad y respeto frente al público.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Aplica el enfoque diferencial obligatorio (Ley 1755 / protocolos de servicio al ciudadano) y comunica con respeto la prelación legal. 2) A desconoce la prelación constitucional; C y D vulneran el deber de servicio y radicación."
  },
  {
    id: "sim-q33",
    modulo: "Comportamentales (20%)",
    peso_evaluado: "Comportamentales (20% · Clasificatorio)",
    competencia_asociada: "Organización del Trabajo (Nivel C)",
    caso_situacional:
      "Al iniciar su jornada a las 8:00 a. m. como Auxiliar Administrativo 5AM-09, usted tiene sobre su escritorio tres actividades: 1) Organizar las cajas de archivo histórico del año pasado; 2) Radicar y enviar una contestación de tutela e informe disciplinario cuyo término legal vence hoy a las 11:00 a. m.; y 3) Actualizar el rótulo de las carpetas de suministros.",
    pregunta:
      "¿Qué orden de ejecución refleja el Nivel C de la competencia comportamental 'Organización del Trabajo'?",
    opciones: [
      "A) Empezar por los rótulos de suministros porque es la tarea más rápida y sencilla.",
      "B) Priorizar de inmediato la radicación y envío del informe de tutela y actuación con vencimiento hoy a las 11:00 a. m., verificando sus anexos y constancia de entrega, y programar luego las labores de archivo sin término fatal.",
      "C) Dejar las tres tareas para la jornada de la tarde.",
      "D) Realizar primero el archivo histórico y pedirle al juez de tutela que espere un día más."
    ],
    respuesta_correcta: "B",
    justificacion:
      "La competencia Organización del Trabajo en Nivel C exige planificar y priorizar las actividades según la criticidad misional y el vencimiento de términos legales perentorios, evitando riesgos procesales o disciplinarios.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Prioriza lo urgente e impostergable por mandato legal (término judicial/disciplinario que vence hoy) sobre tareas operativas diferibles. 2) A, C y D ocasionarían incumplimiento de términos legales."
  },
  {
    id: "sim-q34",
    modulo: "Comportamentales (20%)",
    peso_evaluado: "Comportamentales (20% · Clasificatorio)",
    competencia_asociada: "Responsabilidad (Nivel C)",
    caso_situacional:
      "Usted tiene asignado usuario y clave personal en el sistema institucional SIGDEA/SIM. Un compañero recién trasladado, que aún no ha tramitado su credencial ante la Oficina de Sistemas, le pide que le deje abierta su sesión toda la tarde para él adelantar radicaciones en su computador mientras usted sale a entregar correspondencia.",
    pregunta:
      "Conforme a la competencia de Responsabilidad con la Organización (Nivel C) y las políticas de seguridad de la información, usted debe:",
    opciones: [
      "A) Prestarle su usuario y contraseña para demostrar trabajo en equipo y compañerismo.",
      "B) Negarse con amabilidad, bloquear su estación de trabajo al retirarse, explicarle que las credenciales son personales e intransferibles y orientarlo para gestionar de inmediato su propio usuario autorizado.",
      "C) Anotarle la clave en un papel adherido al monitor para que la use cualquier funcionario de la oficina.",
      "D) Dejar la sesión abierta pero pedirle que no abra archivos reservados."
    ],
    respuesta_correcta: "B",
    justificacion:
      "La competencia de Responsabilidad (Nivel C) y la seguridad digital prohíben compartir credenciales de acceso, ya que toda actuación registrada bajo un usuario es responsabilidad exclusiva e indelegable de su titular.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Protege la trazabilidad, la reserva y la integridad del sistema sin dejar de orientar constructivamente al compañero. 2) A, C y D son trampas clásicas de 'falso compañerismo' que violan la seguridad de la información."
  },
  {
    id: "sim-q35",
    modulo: "Comportamentales (20%)",
    peso_evaluado: "Comportamentales (20% · Clasificatorio)",
    competencia_asociada: "Gestión de Recursos (Nivel D) / Cumplimiento (Nivel D)",
    caso_situacional:
      "El jueves por la tarde, un familiar suyo le pide que imprima en la fotocopiadora láser de la Procuraduría Regional 350 páginas a color de una tesis universitaria y que las encuaderne con las pastas oficiales del almacén, argumentando que 'en la oficina hay suficiente papel y nadie lo va a notar'.",
    pregunta:
      "A la luz de las competencias de Gestión de Recursos y Cumplimiento (Nivel D) del empleo 5AM-09 y del Código General Disciplinario, ¿cuál es la conducta exigible?",
    opciones: [
      "A) Imprimir la tesis después de las 5:00 p. m. cuando ya no haya jefes en la sede.",
      "B) Rechazar la solicitud, dado que los bienes de consumo y equipos de la entidad están destinados exclusivamente al cumplimiento de las funciones oficiales y su uso en provecho particular propio o de un tercero vulnera la ley disciplinaria.",
      "C) Imprimir solo la mitad de las páginas en la entidad para ahorrar tóner.",
      "D) Autorizar el uso de las pastas oficiales si el familiar promete reponerlas el mes entrante."
    ],
    respuesta_correcta: "B",
    justificacion:
      "Las competencias de Gestión de Recursos y Cumplimiento (Nivel D), así como la Ley 1952 de 2019, exigen destinar los bienes, equipos e insumos públicos exclusivamente a los fines del servicio institucional, prohibiendo todo uso particular.",
    explicacion_paso_a_paso:
      "1) Por qué B es correcta: Los recursos públicos son sagrados y de uso estrictamente oficial, sin importar la hora ni la cantidad. 2) A, C y D representan formas de uso indebido de bienes del Estado sancionables disciplinariamente."
  }
];

/**
 * Catálogo Oficial de 12 Trofeos y Logros (Estilo PS5 · Bronce, Plata, Oro y Platino)
 */
const TROFEOS_DATA = [
  {
    id: "tr-primer-radicado",
    tier: "bronze",
    tierLabel: "Bronce",
    icon: "🥉",
    xp: 100,
    title: "Primer Radicado",
    desc: "Completar el primer tema de estudio en la Academia PGN."
  },
  {
    id: "tr-archivista-experto",
    tier: "bronze",
    tierLabel: "Bronce",
    icon: "🥉",
    xp: 200,
    title: "Archivista Experto",
    desc: "Completar al 100% el Módulo I (Gestión Documental y Archivo Institucional)."
  },
  {
    id: "tr-redactor-gtc185",
    tier: "bronze",
    tierLabel: "Bronce",
    icon: "🥉",
    xp: 200,
    title: "Redactor GTC 185",
    desc: "Completar al 100% el Módulo II (Elaboración de Documentos de Oficina y Trámite)."
  },
  {
    id: "tr-vocacion-servicio",
    tier: "bronze",
    tierLabel: "Bronce",
    icon: "🥉",
    xp: 200,
    title: "Vocación de Servicio",
    desc: "Completar al 100% el Módulo III (Atención al Usuario, PQRSDF y Servicio al Ciudadano)."
  },
  {
    id: "tr-custodio-almacen",
    tier: "silver",
    tierLabel: "Plata",
    icon: "🥈",
    xp: 300,
    title: "Custodio del Almacén",
    desc: "Completar al 100% el Módulo IV (Administración de Inventarios, Bienes y Almacén)."
  },
  {
    id: "tr-guardian-ministerio",
    tier: "silver",
    tierLabel: "Plata",
    icon: "🥈",
    xp: 400,
    title: "Guardián del Ministerio Público",
    desc: "Completar al 100% los Módulos V (Estructura PGN) y VI (MIPG y Ofimática)."
  },
  {
    id: "tr-conducta-ejemplar",
    tier: "silver",
    tierLabel: "Plata",
    icon: "🥈",
    xp: 350,
    title: "Conducta Ejemplar (20%)",
    desc: "Completar al 100% el Módulo VII (Competencias Comportamentales PGN)."
  },
  {
    id: "tr-memoria-fotografica",
    tier: "silver",
    tierLabel: "Plata",
    icon: "🥈",
    xp: 350,
    title: "Memoria Fotográfica",
    desc: "Dominar al menos 25 Flashcards 3D en el Laboratorio Activo."
  },
  {
    id: "tr-aduana-superada",
    tier: "gold",
    tierLabel: "Oro",
    icon: "🥇",
    xp: 500,
    title: "Aduana Superada (≥65%)",
    desc: "Superar el 65% eliminatorio en el Simulador de Juicio Situacional."
  },
  {
    id: "tr-cero-errores",
    tier: "gold",
    tierLabel: "Oro",
    icon: "🥇",
    xp: 500,
    title: "Cero Errores",
    desc: "Limpiar por completo la Bandeja de Errores del simulador (o aprobar un simulacro con 0 fallos)."
  },
  {
    id: "tr-lista-elegibles",
    tier: "gold",
    tierLabel: "Oro",
    icon: "🥇",
    xp: 600,
    title: "Puntaje de Lista de Elegibles (≥80%)",
    desc: "Obtener un puntaje igual o superior al 80% en un simulacro completo."
  },
  {
    id: "tr-platino-5am09",
    tier: "platinum",
    tierLabel: "Platino",
    icon: "🏆",
    xp: 1500,
    title: "Auxiliar Administrativo 5AM-09 Nombrado",
    desc: "Desbloquear todos los trofeos anteriores y alcanzar el 100% de los 21 temas del curso."
  }
];
