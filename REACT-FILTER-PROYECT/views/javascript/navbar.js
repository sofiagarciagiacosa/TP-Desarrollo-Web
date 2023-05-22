const hamburger= document.querySelector(".hamburger");
const navlinks=document.querySelector(".nav-links");
const dropdowns=document.querySelector(".dropdown");
const links=document.querySelector(".nav-links li");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");

    });
    hamburger.classList.toggle("toggle");
});