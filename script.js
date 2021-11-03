// Variables
const scrollBtn = document.querySelector('.btn--scroll');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');

// Button scrolling
scrollBtn.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching stategy
  if (e.target.classList.contains('nav__item')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
