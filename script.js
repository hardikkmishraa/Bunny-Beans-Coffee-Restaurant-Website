// ─── NAV SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── MOBILE NAV TOGGLE ───
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ─── HERO ENTRANCE ANIMATION ───
const heroBg = document.getElementById('heroBg');
const heroContent = document.getElementById('heroContent');
setTimeout(() => {
  heroBg.classList.add('loaded');
  heroContent.classList.add('visible');
}, 100);

// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ─── TESTIMONIALS SLIDER ───
const slides = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.getElementById('testimonialDots');
let current = 0;

slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
});

function goTo(n) {
  slides[current].classList.remove('active');
  slides[current].classList.add('exit');
  setTimeout(() => slides[current].classList.remove('exit'), 600);
  dotsContainer.children[current].classList.remove('active');
  current = n;
  slides[current].classList.add('active');
  dotsContainer.children[current].classList.add('active');
}

setInterval(() => goTo((current + 1) % slides.length), 5000);

// ─── PROMO POPUP CLOSE ───
const promoPopup = document.getElementById('promoPopup');
const promoClose = document.getElementById('promoClose');
if (promoClose && promoPopup) {
  promoClose.addEventListener('click', () => {
    promoPopup.classList.add('hidden');
  });
}