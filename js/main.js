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
})

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
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000)
}