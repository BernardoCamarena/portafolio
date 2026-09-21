export type Lang = 'es' | 'en'

export const T = {
  es: {
    nav: {
      about:    'Sobre mí',
      services: 'Servicios',
      work:     'Proyectos',
      contact:  'Contacto',
    },
    hero: {
      available: 'Disponible · 2026',
      sub:       'Construyo aplicaciones web y móviles de alto rendimiento con React, React Native, TypeScript y NestJS.',
      cta:       'Empezar proyecto',
    },
    about: {
      num: '01 / sobre mí',
      h2:  'Sobre mí',
      h3:  'Soy <em>Bernardo</em>, React Engineer y desarrollador fullstack con 5+ años programando — 2 años de experiencia profesional en producción.',
      p1:  'En <strong>TMH</strong> lideré y desarrollé aplicaciones web y móviles en producción para múltiples clientes: apps publicadas en <strong>App Store y Google Play</strong> (como California Burrito en EE.UU.), un sistema POS en React Native + Redux, una plataforma multi-tenant para más de 20 sucursales, backends en PHP para control de turnos y sistemas de reconocimiento facial con TensorFlow Lite.',
      p2:  'Actualmente desarrollo de forma independiente <strong>SpaERP</strong> (plataforma SaaS web con NestJS, PostgreSQL + Prisma y React + Vite) y su <strong>app móvil complementaria</strong> en React Native + Expo. Licenciado en Desarrollo de Videojuegos por la Universidad de Guadalajara · Inglés certificado C1 (EF SET).',
      stats: ['Años programando', 'Años profesional', 'Nivel de inglés'],
    },
    skills: {
      num: '03 / servicios',
      h2:  'Lo que hago',
      cards: [
        { title: 'Frontend & React',         desc: 'Especialista en React y TypeScript con Redux Toolkit, TailwindCSS y diseño responsivo enfocado en rendimiento y arquitectura limpia.' },
        { title: 'Mobile · React Native',   desc: 'Apps para iOS y Android (Expo & CLI), publicación en App Store y Google Play, optimización con FlashList y animaciones fluidas.' },
        { title: 'Backend & APIs',          desc: 'Arquitecturas backend escalables con NestJS y PHP, bases de datos PostgreSQL con Prisma ORM, autenticación JWT y APIs RESTful.' },
        { title: 'DevOps & AI Tools',       desc: 'Pipelines CI/CD en Azure DevOps y GitHub Actions, Docker, Gitflow y modelos de visión computacional con TensorFlow Lite / Python.' },
      ],
    },
    projects: {
      num: '04 / proyectos',
      h2:  'Trabajo selecto',
      descs: [
        'SaaS web para spas y centros de bienestar: agenda, clientes, inventario, gastos y proyecciones. NestJS + Prisma + React + TailwindCSS, pagos con Stripe, deploy en Railway.',
        'App móvil complementaria para clientes de SpaERP: agendamiento de citas, historial, medidas corporales, gráficas de progreso y notificaciones push.',
        'App móvil publicada en App Store y Google Play para cadena en EE.UU. Distancia en tiempo real, integración con Google Maps, marcación directa y contenido dinámico.',
        'Frontend completo de punto de venta (POS) y plantilla para restaurantes: gestión de catálogo, modificadores, flujos de cobro, comandas y mapeo de mesas.',
        'Sistema multi-tenant para +20 sucursales con API REST, autenticación JWT, dashboard en React, backend en PHP para turnos y reconocimiento facial con TensorFlow Lite.',
        'Plataforma de streaming científico y monitoreo de fauna con arquitectura fullstack en tiempo real, sistema de roles, telemetría en vivo y despliegue local con Docker.',
      ],
      types: [
        'SaaS · En desarrollo', 'Mobile · En desarrollo', 'Producción · App Store & Google Play',
        'Producción · B2B', 'Producción · Enterprise', 'Portfolio · Fullstack',
      ],
    },
    contact: {
      num:      '05 / contacto',
      h2Dream:  'sueño',
      h2Pre:    'Tienes un',
      h2Post:   'Hagámoslo',
      h2Accent: 'real.',
      sub:      'Contáctame a través de estas plataformas o por correo.',
    },
    footer: {
      madeWith: 'Hecho con cariño y Next.js',
      status:   'Disponible para proyectos →',
    },
  },

  en: {
    nav: {
      about:    'About',
      services: 'Services',
      work:     'Work',
      contact:  'Contact',
    },
    hero: {
      available: 'Available · 2026',
      sub:       'I build high-performance web and mobile products with React, React Native, TypeScript, and NestJS.',
      cta:       'Start a project',
    },
    about: {
      num: '01 / about',
      h2:  'About me',
      h3:  "I'm <em>Bernardo</em>, a React Engineer & Full-Stack Developer with 5+ years coding — 2 years of professional production experience.",
      p1:  'At <strong>TMH</strong> I led and shipped production web and mobile apps: applications published on the <strong>App Store and Google Play</strong> (such as California Burrito in the US), a full POS system in React Native + Redux, a multi-tenant platform for 20+ branches, PHP scheduling backends, and facial recognition features using TensorFlow Lite.',
      p2:  'Currently building <strong>SpaERP</strong> (a full web SaaS platform with NestJS, PostgreSQL + Prisma, React + Vite) and its companion <strong>mobile client app</strong> in React Native + Expo. B.S. in Video Game Development from Universidad de Guadalajara · C1 English Certified (EF SET).',
      stats: ['Years coding', 'Years professional', 'English level'],
    },
    skills: {
      num: '03 / services',
      h2:  'What I do',
      cards: [
        { title: 'Frontend & React',         desc: 'Specialized in React and TypeScript with Redux Toolkit, TailwindCSS, and responsive design focused on UI performance and clean architecture.' },
        { title: 'Mobile · React Native',   desc: 'iOS & Android apps (Expo & CLI), App Store and Google Play publishing, FlashList optimization, and smooth native animations.' },
        { title: 'Backend & APIs',          desc: 'Scalable backend architectures with NestJS and PHP, PostgreSQL databases with Prisma ORM, JWT authentication, and RESTful APIs.' },
        { title: 'DevOps & AI Tools',       desc: 'CI/CD pipelines in Azure DevOps and GitHub Actions, Docker, Gitflow, and computer vision models with TensorFlow Lite / Python.' },
      ],
    },
    projects: {
      num: '04 / projects',
      h2:  'Selected work',
      descs: [
        'Web SaaS for spas and wellness centers: appointments, clients, inventory, expense tracking, and revenue projections. NestJS + Prisma + React + TailwindCSS, Stripe, deployed on Railway.',
        'Companion mobile app for SpaERP clients: appointment booking, history, body measurements, progress charts, and push notifications.',
        'Mobile app published on App Store & Google Play for a US restaurant chain. Real-time distance calculation, Google Maps integration, direct calling, and dynamic content.',
        'Complete Point of Sale (POS) frontend and restaurant template: menu catalog, modifiers, checkout flows, order tracking, and table mapping.',
        'Multi-tenant system for 20+ branches with REST API, JWT auth, React dashboard, PHP backend for shift scheduling, and facial recognition using TensorFlow Lite.',
        'Scientific wildlife streaming and monitoring platform with real-time fullstack architecture, role-based access, live telemetry, and single-command Docker setup.',
      ],
      types: [
        'SaaS · In progress', 'Mobile · In progress', 'Production · App Store & Google Play',
        'Production · B2B', 'Production · Enterprise', 'Portfolio · Fullstack',
      ],
    },
    contact: {
      num:      '05 / contact',
      h2Dream:  'dream',
      h2Pre:    'Got a',
      h2Post:   "Let's make it",
      h2Accent: 'real.',
      sub:      'Reach out through any of these platforms or by email.',
    },
    footer: {
      madeWith: 'Made with love and Next.js',
      status:   'Open for opportunities →',
    },
  },
} as const
