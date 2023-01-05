document.querySelector(".hamburger_icon").addEventListener("click",()=>{
    document.querySelector(".hamburger_icon").classList.toggle("nav_open");
    document.querySelector("nav").classList.toggle("nav_show");
})