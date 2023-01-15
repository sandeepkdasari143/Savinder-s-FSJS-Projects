const navbar = document.getElementsByTagName("nav")[0];
const hamburger_menu = navbar.firstElementChild;
document.getElementsByClassName("hamburger")[0].addEventListener("click", () => {
    hamburger_menu.classList.toggle("hamburger_menu");
    navbar.children[2].classList.toggle("responsive_navbar")
})