var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector(".navbar a");

menuBtn.addEventListener("click", function(){
    navLinks.classList.toggle("mobile-menu")
});