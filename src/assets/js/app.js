// Menu hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
});

// Scroll e Fade-in
let lastScrollY = 0;
let scrollDirection = 'down';

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-scroll-direction', scrollDirection);
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = currentScrollY;
    });

    // Lógica para o menu mobile
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Lógica para fechar o menu ao clicar em um link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Lógica para animação de scroll (Intersection Observer)
    // Sugestão: Para animações mais complexas, use a lib AOS (Animate on Scroll)
    const animatedSections = document.querySelectorAll('.animated-section');
    const Observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                entry.target.classList.remove('section-hidden');
            }
        });
    }, {
        threshold: 0.8 // A animação começa quando 10% da seção está visível
    });

    animatedSections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section);
    });
});