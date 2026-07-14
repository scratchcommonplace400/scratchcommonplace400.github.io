// ============================================================
// NELSON OROZCO — script.js
// Nav con blur al hacer scroll, reveal on scroll, barras de
// habilidades animadas, menú móvil, navegación activa.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // Año en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav: fondo con blur al hacer scroll
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menú móvil
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll-reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');

          // Si el elemento contiene barras de habilidades, animarlas
          entry.target.querySelectorAll('.bar-fill').forEach(bar => {
            requestAnimationFrame(() => bar.classList.add('filled'));
          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => {
      el.classList.add('in-view');
      el.querySelectorAll('.bar-fill').forEach(bar => bar.classList.add('filled'));
    });
  }

  // Navegación activa según sección visible
  const navAnchors = document.querySelectorAll('[data-nav]');
  const sections = Array.from(navAnchors)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = '#' + entry.target.id;
        const link = document.querySelector(`[data-nav][href="${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          navAnchors.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach(sec => navObserver.observe(sec));
  }

});
