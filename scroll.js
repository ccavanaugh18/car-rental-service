// Smooth scrolling for navigation links
const aboutLink = document.querySelector('.about-link');
const modelsLink = document.querySelector('.models-link');
const testimonialsLink = document.querySelector('.testimonials-link');
const contactLink = document.querySelector('.contact-link');

aboutLink.addEventListener('click', event => {
  event.preventDefault();
  const targetSection = document.getElementById('plan-section');
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

modelsLink.addEventListener('click', event => {
  event.preventDefault();
  const targetSection = document.querySelector('.pick-section');
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

testimonialsLink.addEventListener('click', event => {
  event.preventDefault();
  const targetSection = document.querySelector('.testimonials-section');
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

contactLink.addEventListener('click', event => {
  event.preventDefault();
  const targetSection = document.querySelector('.footer-section');
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

// Smooth scrolling for reserve button, booking button, and learn more button
const reserveButton = document.querySelectorAll('.reserve-btn');
const bookButtons = document.querySelectorAll('.book-vehicle');
const learnMoreButtons = document.querySelectorAll('.learn-more');

reserveButton.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const targetSection = document.querySelector(button.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

bookButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const targetSection = document.querySelector(button.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

learnMoreButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const targetSection = document.querySelector(button.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
