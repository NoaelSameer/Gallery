function Larger(Classer) {
    let index = 0;
    let slides;

    // Function that moves slides, by adding or subtracting
    function SlideMover(n) {
        Mover(index + n);
    }

    // Moves slides, by removing the class, finds the new index, and then makes the new image visible
    function Mover(n) {
        slides[index].classList.remove("active");
        index = (n + slides.length) % slides.length;
        slides[index].classList.add("active");
    }

    // gets slide
    slides = document.querySelectorAll("." + Classer + " .slide");

    // Disable hover for images
    let photosDivs = document.querySelectorAll(".Photos div");
    for (let i = 0; i < photosDivs.length; i++) {
        let div = photosDivs[i];
        if (i !== index) {
            // Disable hover and click on div
            div.style.pointerEvents = "none";
        
            // Darken the image
            let image = div.querySelector("img");
            image.style.filter = "none";
        }
    }


    // Creates prevous button
    let prevButton = document.createElement("p");
    prevButton.className = "prev";
    prevButton.innerHTML = "&#10094;";
    prevButton.onclick = function() {
        SlideMover(-1);
    };
    document.body.appendChild(prevButton);

    // creates next button
    let nextButton = document.createElement("p");
    nextButton.className = "next";
    nextButton.innerHTML = "&#10095;";
    nextButton.onclick = function() {
        SlideMover(1);
    };
    document.body.appendChild(nextButton);

    // Creates close button
    let Closer = document.createElement("button");
    Closer.className = "Closer";
    Closer.innerHTML = "Close";
    Closer.onclick = function() {
        Closet(Classer);
    };
    document.body.appendChild(Closer);

    // Add Mainer class to slides, making it biggg
    for (let i = 0; i < slides.length; i++) {
        
        slides[i].classList.add("Mainer");
    }
}
function Closet(Classer) {
    // Remove previous button
    let prevButton = document.querySelector(".prev");
    if (prevButton) {
        prevButton.remove();
    }

    // Remove next button
    let nextButton = document.querySelector(".next");
    if (nextButton) {
        nextButton.remove();
    }

    // Remove close button
    let closeButton = document.querySelector(".Closer");
    if (closeButton) {
        closeButton.remove();
    }

    // Remove "Mainer" class from slides
    let slides = document.querySelectorAll("." + Classer + " .slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("Mainer");
    }

    // renable hover
    let photosDivs = document.querySelectorAll(".Photos div");
    for (let i = 0; i < photosDivs.length; i++) {
        photosDivs[i].style.pointerEvents = "";
    }

    // emables clickability
    let photosImages = document.querySelectorAll(".Photos img");
    for (let i = 0; i < photosImages.length; i++) {
        let image = photosImages[i];
        // Enables hover
        image.style.pointerEvents = "";
        // Background remover
        image.style.filter = "";
    }
}
