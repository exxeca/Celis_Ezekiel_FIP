// === Menu toggle patch (drop inside your js/main.js IIFE or use as-is) ===
(function () {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');

  if (!btn || !nav) return;

  function toggleMenu() {
    const isOpen = nav.classList.toggle('is-open');
    if (isOpen) {
      nav.removeAttribute('hidden');
    } else {
      nav.setAttribute('hidden', '');
    }
    btn.setAttribute('aria-expanded', String(isOpen));
  }

  btn.addEventListener('click', toggleMenu);
})();