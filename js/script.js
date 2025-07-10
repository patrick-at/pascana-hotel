// Scroll suave ajustable con JavaScript
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offset = 120; // Puedes ajustar esto si tu header es fijo y ocupa espacio.

        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

// Cambiar color de header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');

    // Distancia a la que cambia el color (cuando pasamos el hero)
    const heroHeight = hero.offsetHeight;

    if (window.scrollY > heroHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});