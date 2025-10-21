(function initSiteJS() {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const form = document.querySelector('#contactForm');

  function handleMenuClick() {
    nav.classList.toggle('is-open');
    btn.setAttribute(nav.classList.contains('is-open'));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
  }

  if (btn && nav) {
    btn.addEventListener('click', handleMenuClick);
  }

  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
})();
