// ================================================
//  TUS DATOS: acá agregás habilidades, proyectos y estudios
//  Para agregar algo: copiá un bloque { ... } y pegalo debajo
//  con una coma entre ellos (el último no lleva coma).
// ================================================

// ---------- HABILIDADES ----------
// nivel: número de 0 a 100 | icono: clase de Font Awesome
const habilidades = [
  { nombre: "HTML",       icono: "fa-brands fa-html5",    color: "#e34f26", nivel: 95 },
  { nombre: "CSS",        icono: "fa-brands fa-css3-alt", color: "#2965f1", nivel: 80 },
  { nombre: "JavaScript", icono: "fa-brands fa-js",       color: "#f7df1e", nivel: 80 },
  { nombre: "Python",     icono: "fa-brands fa-python",   color: "#3776ab", nivel: 85 },
  { nombre: "React",      icono: "fa-brands fa-react",    color: "#61dafb", nivel: 70 },
  { nombre: "PHP",        icono: "fa-brands fa-php",      color: "#8993be", nivel: 60 },
  { nombre: "Git",        icono: "fa-brands fa-git-alt",  color: "#f05032", nivel: 75 }
];

// ---------- PROYECTOS ----------
const proyectos = [
  {
    titulo: "LiquidaPro",
    descripcion: "Sistema para simplificar el proceso de liquidación de sueldos, permite cargar legajos y liquidar por rubros con divisiones especiales, adaptado a la forma de trabajo del contador.",
    rol: "Creadora y desarrolladora full-stack.",
    imagen: "img/LiquidaPro.png",
    tecnologias: ["HTML", "CSS", "JavaScript", "Supabase"],
    github: "https://github.com/SheilaWayar/liquidapro",
    demo: "https://liquidapro.vercel.app/"
  },
    {
    titulo: "Festia",
    descripcion: "Aplicación web para reservar salones de eventos, que además permite reservar servicios como fotografía, sonido, iluminación y catering, y contratar planeadores de evento.",
    rol: "Proyecto en equipo. Desarrollé funcionalidades de frontend en React y de backend con FastAPI.",
    imagen: "img/Festia.png",
    tecnologias: ["React", "Vite", "FastAPI", "Supabase", "Vercel"],
    github: "https://github.com/SheilaWayar/Festia",
    demo: "https://festia-delta.vercel.app/salones"
  },
  {
    titulo: "Hermeiuris",
    descripcion: "Plataforma web educativa y colaborativa sobre derecho, orientada a acercar el conocimiento jurídico a toda la comunidad. Permite consultar información legal, participar en debates, opinar, explorar jurisprudencias de alto impacto y ampliar vocabulario a través de un glosario.",
    rol: "Creadora y desarrolladora full-stack.",
    imagen: "img/hermeiuris.png",
    tecnologias: ["Php", "Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/SheilaWayar/HermeIuris",
    demo: "https://hermeiuris.infinityfreeapp.com/"
  }
];

// ---------- ESTUDIOS ----------
const estudios = [
  {
    titulo: "Tecnicatura en Análisis de sistemas y desarrollo de software",
    institucion: "IES N° 6001 'Gral Manuel Belgrano'",
    periodo: "2025 - Actualidad",
    descripcion: "Formación en desarrollo web, bases de datos y programación."
  },
  {
    titulo: "Ingles",
    institucion: "Centro Universitario de Idiomas (CUI) UBA",
    periodo: "2024",
    descripcion: "Inglés Avanzado con fluidez en conversación, lectura y escritura."
  },
  
  {
    titulo: "Introducción a la administración pública",
    institucion: "Upateco",
    periodo: "2024",
    descripcion: "Fundamentos de la administración pública y gestión de proyectos."
  },
 {
    titulo: "Community Manager II",
    institucion: "Upateco",
    periodo: "2024",
    descripcion: "Gestión de redes sociales, creación de contenido, estrategia digital, manejo de comunidad y análisis de métricas.",
  },
  {
    titulo: "Curso de Python",
    institucion: "Brain Shock",
    periodo: "2023",
    descripcion: "Fundamentos del lenguaje, funciones y desarrollo de APIs."
  },
  {
    titulo: "Italiano",
    institucion: "Centro Universitario de Idiomas (CUI) UBA",
    periodo: "2023",
    descripcion: "Italiano inicial, vocabulario básico."
  }
];