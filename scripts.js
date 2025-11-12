document.addEventListener("DOMContentLoaded", function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navUl = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function() {
    navUl.classList.toggle('active');
  });

  // Smooth scrolling when clicking nav links
  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      if(this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Contact Form handler (example demonstration)
  const contactForm = document.getElementById('contactForm');
  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Thank you for your message! We'll get back to you soon.");
      contactForm.reset();
    });
  }
});
