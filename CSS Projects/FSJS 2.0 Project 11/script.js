const hamburger = document.getElementsByClassName("toggle")[0];
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("nav_open");
    document.getElementsByClassName("nav_right_side")[0].classList.toggle("navbar_show");
    document.getElementsByClassName("nav_right_side")[0].classList.toggle("navbar_hide");
});
