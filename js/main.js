(() => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });
  }

  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }
})();



