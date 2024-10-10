let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Schimbă imaginea la fiecare 3 secunde
}

function changeSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n - 1; // -1 pentru a evita incrementarea indexului
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    if (slideIndex >= slides.length) { slideIndex = 0; }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}
