/**
 * Base de Conocimiento Curricular - Convocatoria Procuraduría General de la Nación (243 - 2026)
 * Estructura modular para Modo Curso: Gestión Documental, Atención al Usuario, Inventarios,
 * Estructura PGN / Régimen Disciplinario y Ofimática / Gobierno Digital.
 */

const COURSE_DATA = {
  convocatoria: "Convocatoria 243 - 2026",
  entidad: "Procuraduría General de la Nación",
  programa: "Plataforma Corporativa de Preparación Integral por Competencias",
  modules: [
    {
      id: "mod-gestion-documental",
      code: "MÓDULO I",
      title: "Gestión Documental y Archivo Institucional",
      subtitle: "Normatividad AGN, ciclo vital, TRD, radicación y expedientes",
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
                    "Productor en la dependencia / oficina respectiva"
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
                text: "Fondo Documental (Entidad: PGN) → Subfondo / Sección (Dependencia productora: ej. Procuraduría Provincial) → Subsección (Grupo interno de trabajo) → Serie Documental (Conjunto de unidades de estructura y contenido homogéneos: ej. Procesos Disciplinarios) → Subserie → Unidad Documental Compleja (Expediente) → Unidad Documental Simple (Pieza / Folio)."
              }
            }
          ],
          keyPoints: [
            "Los valores primarios interesan a la propia administración (administrativo, legal, fiscal, contable); los secundarios interesan a la historia, ciencia y cultura.",
            "Nunca se deben organizar expedientes por tipo de documento aislado ('carpeta de oficios enviados', 'carpeta de memorandos'); siempre se conforman por serie/asunto respetando el Orden Original.",
            "Los documentos públicos son inalienables, imprescriptibles e inembargables."
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
          title: "Tablas de Retención Documental (TRD) y Tablas de Valoración (TVD)",
          duration: "18 min",
          priority: "Esencial",
          normativa: ["Acuerdo AGN 004 de 2019", "Ley 594 de 2000 Art. 24", "Acuerdo AGN 001 de 2024"],
          summary:
            "Instrumentos archivísticos esenciales para determinar tiempos de permanencia en cada fase del archivo y la disposición final de las series y subseries documentales.",
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
                "E (Eliminación): Destrucción técnica autorizada de documentos que han perdido totalmente sus valores primarios y carecen de valores secundarios. Requiere Acta de Eliminación aprobada por el Comité Institucional de Gestión y Desempeño y publicación previa del inventario.",
                "S (Selección): Muestreo técnico (cualitativo o cuantitativo) mediante el cual se conserva una fracción representativa de una serie voluminosa y se elimina el resto.",
                "M / D (Microfilmación o Digitalización): Procedimiento de reprografía técnica con fines de preservación y consulta para complementar la Conservación Total o Selección."
              ]
            },
            {
              heading: "3. Cuadro de Clasificación Documental (CCD) e Inventario FUID",
              body: "La TRD se articula directamente con el Cuadro de Clasificación Documental (CCD), que codifica jerárquicamente las dependencias y series, y con el Formato Único de Inventario Documental (FUID), instrumento obligatorio para entregas de cargo, transferencias primarias/secundarias y eliminaciones.",
              callout: {
                type: "alerta",
                title: "Regla de Oro sobre Conteo de Términos de Retención",
                text: "Los tiempos de retención establecidos en la TRD (tanto en Archivo de Gestión como en Archivo Central) comienzan a contarse a partir del CIERRE definitivo del trámite o expediente, nunca desde la fecha de apertura o primer folio."
              }
            }
          ],
          keyPoints: [
            "Ningún servidor público puede eliminar documentos públicos por iniciativa propia; toda eliminación debe estar prevista en la TRD/TVD y contar con acta e inventario publicado.",
            "Las transferencias documentales primarias (del Archivo de Gestión al Central) deben realizarse estrictamente según el cronograma anual y usando el FUID.",
            "Antes de transferir un expediente, debe depurarse (retirar copias idénticas, borradores sin valor, ganchos metálicos oxidables) y foliarse adecuadamente."
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
            "Ningún bien adquirido por la entidad puede entregarse directamente del proveedor al usuario final sin surtir previamente el registro de Entrada y Salida de Almacén (salvo casos de legalización en sede territorial autorizada).",
            "El plaqueteo (asignación de placa única de identificación) es obligatorio para todo bien devolutivo antes de su puesta en servicio.",
            "Los bienes recibidos en comodato (préstamo de uso) no son propiedad de la entidad, pero se registran en cuentas de orden para control administrativo y de seguros."
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
