"use strict";

if (window.scrollY > 0) {
    document.querySelector("#navigation").classList.toggle("on-scroll", true);
    document.querySelector("#logo img").classList.toggle("shrink-on-scroll", true);
    document.querySelector("#current-page").classList.toggle("shrink-nav", true);
}

window.addEventListener("scroll", () =>{
    document.querySelector("#navigation").classList.toggle("on-scroll",window.scrollY > 0);
    document.querySelector("#logo img").classList.toggle("shrink-on-scroll", window.scrollY > 0);
    document.querySelector("#current-page").classList.toggle("shrink-nav", window.scrollY > 0);
});


let navigationItems = document.querySelector('#nav-menu');

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

try {
    let openHam = document.querySelector('#openHam');
    let closeHam = document.querySelector('#closeHam');

    if (window.innerWidth < 900) {
        openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
        closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "flex"));
    } else {
        openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
        closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "flex"));
    }

} catch (error) {
    // hamburgerEvent("none", "none", "flex");
    if (window.innerWidth > 900) {
        navigationItems.style.display = "flex";
    } else {
        navigationItems.style.display = "none";
    
    }
};



// ================================ About ===============================
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    //!PENDING: fix the error
    // if (slideIndex > slides.length) {slideIndex = 1}    
    // slides[slideIndex-1].style.display = "block";  
    // setTimeout(showSlides, 5000)
}

// ================== Activities Testimonial Carousel ==================

updateTestimonial("trip-1-carousel");
updateTestimonial("trip-2-carousel");

function updateTestimonial(actCarousel) {
    /*
    testimonials = [1, 2, 3]
    2nd will display at center
    After n seconds, 1st will be removed (which was 2nd) and appended to the testimonials.
    This will make 3rd as 2nd and 4th as 3rd and turn it into an infinite loop.
    */
    let i;
    let testCarousel = document.getElementsByClassName(actCarousel)[0];
    if (!testCarousel) {
        return;
    }
    let testimonials = Array.from(testCarousel.getElementsByTagName("article"));
    let nodes = testimonials.splice(0, 2);
    let firstNode = nodes[0];
    let secondNode = nodes[1];

    secondNode.classList.remove("active-testimonial");

    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].style.filter = "blur(5px)";
    }
    testCarousel.removeChild(firstNode);
    testCarousel.appendChild(firstNode);

    testCarousel.getElementsByTagName("article")[1].classList.add("active-testimonial");
    setTimeout(updateTestimonial, 3700, actCarousel);
}