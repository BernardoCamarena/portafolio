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
      available: 'Disponible · Q2 2026',
      sub:       'Construyo productos web y mobile end-to-end con Nest, React y React Native.',
      cta:       'Empezar proyecto',
    },
    about: {
      num: '01 / sobre mí',
      h2:  'Sobre mí',
      h3:  'Soy <em>Bernardo</em>, desarrollador fullstack y mobile. Hago que las ideas existan — del primer commit al deploy.',
      p1:  'Trabajo con <strong>NestJS, PHP y React</strong> en el lado web, y <strong>React Native</strong> para mobile. Me gustan los productos donde la lógica importa tanto como la interfaz: dashboards, fintech, herramientas internas, mobile-first.',
      p2:  'Disponible para colaborar como contratista o freelance — proyectos cortos, sprints largos o equipo extendido. Cero ego, mucho ship.',
      stats: ['Years coding', 'Projects shipped', 'Coffees fueled'],
    },
    skills: {
      num: '03 / servicios',
      h2:  'Lo que hago',
      cards: [
        { title: 'Web fullstack',           desc: 'APIs robustas con NestJS y Laravel/PHP, frontends en React con TypeScript. Auth, pagos, integraciones.' },
        { title: 'Mobile · React Native',   desc: 'Apps iOS + Android con un solo código. Animaciones nativas, push, deep links y CI/CD a stores.' },
        { title: 'Producto end-to-end',     desc: 'Del wireframe al deploy. UI, base de datos, infra y handoff. Trabajo bien con diseñadores y product.' },
        { title: 'Mantenimiento & rescates',desc: 'Tomo proyectos heredados, los entiendo, los limpio. Refactor con tests y docs que sí se leen.' },
      ],
    },
    projects: {
      num: '04 / proyectos',
      h2:  'Trabajo selecto',
      descs: [
        'SaaS web para spas: agenda, clientes, inventario y empleados en un solo lugar. NestJS + React + Supabase, pagos con Stripe, deploy en Railway.',
        'Sistema CRM modular con automatizaciones, integraciones SMTP y panel de analítica en tiempo real.',
        'App móvil para músicos: grabación multi-pista, sincronización en la nube y colaboración en tiempo real.',
        'Backoffice contable para clínicas. Reportes fiscales, conciliación bancaria y firma electrónica.',
        'Headless e-commerce con checkout custom y panel administrativo. Integración con pasarelas locales.',
        'Sitio editorial para estudio creativo. Animaciones GSAP, CMS headless y modo galería inmersiva.',
      ],
      types: [
        'Fintech · Full-stack', 'SaaS · CRM', 'Mobile · Audio',
        'B2B · Web app', 'E-commerce', 'Sitio editorial',
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
      madeWith: 'Hecho con cariño y NestJS',
      status:   'Disponible Q2 2026 →',
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
      available: 'Available · Q2 2026',
      sub:       'I build web and mobile products end-to-end with Nest, React, and React Native.',
      cta:       'Start a project',
    },
    about: {
      num: '01 / about',
      h2:  'About me',
      h3:  "I'm <em>Bernardo</em>, fullstack & mobile developer. I make ideas exist — from the first commit to deploy.",
      p1:  'I work with <strong>NestJS, PHP, and React</strong> on the web side, and <strong>React Native</strong> for mobile. I like products where the logic matters as much as the interface: dashboards, fintech, internal tools, mobile-first.',
      p2:  'Available to collaborate as a contractor or freelancer — short projects, long sprints, or extended team. Zero ego, lots of shipping.',
      stats: ['Years coding', 'Projects shipped', 'Coffees fueled'],
    },
    skills: {
      num: '03 / services',
      h2:  'What I do',
      cards: [
        { title: 'Fullstack web',           desc: 'Robust APIs with NestJS and Laravel/PHP, React frontends with TypeScript. Auth, payments, integrations.' },
        { title: 'Mobile · React Native',   desc: 'iOS + Android apps from a single codebase. Native animations, push, deep links and CI/CD to stores.' },
        { title: 'End-to-end product',      desc: 'From wireframe to deploy. UI, database, infra and handoff. I work well with designers and product.' },
        { title: 'Maintenance & rescues',   desc: 'I pick up legacy projects, understand them, clean them up. Refactor with tests and docs that actually get read.' },
      ],
    },
    projects: {
      num: '04 / projects',
      h2:  'Selected work',
      descs: [
        'Web SaaS for spas: appointments, clients, inventory and staff in one place. NestJS + React + Supabase, Stripe payments, hosted on Railway.',
        'Modular CRM system with automations, SMTP integrations, and real-time analytics dashboard.',
        'Mobile app for musicians: multi-track recording, cloud sync, and real-time collaboration.',
        'Accounting backoffice for clinics. Tax reports, bank reconciliation, and electronic signature.',
        'Headless e-commerce with custom checkout and admin panel. Integration with local payment gateways.',
        'Editorial website for a creative studio. GSAP animations, headless CMS, and immersive gallery mode.',
      ],
      types: [
        'Fintech · Full-stack', 'SaaS · CRM', 'Mobile · Audio',
        'B2B · Web app', 'E-commerce', 'Editorial site',
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
      madeWith: 'Made with love and NestJS',
      status:   'Open for Q2 2026 →',
    },
  },
} as const
