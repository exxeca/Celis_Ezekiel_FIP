
// Menu hide
(function initSiteJS() {
  const btn  = document.querySelector('.menu-toggle');
  const nav  = document.querySelector('#site-nav');
  const form = document.querySelector('#contactForm');

  function handleMenuClick() {
    const isOpen = nav.classList.toggle('is-open');
    if (isOpen) nav.removeAttribute('hidden');
    else nav.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', String(isOpen));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // (keep your form work here)
  }

  if (btn && nav) btn.addEventListener('click', handleMenuClick);
  if (form) form.addEventListener('submit', handleFormSubmit);

 // ===== GSAP animations
if (window.gsap) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Helper to safely animate a list of elements
  const fadeRise = (targets, opts = {}) => {
    if (reduceMotion) return;
    const els = document.querySelectorAll(targets);
    if (!els.length) return;
    gsap.from(els, {
      opacity: 0,
      y: 24,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      ...opts
    });
  };

  // HOME
  if (document.querySelector('#home-page')) {
    // Hero (first section contents)
    fadeRise('#home-page .box.col-span-full:first-of-type > *');

    // Featured cards (on scroll)
    if (document.querySelector('#home-page .cards')) {
      gsap.from('#home-page .cards article', {
        opacity: 0,
        y: 32,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '#home-page .cards',
          start: 'top 80%',
          once: true
        }
      });
    }
  }

  // ABOUT
  if (document.querySelector('#about-page')) {
    fadeRise('#about-page section > *'); // headings, paragraphs, etc.
  }

  // PROJECTS
  if (document.querySelector('#projects-page')) {
    gsap.from('#projects-page article, #projects-page .project', {
      opacity: 0,
      y: 28,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: '#projects-page',
        start: 'top 85%',
        once: true
      }
    });
  }

  // CONTACT
  if (document.querySelector('#contact-page')) {
    fadeRise('#contact-page h1, #contact-page p, #contact-page form, #contact-page .contact-info');
  }
}




})(); // <— make sure to close the IIFE here!
