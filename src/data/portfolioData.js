export const developerData = {
  name: "Alex DevSec",
  title: "Desarrollador Full Stack Senior & Arquitecto de Software",
  tagline: "Transformo ideas complejas en productos digitales de alto impacto, escalables y con experiencias memorables.",
  location: "Remoto / Latinoamérica & Global",
  availability: "Disponible para Proyectos Full Stack & Liderazgo Técnico",
  email: "alex.fullstack@devportfolio.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  yearsExperience: "6+",
  completedProjects: "40+",
  uptimeGuarantee: "99.9%",
  satisfiedClients: "100%",

  aboutShort: "Ingeniero Full Stack apasionado por construir aplicaciones modernas de alta velocidad. Especializado en arquitectura de microservicios, bases de datos optimizadas y UI/UX de nivel premium.",

  quickStats: [
    { label: "Años de Experiencia", value: "6+", icon: "Briefcase" },
    { label: "Proyectos Desplegados", value: "45+", icon: "Code2" },
    { label: "Disponibilidad", value: "Inmediata", icon: "Clock" },
    { label: "Enfoque Principal", value: "React + Node / Cloud", icon: "Layers" }
  ],

  terminalCommands: {
    help: "Comandos disponibles: bio, skills, projects, stack, experience, contact, hire",
    bio: "Alex | Full Stack Engineer con 6+ años construyendo SaaS, plataformas en la nube y aplicaciones web de ultra alto rendimiento.",
    skills: "Frontend: React, Next.js, TS, Tailwind | Backend: Node.js, Express, Python, GraphQL | DB: PostgreSQL, MongoDB, Redis | Cloud: AWS, Docker, Kubernetes",
    projects: "SaaS Analytics Dashboard, Cloud E-Commerce API, Real-time Collaborative Board, AI Code Assistant",
    experience: "Senior Full Stack Dev @ TechScale (2023-Presente) | Tech Lead @ DevStudio (2021-2023) | Frontend Engineer @ WebFlows (2019-2021)",
    contact: "Email: alex.fullstack@devportfolio.com | LinkedIn: linkedin.com/in/alexdev | GitHub: github.com/alexdev",
    hire: "¡Excelente decisión! Haz clic en el botón 'Modo Reclutador' o contáctame directamente por email para agendar una llamada."
  },

  skills: {
    frontend: [
      { name: "React.js / Next.js", level: 95, icon: "Code", highlight: "Server Components, App Router, SSR/SSG" },
      { name: "TypeScript / JavaScript ES6+", level: 92, icon: "FileCode", highlight: "Tipado estricto, Generics, Async/Await" },
      { name: "CSS3 / TailwindCSS / Motion", level: 90, icon: "Palette", highlight: "Diseño responsivo, Animaciones 60fps, Glassmorphism" },
      { name: "State Management (Zustand/Redux)", level: 88, icon: "Cpu", highlight: "Estados globales reactivos y optimizados" }
    ],
    backend: [
      { name: "Node.js / Express / NestJS", level: 94, icon: "Server", highlight: "APIs RESTful, Microservicios, Middleware" },
      { name: "Python / FastAPI / Django", level: 85, icon: "Terminal", highlight: "Procesamiento asíncrono, Integración de IA" },
      { name: "GraphQL & WebSockets", level: 88, icon: "Activity", highlight: "Suscripciones en tiempo real, Apollo Server" },
      { name: "Authentication & Security", level: 90, icon: "ShieldCheck", highlight: "JWT, OAuth2, RBAC, Sanitización OWASP" }
    ],
    database: [
      { name: "PostgreSQL & Prisma / TypeORM", level: 92, icon: "Database", highlight: "Consultas complejas, Índices, Transacciones ACID" },
      { name: "MongoDB / Mongoose", level: 88, icon: "HardDrive", highlight: "Agregaciones, Modelado NoSQL de alto volumen" },
      { name: "Redis Caching", level: 86, icon: "Zap", highlight: "Caché en memoria, Pub/Sub, Rate Limiting" }
    ],
    devops: [
      { name: "Docker & Containerization", level: 90, icon: "Box", highlight: "Multi-stage builds, Docker Compose" },
      { name: "AWS (S3, EC2, Lambda, CloudFront)", level: 85, icon: "Cloud", highlight: "Infraestructura serverless y despliegue escalable" },
      { name: "CI/CD (GitHub Actions / Vercel)", level: 92, icon: "GitBranch", highlight: "Pipelines automatizados de testing y deployment" }
    ]
  },

  projects: [
    {
      id: "saas-analytics",
      title: "PulseAnalytics - SaaS de Métricas en Tiempo Real",
      category: "Full-Stack",
      shortDesc: "Plataforma SaaS para procesamiento de eventos en tiempo real con dashboards interactivos y reportes con IA.",
      longDesc: "Diseñada para procesar más de 50,000 eventos por segundo utilizando WebSockets y Redis. Cuenta con un dashboard receptivo en React, backend en Node.js y persistencia en PostgreSQL optimizada.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "TailwindCSS"],
      metrics: ["+140% Velocidad de Carga", "50k req/sec", "99.99% Uptime"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      architecture: [
        { step: "Cliente (Next.js)", detail: "Frontend optimizado con React Server Components & Tailwind" },
        { step: "API Gateway (Express)", detail: "Autenticación JWT, Rate Limiting & WebSocket Server" },
        { step: "Capa de Caché (Redis)", detail: "Almacenamiento de sesiones & Pub/Sub en tiempo real" },
        { step: "Persistencia (PostgreSQL)", detail: "Base de datos relacional optimizada con Prisma ORM" },
        { step: "Despliegue Cloud (AWS/Docker)", detail: "Contenedores Docker orquestados en AWS ECS" }
      ]
    },
    {
      id: "ai-copilot",
      title: "DevStream AI - Asistente de Código Colaborativo",
      category: "AI & Cloud",
      shortDesc: "Herramienta en la nube que permite a equipos de ingeniería colaborar en vivo y recibir sugerencias con IA.",
      longDesc: "Integra modelos LLM de última generación para análisis de sintaxis y refactorización automática. Soporta edición simultánea mediante WebSockets (CRDT).",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "FastAPI", "Python", "WebSockets", "Docker", "OpenAI API"],
      metrics: ["3.5k Usuarios Activos", "-40% Tiempo de Code Review", "Real-time Sync"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      architecture: [
        { step: "Editor UI (React + Monaco)", detail: "Editor de código enriquecido con resaltado de sintaxis" },
        { step: "Backend Asíncrono (FastAPI)", detail: "Servidor en Python procesando peticiones de IA" },
        { step: "Motor de Colaboración", detail: "Algoritmo CRDT mediante WebSockets para multi-usuario" },
        { step: "Servicio LLM", detail: "Pipeline de prompts optimizado con streaming de respuestas" }
      ]
    },
    {
      id: "ecommerce-microservices",
      title: "NexusMarket - E-Commerce de Alta Escala",
      category: "Full-Stack",
      shortDesc: "Arquitectura de microservicios para comercio electrónico con pasarela de pagos múltiple y control de inventario.",
      longDesc: "Desarrollado para gestionar miles de transacciones concurrentes con inventario distribuido, pagos con Stripe/PayPal, y generación de facturas en PDF en segundo plano.",
      image: "https://images.unsplash.com/photo-1556742049-0a6747d0c75a?auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "MongoDB", "RabbitMQ", "Stripe API", "Docker"],
      metrics: ["$1.2M+ Procesados", "<100ms Latencia de API", "Zero Downtime"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      architecture: [
        { step: "Storefront (React + Redux)", detail: "Interfaz ultrarrápida con renderizado híbrido" },
        { step: "Microservicios (Node/Express)", detail: "Servicios independientes de Usuarios, Catálogo y Pagos" },
        { step: "Queue Asíncrona (RabbitMQ)", detail: "Procesamiento diferido de correos, facturas y métricas" },
        { step: "Base de Datos (MongoDB)", detail: "Catálogo flexible NoSQL distribuido" }
      ]
    },
    {
      id: "cloud-devops-dashboard",
      title: "CloudGuard - Monitor de Infraestructura DevOps",
      category: "Cloud & DevOps",
      shortDesc: "Panel de control para monitoreo de clusters Kubernetes, métricas de CPU/Memoria y alertas automatizadas.",
      longDesc: "Proporciona visualizaciones métricas complejas utilizando Recharts y D3.js. Notifica anomalías en la infraestructura vía Slack y Telegram al instante.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1000&q=80",
      tags: ["TypeScript", "React", "Go/Golang", "Kubernetes", "Prometheus", "TailwindCSS"],
      metrics: ["Alertas en <2 seg", "Integración Slack/Discord", "Multi-Cluster Support"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      architecture: [
        { step: "Dashboard (TypeScript/React)", detail: "Gráficos vectoriales optimizados de alta resolución" },
        { step: "Agente Recolector (Go)", detail: "Binario ligero ejecutándose directamente en los nodos" },
        { step: "Servidor PromQL (Prometheus)", detail: "Consulta de series temporales de alto rendimiento" }
      ]
    }
  ],

  experience: [
    {
      period: "2023 - Presente",
      role: "Senior Full Stack Engineer",
      company: "TechScale Global",
      description: "Lideré la migración de un sistema monolítico a microservicios en la nube, reduciendo la latencia media en un 45% e incrementando el throughput de la plataforma.",
      achievements: [
        "Diseño e implementación de arquitectura con React Server Components & Express",
        "Optimización de consultas SQL en PostgreSQL reduciendo consumo de CPU del servidor en 30%",
        "Mentoría a un equipo de 6 desarrolladores junior y middle"
      ]
    },
    {
      period: "2021 - 2023",
      role: "Full Stack Developer & Tech Lead",
      company: "DevStudio Solutions",
      description: "Desarrollo integral de múltiples plataformas web SaaS y e-commerce de alto rendimiento para clientes corporativos de Estados Unidos y Europa.",
      achievements: [
        "Creación de design systems reutilizables con React, TailwindCSS y Storybook",
        "Integración de pasarelas de pago (Stripe, PayPal, MercadoPago)",
        "Implementación de pipelines CI/CD automatizados con GitHub Actions"
      ]
    },
    {
      period: "2019 - 2021",
      role: "Frontend Engineer",
      company: "WebFlows Inc",
      description: "Especialista en desarrollo de interfaces ricas e interactivas, animaciones web fluidas y optimización de SEO técnico.",
      achievements: [
        "Aumento del puntaje de Core Web Vitals en más de 20 proyectos a 95+",
        "Desarrollo de módulos de dashboards analíticos complejos"
      ]
    }
  ],

  testimonials: [
    {
      name: "Carlos Mendoza",
      role: "VP de Ingeniería @ TechScale",
      comment: "Alex no solo es un desarrollador Full Stack sumamente capaz, sino un verdadero solucionador de problemas. Su capacidad para entender la arquitectura global y entregar código limpio es extraordinaria.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sofia Ramírez",
      role: "Product Owner @ DevStudio",
      comment: "La atención al detalle de Alex en UI/UX y la solidez de sus APIs en Node.js hicieron que nuestros lanzamientos de producto superaran todas las expectativas de los clientes.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  ]
};
