// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth Scroll for Anchor Links (polfill support for older browsers if needed, but modern CSS scroll-behavior usually handles it. JS adds control)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// Contact Form Handling
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const fromEmail = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = `New Contact from Website: ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${fromEmail}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        // Open default email client
        window.location.href = `mailto:MOKUNGU39@GMAIL.COM?subject=${encodeURIComponent(subject)}&body=${body}`; // body is manually encoded above for newlines
    });
}
