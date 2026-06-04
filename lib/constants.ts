export const PROJECTS = [
  {
    id: 'p1',
    name: 'SpaERP',
    desc: 'SaaS web para spas: agenda, clientes, inventario y empleados en un solo lugar. Backend en NestJS, frontend en React, base de datos en Supabase, deploy en Railway.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Supabase', 'Stripe'],
    year: '2026',
    type: 'SaaS · Wellness',
    color: '#161c0e',
    image: '/projects/spaerp.png',
    url: 'https://spaerpweb-production.up.railway.app/',
  },
  {
    id: 'p2',
    name: 'SapMOBILE',
    desc: 'App móvil para los clientes de los spas registrados en SpaERP. Agenda de citas, historial y notificaciones push.',
    tags: ['React Native', 'Expo', 'Supabase'],
    year: '2026',
    type: 'Working On · Mobile',
    color: '#161c0e',
  },
  {
    id: 'p3',
    name: 'WildStream',
    desc: 'Plataforma de streaming científico de fauna silvestre con sistema de roles, telemetría en tiempo real y mapa de operaciones. React + Node.js + Socket.IO + PostgreSQL, desplegable con un solo comando Docker.',
    tags: ['React', 'Node.js', 'Socket.IO', 'PostgreSQL', 'Docker'],
    year: '2026',
    type: 'Portfolio · Web',
    color: '#0d1f0f',
    url: 'https://github.com/BernardoCamarena/wildstream',
  },
  {
    id: 'p4',
    name: 'Ledger OS',
    desc: 'Backoffice contable para clínicas. Reportes fiscales, conciliación bancaria y firma electrónica.',
    tags: ['NestJS', 'TypeScript'],
    year: '2023',
    type: 'B2B · Web app',
    color: '#2a261a',
  },
  {
    id: 'p5',
    name: 'Pulse Commerce',
    desc: 'Headless e-commerce con checkout custom y panel administrativo. Integración con pasarelas locales.',
    tags: ['React', 'PHP', 'Stripe'],
    year: '2022',
    type: 'E-commerce',
    color: '#1a1a2a',
  },
  {
    id: 'p6',
    name: 'Nova Studio',
    desc: 'Sitio editorial para estudio creativo. Animaciones GSAP, CMS headless y modo galería inmersiva.',
    tags: ['React', 'GSAP'],
    year: '2022',
    type: 'Sitio editorial',
    color: '#2a1a1a',
  },
] as const

export const SKILLS = [
  {
    title: 'Web fullstack',
    code: '/01',
    desc: 'APIs robustas con NestJS y Laravel/PHP, frontends en React con TypeScript. Auth, pagos, integraciones.',
    tags: ['NestJS', 'PHP', 'React', 'TypeScript', 'Postgres'],
  },
  {
    title: 'Mobile · React Native',
    code: '/02',
    desc: 'Apps iOS + Android con un solo código. Animaciones nativas, push, deep links y CI/CD a stores.',
    tags: ['React Native', 'Expo', 'Reanimated'],
  },
  {
    title: 'Producto end-to-end',
    code: '/03',
    desc: 'Del wireframe al deploy. UI, base de datos, infra y handoff. Trabajo bien con diseñadores y product.',
    tags: ['Figma', 'Docker', 'AWS', 'Vercel'],
  },
  {
    title: 'Mantenimiento & rescates',
    code: '/04',
    desc: 'Tomo proyectos heredados, los entiendo, los limpio. Refactor con tests y docs que sí se leen.',
    tags: ['Refactor', 'Testing', 'Docs'],
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
  'Fullstack development',
  'React Native apps',
  'NestJS APIs',
  'PHP backends',
  'Product engineering',
] as const
