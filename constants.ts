import { Announcement, Assignment, ForumPost, Chat, Message, ScheduleItem, Payment, LibraryBook, PaperworkStatus, ServiceRequest, TeacherClass, Grade, ProfessionalCourse, TeacherDocument, TeacherPlanning } from './types';

// --- DATA FOR STUDENT: JUANITO PEREZ ---

export const STUDENT_NOTIFICATIONS = [
    { id: 1, text: "El docente de Teorías de la Personalidad publicó en el muro.", type: "wall", time: "Hace 10 min" },
    { id: 2, text: "El docente de Neuroanatomía ha publicado una nueva tarea.", type: "task", time: "Hace 30 min" }
];

export const STUDENT_ANNOUNCEMENTS: Announcement[] = [
  {
    id: '1',
    title: '¡Bienvenidos al Nuevo Semestre!',
    content: 'Estamos emocionados de tenerlos de vuelta. Este semestre estará lleno de oportunidades para crecer académica y personalmente. ¡A darle con todo!',
    author: 'Rectoría',
    date: '10 Ene, 2024',
    category: 'Welcome',
    likes: 120,
    comments: [
        { id: 'c1', author: 'Ana García', content: '¡Con toda la actitud!', date: 'Hace 2 horas' },
        { id: 'c2', author: 'Carlos López', content: 'Éxito a todos compañeros.', date: 'Hace 5 horas' }
    ]
  },
  {
    id: '2',
    title: 'Renovación de Biblioteca',
    content: 'Les informamos que la biblioteca física se encuentra en proceso de remodelación para ofrecerles mejores espacios de estudio. La biblioteca digital sigue operando con normalidad.',
    author: 'Administración',
    date: '11 Ene, 2024',
    category: 'General',
    likes: 45,
    comments: [
        { id: 'c3', author: 'Sofía Torres', content: '¿Saben cuándo termina la obra?', date: 'Ayer' },
        { id: 'c4', author: 'Admin', content: 'Estimada Sofía, esperamos terminar en 3 semanas.', date: 'Ayer' }
    ]
  },
  {
    id: '3',
    title: 'Revista "Ecos del Campus" Disponible',
    content: 'La edición de Enero ya está aquí. Lee artículos escritos por tus compañeros y docentes sobre las tendencias actuales en psicología y educación.',
    author: 'Editorial MEZE',
    date: '12 Ene, 2024',
    category: 'Academic',
    likes: 32,
    comments: [
        { id: 'c5', author: 'Roberto Gómez', content: '¡Excelente el artículo de la página 12!', date: 'Hace 1 día' }
    ]
  },
  {
    id: '4',
    title: '¡Síguenos en Redes Sociales!',
    content: 'No te pierdas de ningún evento. Síguenos en Instagram y Facebook @UniversidadMEZE para dinámicas y avisos rápidos.',
    author: 'Marketing',
    date: '13 Ene, 2024',
    category: 'General',
    likes: 89,
    comments: []
  },
  {
    id: '5',
    title: 'Mensaje de Rectoría: Impacto Social',
    content: 'Estimados alumnos, este semestre la Universidad MEZE se centrará en la divulgación académica. Queremos potenciar su capacidad para marcar una diferencia real en nuestra ciudad a través del conocimiento.',
    author: 'Rectoría',
    date: '14 Ene, 2024',
    category: 'Urgent',
    likes: 150,
    comments: [
        { id: 'c6', author: 'Mtro. Perenganito', content: 'Totalmente de acuerdo, la responsabilidad social es clave.', date: 'Hace 30 min' },
        { id: 'c7', author: 'Juanito Perez', content: '¡Listo para participar!', date: 'Hace 10 min' }
    ]
  },
];

export const STUDENT_SCHEDULE: ScheduleItem[] = [
    // Lunes
    { id: 'l1', day: 'Lunes', startTime: '07:00', endTime: '07:45', subject: 'Teorías de la Personalidad', room: 'C2', professor: 'Lic. Martínez' },
    { id: 'l2', day: 'Lunes', startTime: '07:45', endTime: '08:30', subject: 'Neuroanatomía', room: 'C2', professor: 'Dr. House' },
    { id: 'l3', day: 'Lunes', startTime: '08:30', endTime: '09:15', subject: 'Psicología Social', room: 'C2', professor: 'Mtra. Solís' },
    
    // Martes
    { id: 'm1', day: 'Martes', startTime: '07:00', endTime: '07:45', subject: 'Estadística I', room: 'C2', professor: 'Ing. Datos' },
    { id: 'm2', day: 'Martes', startTime: '07:45', endTime: '08:30', subject: 'Entrevista Psicológica', room: 'C2', professor: 'Lic. Freud' },
    { id: 'm3', day: 'Martes', startTime: '08:30', endTime: '09:15', subject: 'Desarrollo Infantil', room: 'C2', professor: 'Mtra. Piaget' },

    // Miércoles
    { id: 'mi1', day: 'Miércoles', startTime: '07:00', endTime: '07:45', subject: 'Teorías de la Personalidad', room: 'C2', professor: 'Lic. Martínez' },
    { id: 'mi2', day: 'Miércoles', startTime: '07:45', endTime: '08:30', subject: 'Neuroanatomía', room: 'Lab 3', professor: 'Dr. House' },
    { id: 'mi3', day: 'Miércoles', startTime: '08:30', endTime: '09:15', subject: 'Taller de Lectura', room: 'Biblio', professor: 'Lic. Letras' },

    // Jueves
    { id: 'j1', day: 'Jueves', startTime: '07:00', endTime: '07:45', subject: 'Estadística I', room: 'C2', professor: 'Ing. Datos' },
    { id: 'j2', day: 'Jueves', startTime: '07:45', endTime: '08:30', subject: 'Psicología Social', room: 'C2', professor: 'Mtra. Solís' },
    { id: 'j3', day: 'Jueves', startTime: '08:30', endTime: '09:15', subject: 'Inglés II', room: 'C10', professor: 'Teacher Smith' },

    // Viernes
    { id: 'v1', day: 'Viernes', startTime: '08:00', endTime: '09:00', subject: 'Entrevista Psicológica', room: 'Cámara Gesell', professor: 'Lic. Freud' },
    { id: 'v2', day: 'Viernes', startTime: '09:00', endTime: '10:00', subject: 'Desarrollo Infantil', room: 'C2', professor: 'Mtra. Piaget' },
];

export const STUDENT_ASSIGNMENTS: Assignment[] = [
  {
    id: '1',
    title: 'Ensayo: El Ello, el Yo y el Superyó',
    description: 'Realizar un ensayo de 3 cuartillas analizando la estructura psíquica según Freud. Formato APA.',
    dueDate: '20 Feb, 2024', // Por vencer
    status: 'Pending',
    course: 'Teorías de la Personalidad',
  },
  {
    id: '2',
    title: 'Mapa Cerebral del Sistema Límbico',
    description: 'Dibujar y señalar las partes del sistema límbico.',
    dueDate: '10 Ene, 2024', // Vencida
    status: 'Late', // Cuenta como no entregada/0
    course: 'Neuroanatomía',
    grade: '0/100',
    feedback: 'No se entregó en tiempo y forma.'
  },
  {
    id: '3',
    title: 'Reporte de Observación Social',
    description: 'Observar comportamiento en un parque por 1 hora.',
    dueDate: '05 Ene, 2024',
    status: 'Graded',
    course: 'Psicología Social',
    grade: '95/100',
    feedback: 'Excelente trabajo Juanito, gran capacidad de análisis observacional. ¡Felicidades!'
  },
  {
    id: '4',
    title: 'Ejercicios de Media y Moda',
    description: 'Resolver el problemario pág 45.',
    dueDate: '25 Feb, 2024',
    status: 'Pending',
    course: 'Estadística I',
  },
  {
    id: '5',
    title: 'Guión de Entrevista',
    description: 'Elaborar un guión para entrevista clínica inicial.',
    dueDate: '28 Feb, 2024',
    status: 'Pending',
    course: 'Entrevista Psicológica',
  }
];

export const CLASS_WALL_POSTS_MOCK: Record<string, Announcement[]> = {
    // --- Student Classes (Full Coverage) ---
    'Teorías de la Personalidad': [
        { id: 'wp1', title: '¡Bienvenidos a Teorías de la Personalidad!', content: 'Hola a todos, soy el Lic. Martínez. Exploraremos las profundidades de la psique humana.', author: 'Lic. Martínez', date: '08 Ene', category: 'Welcome', likes: 10, comments: [] },
        { id: 'wp2', title: 'Parámetros de Evaluación', content: 'Examen 40%, Tareas 30%, Ensayo Final 30%.', author: 'Lic. Martínez', date: '09 Ene', category: 'Academic', likes: 5, comments: [] },
        { id: 'wp3', title: 'Tarea Activa', content: 'Ya está disponible la primera tarea sobre Freud. Revisen la sección de tareas.', author: 'Lic. Martínez', date: '10 Ene', category: 'Urgent', likes: 2, comments: [] }
    ],
    'Neuroanatomía': [
         { id: 'wp4', title: 'Bienvenidos al curso', content: 'Dr. House al habla. Estudiaremos el cerebro.', author: 'Dr. House', date: '08 Ene', category: 'Welcome', likes: 10, comments: [] },
         { id: 'wp5', title: 'Evaluación', content: '100% Examen. Es broma, 50% examen y 50% laboratorio.', author: 'Dr. House', date: '09 Ene', category: 'Academic', likes: 5, comments: [] },
         { id: 'wp6', title: 'Nueva Tarea', content: 'Suban su mapa cerebral.', author: 'Dr. House', date: '10 Ene', category: 'Urgent', likes: 2, comments: [] }
    ],
    'Psicología Social': [
        { id: 'ps1', title: 'Inicio de Semestre: Psicología Social', content: 'Analizaremos cómo el entorno influye en el individuo. ¡Bienvenidos!', author: 'Mtra. Solís', date: '08 Ene', category: 'Welcome', likes: 14, comments: [] },
        { id: 'ps2', title: 'Lectura Obligatoria #1', content: 'Por favor lean el capítulo 1 de "El Animal Social" de Aronson para la próxima clase.', author: 'Mtra. Solís', date: '10 Ene', category: 'Academic', likes: 8, comments: [] },
        { id: 'ps3', title: 'Formación de Equipos', content: 'Necesito que formen equipos de 5 personas para el proyecto de campo. Envíen lista al jefe de grupo.', author: 'Mtra. Solís', date: '15 Ene', category: 'Urgent', likes: 5, comments: [] }
    ],
    'Estadística I': [
        { id: 'est1', title: 'Bienvenida a Estadística I', content: 'No se asusten con los números. Usaremos SPSS y Excel. Será práctico.', author: 'Ing. Datos', date: '08 Ene', category: 'Welcome', likes: 6, comments: [] },
        { id: 'est2', title: 'Instalación de Software', content: 'Les comparto el link para descargar la versión estudiantil de SPSS. Deben traerla instalada el lunes.', author: 'Ing. Datos', date: '09 Ene', category: 'Urgent', likes: 4, comments: [] },
        { id: 'est3', title: 'Problemario 1', content: 'Subí el primer set de ejercicios sobre Medidas de Tendencia Central.', author: 'Ing. Datos', date: '12 Ene', category: 'Academic', likes: 2, comments: [] }
    ],
    'Entrevista Psicológica': [
        { id: 'ep1', title: 'El Arte de Preguntar', content: 'Bienvenidos al curso pilar de la clínica. Aprenderemos a escuchar más que a hablar.', author: 'Lic. Freud', date: '08 Ene', category: 'Welcome', likes: 18, comments: [] },
        { id: 'ep2', title: 'Código de Vestimenta para Cámara Gesell', content: 'Recuerden venir formales los días de práctica en cámara Gesell. Es requisito indispensable.', author: 'Lic. Freud', date: '11 Ene', category: 'Urgent', likes: 12, comments: [] },
        { id: 'ep3', title: 'Análisis de Video', content: 'Vean el video de la entrevista de Rogers adjunto y anoten 3 técnicas de rapport que identifiquen.', author: 'Lic. Freud', date: '14 Ene', category: 'Academic', likes: 9, comments: [] }
    ],
    'Desarrollo Infantil': [
        { id: 'di1', title: 'De la cuna a la escuela', content: 'Hola a todos. Revisaremos las etapas cruciales del desarrollo humano.', author: 'Mtra. Piaget', date: '08 Ene', category: 'Welcome', likes: 11, comments: [] },
        { id: 'di2', title: 'Guía de Observación', content: 'Descarguen la guía adjunta para la visita a la guardería de la próxima semana.', author: 'Mtra. Piaget', date: '13 Ene', category: 'Urgent', likes: 7, comments: [] },
        { id: 'di3', title: 'Quiz Rápido: Etapas Sensorio-motrices', content: 'Mañana tendremos un quiz de 5 preguntas al inicio de la clase. Estudien sus apuntes.', author: 'Mtra. Piaget', date: '16 Ene', category: 'Academic', likes: 3, comments: [] }
    ],
    'Taller de Lectura': [
        { id: 'tl1', title: 'Leer para comprender', content: 'Bienvenidos. Este taller les dará herramientas para toda su carrera.', author: 'Lic. Letras', date: '08 Ene', category: 'Welcome', likes: 5, comments: [] },
        { id: 'tl2', title: 'Traer libro favorito', content: 'Para la dinámica de mañana, traigan su libro favorito (físico o digital).', author: 'Lic. Letras', date: '09 Ene', category: 'Academic', likes: 8, comments: [] },
        { id: 'tl3', title: 'Visita a Biblioteca', content: 'La próxima clase nos vemos directamente en la biblioteca para el tour de bases de datos.', author: 'Lic. Letras', date: '12 Ene', category: 'Urgent', likes: 4, comments: [] }
    ],
    'Inglés II': [
        { id: 'ing1', title: 'Welcome back!', content: 'Hello everyone. We will focus on past tenses and vocabulary expansion this semester.', author: 'Teacher Smith', date: '08 Ene', category: 'Welcome', likes: 9, comments: [] },
        { id: 'ing2', title: 'Listening Practice', content: 'Please listen to the podcast episode linked below before Thursday.', author: 'Teacher Smith', date: '10 Ene', category: 'Academic', likes: 6, comments: [] },
        { id: 'ing3', title: 'Speaking Test Dates', content: 'Check the schedule attached. You need to book your slot for the oral exam.', author: 'Teacher Smith', date: '15 Ene', category: 'Urgent', likes: 2, comments: [] }
    ],

    // --- Teacher Views (Specific Subjects) ---
    'Psicología General': [
        { id: 'tp1', title: '¡Bienvenidos a Psicología General!', content: 'Es un placer ser su guía en esta introducción a la mente humana. Aquí encontrarán el temario.', author: 'Mtro. Perenganito', date: '08 Ene', category: 'Welcome', likes: 22, comments: [] },
        { id: 'tp2', title: 'Criterios de Evaluación 1er Parcial', content: 'Asistencia 10%, Participación 20%, Examen 70%. Recuerden que la puntualidad es clave.', author: 'Mtro. Perenganito', date: '09 Ene', category: 'Academic', likes: 18, comments: [] },
        { id: 'tp3', title: 'Lectura para mañana: Historia de la Psicología', content: 'Por favor lean el capítulo 1 del libro habilitado. Habrá quiz rápido al inicio de la clase.', author: 'Mtro. Perenganito', date: '12 Ene', category: 'Urgent', likes: 5, comments: [] }
    ],
    'Psicopatología I': [
         { id: 'tp4', title: 'Inicio de Curso: Psicopatología', content: 'Analizaremos los trastornos mentales desde una perspectiva clínica y humana. Bienvenidos.', author: 'Mtro. Perenganito', date: '08 Ene', category: 'Welcome', likes: 12, comments: [] },
         { id: 'tp5', title: 'Reglas del Aula Clínica', content: 'Respeto absoluto a los casos estudiados. La confidencialidad es nuestra ética principal.', author: 'Mtro. Perenganito', date: '09 Ene', category: 'Academic', likes: 8, comments: [] },
         { id: 'tp6', title: 'Tarea: Cuadro Comparativo DSM-5 vs CIE-11', content: 'Ya está habilitado el buzón para subir su cuadro comparativo. Tienen hasta el viernes.', author: 'Mtro. Perenganito', date: '15 Ene', category: 'Urgent', likes: 3, comments: [] }
    ],
    'Pruebas Psicométricas': [
        { id: 'tp7', title: 'Material Requerido: Manuales', content: 'Necesitarán traer su manual de WISC-IV para la próxima práctica de laboratorio.', author: 'Mtro. Perenganito', date: '10 Ene', category: 'Urgent', likes: 20, comments: [] },
        { id: 'tp8', title: 'Bienvenida a Psicométría', content: 'Aprenderemos a medir lo "inmedible". Bienvenidos al arte de la evaluación psicológica.', author: 'Mtro. Perenganito', date: '08 Ene', category: 'Welcome', likes: 15, comments: [] },
        { id: 'tp9', title: 'Integración de Equipos', content: 'Favor de formar equipos de 4 personas para la aplicación de pruebas piloto.', author: 'Mtro. Perenganito', date: '11 Ene', category: 'Academic', likes: 10, comments: [] }
    ],
    'Ética Profesional': [
        { id: 'tp10', title: 'Reflexión Inicial', content: '¿Qué significa ser un psicólogo ético en el siglo XXI? Comenten abajo.', author: 'Mtro. Perenganito', date: '08 Ene', category: 'Welcome', likes: 25, comments: [] },
        { id: 'tp11', title: 'Código Ético del Psicólogo', content: 'Descarguen el PDF adjunto. Será nuestra biblia durante todo el semestre.', author: 'Mtro. Perenganito', date: '09 Ene', category: 'Academic', likes: 19, comments: [] },
        { id: 'tp12', title: 'Dilema Ético #1', content: 'Tarea activa: Resolver el caso de "La Confidencia Rota". Entrega el lunes.', author: 'Mtro. Perenganito', date: '14 Ene', category: 'Urgent', likes: 4, comments: [] }
    ]
};

export const PROFESSIONAL_COURSES: ProfessionalCourse[] = [
    { id: 'pc1', title: 'Uso de Paquetería Office', description: 'Domina Word, Excel y PowerPoint. Aprende desde fórmulas básicas hasta tablas dinámicas y presentaciones de alto impacto. Este curso te dará las herramientas esenciales para cualquier entorno administrativo.', duration: '8 horas', imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300' },
    { id: 'pc2', title: 'Solución de Problemas', description: 'Desarrolla el pensamiento crítico y lateral. Aprende metodologías como Design Thinking para abordar conflictos y encontrar soluciones innovadoras en entornos de alta presión.', duration: '4 horas', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300' },
    { id: 'pc3', title: 'Habilidades Gerenciales', description: 'Prepárate para liderar. Este curso cubre liderazgo, gestión de tiempo, delegación efectiva y comunicación asertiva para futuros coordinadores y gerentes.', duration: '6 horas', imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=300' },
    { id: 'pc4', title: 'Uso de IA para el Trabajo', description: 'Aprende a utilizar herramientas como Gemini y ChatGPT para optimizar tu flujo de trabajo, redactar correos, generar ideas y automatizar tareas repetitivas de manera ética.', duration: '3 horas', imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=300' },
    { id: 'pc5', title: 'Cómo hacer un buen CV', description: 'Tu carta de presentación al mundo laboral. Aprende a estructurar tu CV, qué información resaltar, cómo redactar logros y el diseño visual que buscan los reclutadores hoy en día.', duration: '2 horas', imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300' },
];

export const PAPERWORK_STATUS: PaperworkStatus[] = [
    { id: 'd1', name: 'CURP', status: 'Entregado' },
    { id: 'd2', name: 'Contrato de la escuela', status: 'Entregado' },
    { id: 'd3', name: 'Acta de Nacimiento', status: 'Entregado' },
    { id: 'd4', name: 'Comprobante de Domicilio', status: 'Entregado' },
    { id: 'd5', name: 'Constancia Estudios Anteriores', status: 'Entregado' },
    { id: 'd6', name: 'Título de Bachillerato', status: 'Pendiente', description: 'El documento debe de ser escaneado y a color, no fotografías o escáner de celular.' },
];

// --- DATA FOR TEACHER: MTRO. PERENGANITO ---

export const TEACHER_DOCUMENTS: TeacherDocument[] = [
    { id: 'td1', name: 'Contrato Laboral Vigente', type: 'Legal', status: 'OK' },
    { id: 'td2', name: 'Reglamento Docente', type: 'Legal', status: 'OK' },
    { id: 'td3', name: 'Reglamento Universitario', type: 'Legal', status: 'OK' },
    { id: 'td4', name: 'Mis Prestaciones y Beneficios', type: 'Legal', status: 'OK' },
];

export const TEACHER_PAYROLL: TeacherDocument[] = [
    { id: 'tp1', name: 'Recibo Enero - Quincena 1', type: 'Payroll', date: '15 Ene 2024', status: 'Paid' },
];

export const TEACHER_PAPERWORK_STATUS: PaperworkStatus[] = [
    { id: 'tps1', name: 'CV Actualizado', status: 'Completo' },
    { id: 'tps2', name: 'Título Profesional', status: 'Completo' },
    { id: 'tps3', name: 'Cédula Profesional', status: 'Completo' },
    { id: 'tps4', name: 'Comprobante de Domicilio', status: 'Completo' },
    { id: 'tps5', name: 'CURP', status: 'Completo' },
    { id: 'tps6', name: 'Constancia Situación Fiscal', status: 'Completo' },
    { id: 'tps7', name: 'Número de Seguridad Social', status: 'Completo' },
];

// Consistent Teacher Classes
export const TEACHER_CLASSES: TeacherClass[] = [
    { id: 'tc1', name: 'Psicología General', semester: '2do Semestre', room: 'E1', schedule: 'Lun/Mie 7:00 - 8:30', studentsCount: 25, averageGrade: 8.5, pendingTasks: 5 },
    { id: 'tc2', name: 'Psicopatología I', semester: '4to Semestre', room: 'E4', schedule: 'Mar/Jue 9:00 - 10:30', studentsCount: 18, averageGrade: 9.0, pendingTasks: 2 },
    { id: 'tc3', name: 'Pruebas Psicométricas', semester: '6to Semestre', room: 'E8', schedule: 'Lun/Mie 11:00 - 12:30', studentsCount: 22, averageGrade: 8.2, pendingTasks: 12 },
    { id: 'tc4', name: 'Ética Profesional', semester: '8vo Semestre', room: 'E10', schedule: 'Vie 8:00 - 11:00', studentsCount: 30, averageGrade: 9.5, pendingTasks: 0 },
];

export const TEACHER_PLANNINGS: TeacherPlanning[] = [
    { id: 'p1', classId: 'tc1', partial: 1, status: 'Uploaded', dueDate: '15 Ene 2024', fileUrl: '#' },
    { id: 'p2', classId: 'tc1', partial: 2, status: 'Pending', dueDate: '01 Mar 2024' },
    { id: 'p3', classId: 'tc1', partial: 3, status: 'Pending', dueDate: '01 Abr 2024' },
    // Replicate for others
    { id: 'p4', classId: 'tc2', partial: 1, status: 'Uploaded', dueDate: '15 Ene 2024' },
    { id: 'p5', classId: 'tc2', partial: 2, status: 'Pending', dueDate: '01 Mar 2024' },
    { id: 'p6', classId: 'tc2', partial: 3, status: 'Pending', dueDate: '01 Abr 2024' },
];

// Consistent Teacher Schedule with Classes
export const TEACHER_SCHEDULE: ScheduleItem[] = [
    { id: 'ts1', day: 'Lunes', startTime: '07:00', endTime: '08:30', subject: 'Psicología General (2do)', room: 'E1' },
    { id: 'ts2', day: 'Lunes', startTime: '11:00', endTime: '12:30', subject: 'Pruebas Psicométricas (6to)', room: 'E8' },
    { id: 'ts3', day: 'Martes', startTime: '09:00', endTime: '10:30', subject: 'Psicopatología I (4to)', room: 'E4' },
    { id: 'ts4', day: 'Miércoles', startTime: '07:00', endTime: '08:30', subject: 'Psicología General (2do)', room: 'E1' },
    { id: 'ts5', day: 'Miércoles', startTime: '11:00', endTime: '12:30', subject: 'Pruebas Psicométricas (6to)', room: 'E8' },
    { id: 'ts6', day: 'Jueves', startTime: '09:00', endTime: '10:30', subject: 'Psicopatología I (4to)', room: 'E4' },
    { id: 'ts7', day: 'Viernes', startTime: '08:00', endTime: '11:00', subject: 'Ética Profesional (8vo)', room: 'E10' },
    { id: 'ts8', day: 'Sábado', startTime: '09:00', endTime: '12:00', subject: 'Seminario de Tesis (8vo)', room: 'E12' },
];

// --- SHARED ---

export const SERVICE_REQUESTS: ServiceRequest[] = [
    { id: 's1', name: 'Constancia de Estudios', price: 150, description: 'Documento oficial que avala el grado actual.' },
    { id: 's2', name: 'Kardex Estudiantil', price: 200, description: 'Historial académico completo con calificaciones.' },
    { id: 's3', name: 'Credencial Estudiantil', price: 100, description: 'Reposición de credencial plástica.' },
    { id: 's4', name: 'Seguro Estudiantil', price: 500, description: 'Renovación de póliza de seguro contra accidentes.' },
    { id: 's5', name: 'Cambio de Turno', price: 0, description: 'Solicitud para cambio de matutino a vespertino (Sujeto a cupo).' },
    { id: 's6', name: 'Medio Título', price: 1500, description: 'Trámite de expedición de medio título profesional.' },
];

export const LIBRARY_BOOKS: LibraryBook[] = [
    { id: 'b1', title: 'Interpretación de los Sueños', author: 'Sigmund Freud', category: 'Psicoanálisis', coverUrl: 'https://m.media-amazon.com/images/I/51j5p-C4tCL._SL500_.jpg' },
    { id: 'b2', title: 'El Hombre en Busca de Sentido', author: 'Viktor Frankl', category: 'Existencialismo', coverUrl: 'https://m.media-amazon.com/images/I/71cJ2Cq4dBL._AC_UF1000,1000_QL80_.jpg' },
    { id: 'b3', title: 'Inteligencia Emocional', author: 'Daniel Goleman', category: 'Divulgación', coverUrl: 'https://images.booksense.com/images/648/182/9788472451826.jpg' },
];

export const STUDENT_GRADES: Grade[] = [
    { id: 'g1', subject: 'Teorías de la Personalidad', partial1: 9.5 },
    { id: 'g2', subject: 'Neuroanatomía', partial1: 8.8 },
    { id: 'g3', subject: 'Psicología Social', partial1: 9.2 },
    { id: 'g4', subject: 'Estadística I', partial1: 8.0 },
    { id: 'g5', subject: 'Entrevista Psicológica', partial1: 10.0 },
    { id: 'g6', subject: 'Desarrollo Infantil', partial1: 9.0 },
];

export const STUDENT_PAYMENTS: Payment[] = [
    { id: 'p1', concept: 'Inscripción Enero-Mayo', amount: 4800, date: '05 Ene 2024', status: 'Pagado', reference: 'REF-001' },
    { id: 'p2', concept: 'Mensualidad Enero', amount: 3500, date: '05 Ene 2024', status: 'Pagado', reference: 'REF-002' },
    { id: 'p3', concept: 'Mensualidad Febrero', amount: 3500, date: '10 Feb 2024', status: 'Pendiente', reference: 'REF-003' },
];

export const STUDENT_CHATS: Chat[] = [
    { id: 'c1', name: 'María García (Compañera)', participants: ['Yo', 'María'], lastMessage: '¿Viste lo que dijo el profe de Neuro?', role: 'Student' },
    { id: 'c2', name: 'Carlos López (Compañero)', participants: ['Yo', 'Carlos'], lastMessage: 'Te mando el archivo en un rato.', role: 'Student' },
    { id: 'c3', name: 'Equipo Proyecto Final', participants: ['Yo', 'María', 'Carlos', 'Ana'], lastMessage: 'Nos reunimos hoy en la biblio.', role: 'Student', isGroup: true },
    { id: 'c5', name: 'Coord. Psicología', participants: ['Yo', 'Coord'], lastMessage: 'Entendido Juanito, se justifica tu falta.', role: 'Admin' },
];

export const TEACHER_CHATS: Chat[] = [
     { id: 'tc1', name: 'Roberto Gómez (Duda Tarea)', participants: ['Yo', 'Roberto'], lastMessage: 'Maestro, no podré asistir hoy.', role: 'Student' },
     { id: 'tc2', name: 'Ana Hernández (Justificante)', participants: ['Yo', 'Ana'], lastMessage: 'Le adjunto mi receta médica.', role: 'Student' },
     { id: 'tc3', name: 'Luis Martínez (Revisión)', participants: ['Yo', 'Luis'], lastMessage: '¿Podría revisar mi calificación?', role: 'Student' },
     { id: 'tc4', name: 'Sofía Torres (Tesis)', participants: ['Yo', 'Sofía'], lastMessage: 'Ya tengo el capitulo 1 listo.', role: 'Student' },
];

export const STUDENT_MESSAGES_DB: Record<string, Message[]> = {
    'c1': [
        { id: 'm1', sender: 'María', content: 'Hola Juanito, ¿qué tal?', timestamp: '09:00', isMe: false },
        { id: 'm2', sender: 'Yo', content: 'Bien María, gracias. ¿Y tú?', timestamp: '09:05', isMe: true },
        { id: 'm3', sender: 'María', content: 'Un poco estresada. ¿Viste lo que dijo el profe de Neuro?', timestamp: '10:00', isMe: false }
    ],
    'c2': [
        { id: 'm4', sender: 'Yo', content: 'Oye Carlos, ¿tienes los apuntes de ayer?', timestamp: '11:00', isMe: true },
        { id: 'm5', sender: 'Carlos', content: 'Sí, claro. Te mando el archivo en un rato.', timestamp: '11:15', isMe: false }
    ],
    'c3': [
        { id: 'm6', sender: 'Ana', content: 'Chicos, hay que avanzar con el proyecto.', timestamp: '09:00', isMe: false },
        { id: 'm7', sender: 'Yo', content: 'De acuerdo. ¿Cuándo nos vemos?', timestamp: '09:10', isMe: true },
        { id: 'm8', sender: 'Carlos', content: 'Nos reunimos hoy en la biblio.', timestamp: '09:15', isMe: false }
    ],
};
export const TEACHER_MESSAGES_DB: Record<string, Message[]> = {
    'tc1': [
        { id: 'tm1', sender: 'Roberto', content: 'Buenos días maestro.', timestamp: '07:55', isMe: false },
        { id: 'tm2', sender: 'Roberto', content: 'Maestro, no podré asistir hoy, tuve un problema familiar.', timestamp: '08:00', isMe: false },
        { id: 'tm3', sender: 'Yo', content: 'Entiendo Roberto. Recuerda enviar tu justificante a coordinación.', timestamp: '08:10', isMe: true },
        { id: 'tm4', sender: 'Roberto', content: 'Sí maestro, gracias.', timestamp: '08:15', isMe: false }
    ],
    'tc2': [
        { id: 'tm5', sender: 'Ana', content: 'Profe, ya envié mi justificante.', timestamp: '11:00', isMe: false },
        { id: 'tm6', sender: 'Ana', content: 'Le adjunto mi receta médica.', timestamp: '11:20', isMe: false }
    ],
    'tc3': [
        { id: 'tm7', sender: 'Luis', content: 'Buenas tardes.', timestamp: '12:50', isMe: false },
        { id: 'tm8', sender: 'Luis', content: '¿Podría revisar mi calificación del examen? Creo que hay un error en la pregunta 5.', timestamp: '13:00', isMe: false },
        { id: 'tm9', sender: 'Yo', content: 'Hola Luis. Lo reviso y te comento en la siguiente clase.', timestamp: '13:10', isMe: true }
    ],
    'tc4': [
        { id: 'tm10', sender: 'Sofía', content: 'Maestro, tengo avances de mi tesis.', timestamp: '10:40', isMe: false },
        { id: 'tm11', sender: 'Sofía', content: 'Ya tengo el capitulo 1 listo.', timestamp: '10:45', isMe: false },
        { id: 'tm12', sender: 'Yo', content: 'Excelente Sofía. Envíamelo por correo para retroalimentación.', timestamp: '10:50', isMe: true }
    ],
};

export const STUDENT_FORUMS: ForumPost[] = [
    { id: 'f1', title: 'Objetos Perdidos: Termo azul', author: 'Ana G.', content: 'Dejé un termo azul en la cafetería, ¿alguien lo vio?', replies: 2, date: 'Hoy', category: 'Objetos Perdidos', tags: ['Ayuda'] },
    { id: 'f2', title: 'Congreso Anual de Psicología', author: 'Coord. Académica', content: 'Ya están abiertas las inscripciones para el congreso.', replies: 15, date: 'Ayer', category: 'General', tags: ['Evento'] },
    { id: 'f3', title: 'Apoyo con Tareas: Estadística', author: 'Carlos L.', content: '¿Alguien entiende la fórmula de Chi-Cuadrada?', replies: 5, date: 'Hace 2 días', category: 'General', tags: ['Ayuda', 'Estudio'] },
    { id: 'f4', title: 'Club de Lectura: El Psicoanalista', author: 'Biblio Team', content: 'Nos reunimos el viernes a las 4 PM.', replies: 8, date: 'Hace 3 días', category: 'Comunidad Psicología', tags: ['Club'] },
    // Class specific
    { id: 'fc1', title: 'Dudas sobre el Ensayo', author: 'Juanito P.', content: '¿El ensayo incluye bibliografía?', replies: 1, date: 'Ayer', category: 'Subject', courseId: 'Teorías de la Personalidad', tags: ['Duda'] },
    { id: 'fc2', title: 'Grupo de estudio Neuro', author: 'Maria G.', content: 'Estudiaremos para el parcial en la biblioteca.', replies: 3, date: 'Hoy', category: 'Subject', courseId: 'Neuroanatomía', tags: ['Estudio'] },
];

export const TEACHER_FORUMS: ForumPost[] = [
    { id: 'tf1', title: 'Foro de Dudas: Psicología General', author: 'Mtro. Perenganito', content: 'Espacio para resolver dudas previo al examen.', replies: 0, date: 'Hoy', category: 'Subject', courseId: 'Psicología General', tags: ['Dudas'] },
    { id: 'tf2', title: 'Debate: Ética en la práctica', author: 'Mtro. Perenganito', content: '¿Qué harían en el caso expuesto en clase?', replies: 5, date: 'Ayer', category: 'Subject', courseId: 'Ética Profesional', tags: ['Debate'] },
];