let slideIndex = 0;

function Larger() {
    const images = document.querySelectorAll('.Budgies img');
    images.forEach(image => {
        // Enlarge the image
        image.style.height = "80vh";
        image.style.width = "80vw";
        
        // Center the image
        image.style.position = "fixed";
        image.style.top = "50%";
        image.style.left = "50%";
        image.style.transform = "translate(-50%, -50%)";
        
        // Darken the outside
        document.body.style.overflow = "hidden"; // Prevent scrolling
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        
        // Add transition for smooth animation
        image.style.transition = "2s";
    });
}

function Mover(n, className) {
    const slides = document.querySelectorAll(className);
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}
