// Slider infinito simple
const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const slideWidth = 320; // ancho de imagen + margen
const totalSlides = sliderTrack.children.length;

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Reinicia al principio
    }
    sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Salta al final
    }
    sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
});

// Scroll suave ajustable con JavaScript
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offset = 140; // Puedes ajustar esto si tu header es fijo y ocupa espacio.

        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});