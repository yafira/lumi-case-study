document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');

  // Custom cursor
  if (cursor && cursorRing && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      cursorRing.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  revealEls.forEach(el => observer.observe(el));

  // Nav border on scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
});
