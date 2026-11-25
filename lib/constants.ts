export const PROJECTS = [
  {
    id: 'p1',
    name: 'Bellabalanza',
    desc: 'SaaS para negocios de belleza y bienestar en México: agenda por terapeuta, expediente clínico con consentimientos, ventas, inventario con recetas por servicio, equipo y permisos, y finanzas con punto de equilibrio. NestJS + Prisma, React + Vite + TailwindCSS, PostgreSQL, suscripciones con Stripe.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe'],
    year: '2026',
    type: 'SaaS · En desarrollo',
    color: '#161c0e',
    image: '/projects/bellabalanza.webp',
    url: 'https://bellabalanza.com/',
  },
  {
    id: 'p2',
    name: 'Bellabalanza Mobile',
    desc: 'App móvil complementaria para clientas de Bellabalanza. Agendamiento de citas, historial, medidas corporales, gráficas de progreso y notificaciones push.',
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

// Builds hosted as GitHub Release assets (too large for Vercel static files)
const RELEASE = 'https://github.com/BernardoCamarena/portafolio/releases/download/games-v1'

export const GAMES = [
  {
    id: 'royale-defense',
    name: 'Royale Defense',
    year: '2023',
    engine: 'Unity 2021.3',
    platforms: 'Windows · Web',
    team: 3,
    cover: '/games/royale-defense/cover.webp',
    shots: [
      { src: '/games/royale-defense/cover.webp' },
      { src: '/games/royale-defense/cards.webp' },
      { src: '/games/royale-defense/level-01.webp' },
      { src: '/games/royale-defense/tutorial.webp' },
      { src: '/games/royale-defense/wave-clear.webp' },
      { src: '/games/royale-defense/menu.webp' },
    ],
    download: { url: `${RELEASE}/RoyaleDefense-v0.4-Windows.zip`, size: '40 MB', version: 'v0.4' },
    play: '/play/royale-defense/index.html',
    tags: ['Unity', 'C#', 'Tower Defense', 'Cartas'],
  },
  {
    id: 'fears-forest',
    name: "Fear's Forest",
    year: '2023',
    engine: 'Unreal Engine 5.3',
    platforms: 'Windows',
    team: null,
    cover: '/games/fears-forest/cover.webp',
    shots: [
      { src: '/games/fears-forest/cover.webp' },
      { src: '/games/fears-forest/flashlight.webp' },
      { src: '/games/fears-forest/cabin.webp' },
      { src: '/games/fears-forest/aim.webp' },
      { src: '/games/fears-forest/camp.webp' },
      { src: '/games/fears-forest/controls.webp' },
    ],
    download: { url: `${RELEASE}/FearsForest-Windows.zip`, size: '497 MB', version: 'Build final' },
    play: null,
    tags: ['Unreal Engine 5', 'Blueprints', 'Survival Horror', '3ª persona'],
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
  'Game Dev · Unity & Unreal',
] as const
