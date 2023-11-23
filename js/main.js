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