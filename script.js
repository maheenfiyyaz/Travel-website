document.getElementById("menu-toggle").addEventListener("click", () => {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

const journeyButton = document.querySelector('.cta-btn');
journeyButton.addEventListener('click', () => {
  alert('Get ready to explore paradise! Your journey starts now!');
});
document.addEventListener('DOMContentLoaded', () => {
  var typed = new Typed('#hero-title', {
    strings: ['Explore Paradise Discover the World',],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    startDelay: 500,
    loop: true
  });
});
const viewMoreButtons = document.querySelectorAll('.view-more-btn');

viewMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('More details about this destination coming soon!');
  });
});

const bookNowButtons = document.querySelectorAll('.book-now-btn');

bookNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for your interest! Booking options will be available soon.');
  });
});

const ctaButton = document.querySelector('.cta-btn');

ctaButton.addEventListener('click', () => {
  alert('Thank you for your interest! Let’s start your journey.');
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you shortly.');
  contactForm.reset();
});

const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach((icon) => {
  icon.addEventListener('mouseenter', () => {
    console.log(`You hovered over ${icon.getAttribute('href')}`);
  });
});
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting us!");
});