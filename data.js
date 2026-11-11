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
          title: "Comunicaciones Oficiales, Radicación y Ventanilla Única (Acuerdo 060 de 2001)",
          duration: "14 min",
          priority: "Alta",
          normativa: ["Acuerdo AGN 060 de 2001", "Ley 1437 de 2011 (CPACA)", "Ley 527 de 1999"],
          summary:
            "Lineamientos obligatorios para la recepción, radicación, numeración consecutiva, distribución y control de las comunicaciones oficiales enviadas y recibidas.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Reserva de Números y Correspondencia Privada",
            alerta:
              "Si el caso plantea que un jefe o procurador pide 'guardar o reservar 3 números de radicado del viernes para usarlos el lunes' o 'ponerle número BIS a un oficio', la respuesta SIEMPRE es que está PROHIBIDO por el Art. 5 del Acuerdo 060 de 2001. Además, los sobres privados/personales dirigidos a un servidor NO se abren ni se radican como comunicación oficial."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #1 y #9)",
            descripcion:
              "La Función #1 del cargo 5AM-09 consiste precisamente en recibir, radicar, clasificar y distribuir las comunicaciones oficiales en el sistema SIGDEA/SIM. Debes verificar que todo oficio de salida lleve la firma autorizada antes de asignarle consecutivo de radicación."
          },
          sections: [
            {
              heading: "1. Comunicaciones Oficiales vs. Correspondencia Personal",
              body: "El Acuerdo 060 de 2001 del Archivo General de la Nación establece una diferenciación estricta para el manejo documental en las unidades de correspondencia:",
              bullets: [
                "Comunicaciones Oficiales: Todas aquellas recibidas o producidas en desarrollo de las funciones asignadas legalmente a la entidad, independientemente del medio utilizado (físico, electrónico, sede electrónica). Son objeto de radicación y control.",
                "Correspondencia (Privada/Personal): Comunicaciones de carácter privado que llegan a la entidad a nombre de los funcionarios. NO se radican ni se abren por la Ventanilla Única; se entregan directamente a su destinatario."
              ]
            },
            {
              heading: "2. Reglas Técnicas de Radicación",
              body: "La radicación es el procedimiento por medio del cual las entidades asignan un número consecutivo a las comunicaciones recibidas o producidas, dejando constancia de la fecha y hora de recibo o de envío:",
              bullets: [
                "Consecutivo Anual: La numeración de los actos administrativos y comunicaciones oficiales debe iniciarse al comienzo de cada año fiscal (1 de enero) y ser estrictamente secuencial.",
                "Prohibición de Reserva de Números: Está expresamente prohibido reservar números de radicación o numeración, dejar espacios en blanco, repetir números o utilizar numeración con sufijos (bis, A, B).",
                "Corrección de Errores: Cuando se presenten errores en la radicación y sea necesario anular un número, debe dejarse constancia por escrito con la justificación y firma del jefe de la unidad de correspondencia."
              ]
            },
            {
              heading: "3. Documento Electrónico de Archivo y Expediente Híbrido",
              body: "Cuando en un mismo trámite concurren documentos nacidos en soporte físico y documentos nativos electrónicos, se conforma un expediente híbrido. Todos los documentos deben vincularse mediante una Hoja de Control o Índice Electrónico firmado que garantice su autenticidad, integridad, fiabilidad y disponibilidad.",
              callout: {
                type: "norma",
                title: "Firmas Autorizadas en Comunicaciones Oficiales",
                text: "Toda entidad debe establecer en sus manuales de procedimientos los cargos de los funcionarios autorizados para comprometer a la institución mediante la firma de comunicaciones oficiales enviadas. Ningún documento oficial puede despacharse sin firma autorizada."
              }
            }
          ],
          keyPoints: [
            "La radicación asigna fecha y hora ciertas de recepción, lo que activa el cómputo de los términos legales (ej. derechos de petición o recursos).",
            "No se pueden reservar números de radicado para comunicaciones futuras bajo ninguna circunstancia.",
            "En las comunicaciones internas (memorandos) se emplean controles consecutivos internos que identifican la dependencia productora y la destinataria."
          ],
          videos: [
            {
              titulo: "Acuerdo 060 de 2001 AGN · Pautas para Administración de Comunicaciones Oficiales",
              canal: "Archivo General de la Nación Colombia",
              duracion: "13:50",
              searchUrl: "https://www.youtube.com/results?search_query=Acuerdo+060+de+2001+AGN+comunicaciones+oficiales+radicacion"
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
        },
        {
          id: "gd-104",
          code: "1.4",
          title: "Programa de Gestión Documental (PGD) y los 8 Procesos Archivísticos",
          duration: "16 min",
          priority: "Alta",
          normativa: ["Decreto 1080 de 2015", "Acuerdo AGN 001 de 2024", "Modelo Integrado de Planeación y Gestión (MIPG)"],
          summary:
            "Estructura estratégica del Programa de Gestión Documental (PGD) y articulación de los ocho procesos técnicos que rigen el documento desde su planeación hasta su valoración.",
          trampaExamen: {
            titulo: "OJO CON LA TRAMPA DEL EXAMEN: Las 3 Fases dentro de 'Organización'",
            alerta:
              "Muchos aspirantes confunden el proceso general ('Organización Documental') con una de sus partes ('Ordenación'). Recuerda la ecuación exacta: ORGANIZACIÓN = 1º Clasificación (agrupar por serie/CCD) + 2º Ordenación (secuencia cronológica y foliación) + 3º Descripción (hacer el inventario FUID y metadatos)."
          },
          aplicacionCargo5AM09: {
            titulo: "APLICACIÓN PRÁCTICA EN EL CARGO 5AM-09 (Funciones #2, #3 y #9)",
            descripcion:
              "En tu puesto de Auxiliar Administrativo 5AM-09 aplicas a diario el proceso #3 (Gestión y Trámite al radicar y distribuir), el proceso #4 (Organización al clasificar en carpetas, ordenar cronológicamente y describir en el FUID) y el proceso #5 (Transferencia primaria hacia el Archivo Central)."
          },
          sections: [
            {
              heading: "1. Los 8 Procesos de la Gestión Documental (Decreto 1080 de 2015)",
              body: "La gestión documental en las entidades públicas se desarrolla a través de ocho (8) procesos interrelacionados que abarcan la totalidad del ciclo vital:",
              table: {
                headers: ["#", "Proceso Técnico", "Objetivo Principal en la Entidad"],
                rows: [
                  ["1", "Planeación", "Diseño de formas, formularios, metadatos y creación/actualización de series antes de producir documentos."],
                  ["2", "Producción", "Generación o recepción de documentos conforme a formatos institucionales, soportes y medios definidos."],
                  ["3", "Gestión y Trámite", "Registro, radicación, vinculación a un trámite, distribución, seguimiento y control de tiempos de respuesta."],
                  ["4", "Organización", "Conjunto de operaciones técnicas compuestas por: Clasificación, Ordenación y Descripción documental."],
                  ["5", "Transferencia", "Remisión de expedientes del Archivo de Gestión al Central (primaria) o del Central al Histórico (secundaria)."],
                  ["6", "Disposición de Documentos", "Selección, eliminación técnica o conservación total según lo dictaminado en las TRD o TVD."],
                  ["7", "Preservación a Largo Plazo", "Acciones y estándares para garantizar la durabilidad física y tecnológica (migración, emulación, control ambiental)."],
                  ["8", "Valoración", "Proceso permanente que determina los valores primarios y secundarios para fijar su permanencia y disposición."]
                ]
              }
            },
            {
              heading: "2. Subprocesos de la Organización Documental",
              body: "Dentro del cuarto proceso (Organización), es indispensable dominar el orden y significado de sus tres etapas técnicas:",
              bullets: [
                "1º Clasificación: Identificar y agrupar los documentos por fondo, sección, subsección, serie y subserie según el Cuadro de Clasificación Documental (CCD).",
                "2º Ordenación: Disponer físicamente los documentos dentro de cada carpeta o expediente siguiendo el orden cronológico del trámite (Principio de Orden Original) y realizar la foliación en la esquina superior derecha en el sentido del texto.",
                "3º Descripción: Elaborar instrumentos de consulta y control (inventarios FUID, índices electrónicos, rótulos de carpeta y caja) para facilitar la localización y recuperación de la información."
              ]
            }
          ],
          keyPoints: [
            "Organización Documental = Clasificación + Ordenación + Descripción (en ese orden lógico estricto).",
            "La foliación se realiza en la esquina superior derecha de la cara recta del folio, de manera consecutiva, sin omitir ni repetir números.",
            "El PGD debe estar alineado con la Dimensión de Gestión del Conocimiento y la Dimensión de Información y Comunicación del MIPG."
          ],
          videos: [
            {
              titulo: "Los 8 Procesos de la Gestión Documental (Decreto 1080 de 2015) y el PGD",
              canal: "Archivo General de la Nación Colombia",
              duracion: "15:15",
              searchUrl: "https://www.youtube.com/results?search_query=8+procesos+de+la+gestion+documental+decreto+1080+de+2015+AGN"
            }
          ],
          flashcards: [
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
            stem: "Dentro del proceso técnico de Organización Documental, cuando un servidor público elabora el Formato Único de Inventario Documental (FUID) y diligencia los metadatos e índices de búsqueda para localizar rápidamente los expedientes de una serie, está ejecutando específicamente la fase de:",
            options: [
              "Clasificación documental.",
              "Ordenación documental.",
              "Descripción documental.",
              "Valoración secundaria."
            ],
            correctIndex: 2,
            explanation: "La Descripción es la fase de la organización documental que consiste en analizar los documentos y registrar sus atributos en instrumentos de control y consulta (como el FUID, índices o catálogos) para permitir su localización y recuperación."
          }
        }
      ]
    },
    {
      id: "mod-atencion-usuario",
      code: "MÓDULO II",
      title: "Atención al Usuario, PQRSDF y Servicio al Ciudadano",
      subtitle: "Ley 1755 de 2015, términos legales, canales de atención y enfoque diferencial",
      icon: "users-check",
      topics: [
        {
          id: "au-201",
          code: "2.1",
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
          code: "2.2",
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
          code: "2.3",
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
      code: "MÓDULO III",
      title: "Administración de Inventarios, Bienes y Almacén Público",
      subtitle: "Bienes devolutivos vs. consumo, custodia, responsabilidad fiscal/disciplinaria y bajas",
      icon: "boxes",
      topics: [
        {
          id: "inv-301",
          code: "3.1",
          title: "Clasificación de Bienes Públicos: Devolutivos, Consumo y Movimientos de Almacén",
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
            "El Comprobante de Salida de Almacén firmado formaliza la entrega y asunción de responsabilidad sobre los bienes."
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
          code: "3.2",
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
          code: "3.3",
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
      code: "MÓDULO IV",
      title: "Estructura de la Procuraduría y Régimen Disciplinario",
      subtitle: "Decreto Ley 262 de 2000, funciones misionales y Código General Disciplinario",
      icon: "scale",
      topics: [
        {
          id: "pgn-401",
          code: "4.1",
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
          code: "4.2",
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
      code: "MÓDULO V",
      title: "Ofimática Institucional, Seguridad de la Información y Gobierno Digital",
      subtitle: "Política de Gobierno Digital (MIPG), Tríada CID, firmas electrónicas y herramientas ofimáticas",
      icon: "shield-laptop",
      topics: [
        {
          id: "ofi-501",
          code: "5.1",
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
          code: "5.2",
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
  }
];
