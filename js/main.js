// ========== MENÚ HAMBURGUESA ==========
const botonMenu = document.getElementById('nav-toggle');
const menu = document.getElementById('menu');

botonMenu.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Al tocar un link, el menú se cierra
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});


// ========== CONTADORES ANIMADOS ==========
const counters = document.querySelectorAll('.counter');

function animarContador(el) {
  const meta = Number(el.dataset.target);
  const duracion = 1500;
  const inicio = performance.now();

  function paso(ahora) {
    const progreso = Math.min((ahora - inicio) / duracion, 1);
    el.textContent = Math.floor(progreso * meta);
    if (progreso < 1) requestAnimationFrame(paso);
    else el.textContent = meta + '+';
  }

  requestAnimationFrame(paso);
}

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      animarContador(entrada.target);
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach((c) => observador.observe(c));


// ========== HABILIDADES ==========
const contenedorSkills = document.getElementById('skills-list');

habilidades.forEach((h) => {
  contenedorSkills.innerHTML += `
    <div class="skill">
      <div class="skill-top">
        <i class="${h.icono}" style="color:${h.color}"></i>
        <span class="skill-name">${h.nombre}</span>
        <span class="skill-level">${h.nivel}%</span>
      </div>
      <div class="bar">
        <div class="bar-fill" data-nivel="${h.nivel}"></div>
      </div>
    </div>
  `;
});

const observadorBarras = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      const barra = entrada.target;
      barra.style.width = barra.dataset.nivel + '%';
      observadorBarras.unobserve(barra);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.bar-fill').forEach((b) => observadorBarras.observe(b));


// ========== PROYECTOS ==========
const contenedorProyectos = document.getElementById('projects-list');

proyectos.forEach((p) => {
  const imagen = p.imagen
    ? `<img src="${p.imagen}" alt="Captura de pantalla del proyecto ${p.titulo}">`
    : `<i class="fa-solid fa-laptop-code" aria-hidden="true"></i>`;

  const tags = p.tecnologias.map((t) => `<span class="tag">${t}</span>`).join('');

  const linkGithub = p.github
    ? `<a href="${p.github}" target="_blank"><i class="fa-brands fa-github"></i> Código</a>`
    : '';
  const linkDemo = p.demo
    ? `<a href="${p.demo}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Ver online</a>`
    : '';

  contenedorProyectos.innerHTML += `
    <article class="project">
      <div class="project-img">${imagen}</div>
      <div class="project-body">
        <h3>${p.titulo}</h3>
        <p>${p.descripcion}</p>
        <div class="project-role"><strong>Mi rol:</strong> ${p.rol}</div>
        <div class="tags">${tags}</div>
        <div class="project-links">${linkGithub}${linkDemo}</div>
      </div>
    </article>
  `;
});


// ========== ESTUDIOS ==========
const contenedorEstudios = document.getElementById('studies-list');

estudios.forEach((e) => {
  contenedorEstudios.innerHTML += `
    <div class="timeline-item">
      <span class="timeline-date">${e.periodo}</span>
      <h3>${e.titulo}</h3>
      <div class="timeline-place"><i class="fa-solid fa-building-columns"></i> ${e.institucion}</div>
      <p>${e.descripcion}</p>
    </div>
  `;
});