window.addEventListener("scroll", () =>{
    document.querySelector("#navigation").classList.toggle("on-scroll",window.scrollY > 0)
    document.querySelector("#logo img").classList.toggle("shrink-on-scroll", window.scrollY > 0)
})