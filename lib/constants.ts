export const PROJECTS = [
  {
    id: 'p1',
    name: 'SpaERP',
    desc: 'SaaS web para spas y centros de bienestar: agenda de citas, clientes, inventario, control de gastos y proyecciones de ingresos. Backend en NestJS + Prisma, frontend en React + Vite + TailwindCSS, base de datos en PostgreSQL (Supabase), pagos con Stripe, desplegado en Railway.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe'],
    year: '2026',
    type: 'SaaS · En desarrollo',
    color: '#161c0e',
    image: '/projects/spaerp.png',
    url: 'https://spaerpweb-production.up.railway.app/',
  },
  {
    id: 'p2',
    name: 'SpaERP Mobile',
    desc: 'App móvil complementaria para clientes de SpaERP. Agendamiento de citas, historial, medidas corporales, gráficas de progreso y notificaciones push.',
    tags: ['React Native', 'Expo', 'TypeScript', 'NestJS'],
    year: '2026',
    type: 'Mobile · En desarrollo',
    color: '#161c0e',
  },
  {
    id: 'p3',
    name: 'California Burrito',
    desc: 'App móvil publicada en App Store y Google Play para cadena de restaurantes en EE.UU. Listado de sucursales con cálculo de distancia en tiempo real, integración con Google Maps, marcación directa y contenido dinámico.',
    tags: ['React Native', 'Redux Toolkit', 'TypeScript', 'Google Maps'],
    year: '2025',
    type: 'Producción · App Store & Google Play',
    color: '#2a1a0e',
  },
  {
    id: 'p4',
    name: 'POS & Restaurant Platform',
    desc: 'Frontend completo de punto de venta (POS) y plantilla para restaurantes: gestión de catálogo, modificadores, flujos de cobro, comandas y mapeo de mesas con optimización de rendimiento (FlashList).',
    tags: ['React Native', 'Redux Toolkit', 'TypeScript', 'FlashList'],
    year: '2025',
    type: 'Producción · B2B',
    color: '#1a1e28',
  },
  {
    id: 'p5',
    name: 'Multi-Tenant & Attendance AI',
    desc: 'Sistema multi-tenant para +20 sucursales con API REST, autenticación JWT, dashboard en React, backend en PHP para gestión de turnos y módulo de reconocimiento facial con TensorFlow Lite / FaceNet512.',
    tags: ['React', 'PHP', 'PostgreSQL', 'TensorFlow Lite', 'Python'],
    year: '2024',
    type: 'Producción · Enterprise',
    color: '#1f162a',
  },
  {
    id: 'p6',
    name: 'WildStream',
    desc: 'Plataforma de streaming científico y monitoreo de fauna con arquitectura fullstack en tiempo real, sistema de roles, telemetría en vivo y mapa de operaciones. Diseñado para ejecutarse localmente con Docker.',
    tags: ['React', 'Node.js', 'Socket.IO', 'PostgreSQL', 'Docker'],
    year: '2026',
    type: 'Portfolio · Fullstack',
    color: '#0d1f0f',
    image: '/projects/wildstream.png',
    url: 'https://github.com/BernardoCamarena/wildstream',
  },
] as const

export const SKILLS = [
  {
    title: 'Frontend & React',
    code: '/01',
    desc: 'Especialista en React y TypeScript con Redux Toolkit, TailwindCSS, Styled Components y diseño responsivo enfocado en rendimiento y arquitectura limpia.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'TailwindCSS'],
  },
  {
    title: 'Mobile · React Native',
    code: '/02',
    desc: 'Desarrollo de apps para iOS y Android (Expo & CLI), publicación en App Store y Google Play, optimización con FlashList y animaciones fluidas.',
    tags: ['React Native', 'Expo', 'CLI', 'iOS / Android'],
  },
  {
    title: 'Backend & APIs',
    code: '/03',
    desc: 'Arquitecturas backend escalables con NestJS y PHP, bases de datos PostgreSQL con Prisma ORM, autenticación JWT y APIs RESTful.',
    tags: ['NestJS', 'Node.js', 'PHP', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'DevOps & AI Tools',
    code: '/04',
    desc: 'Pipelines CI/CD en Azure DevOps y GitHub Actions, Docker, Gitflow y modelos de visión computacional / reconocimiento facial (TensorFlow Lite, Python).',
    tags: ['Azure DevOps', 'GitHub Actions', 'Docker', 'TensorFlow Lite'],
  },
] as const

export const SLOTS = [
  { x: 1,  y: 2,  w: 30, h: 44 },
  { x: 33, y: 2,  w: 32, h: 30 },
  { x: 67, y: 2,  w: 32, h: 38 },
  { x: 1,  y: 50, w: 28, h: 48 },
  { x: 31, y: 36, w: 34, h: 62 },
  { x: 67, y: 44, w: 32, h: 54 },
] as const

export const MARQUEE_ITEMS = [
  'React & React Native',
  'TypeScript',
  'NestJS APIs',
  'Redux Toolkit',
  'PostgreSQL & Prisma',
  'PHP Backends',
  'App Store & Google Play',
  'Azure DevOps & CI/CD',
] as const
