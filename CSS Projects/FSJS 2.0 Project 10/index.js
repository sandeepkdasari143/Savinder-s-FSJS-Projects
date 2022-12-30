const hamburgerBtn = document.getElementById("hamburger-btn");
const crossBtn = document.getElementById("cross-btn");
const listItems = document.getElementsByTagName("ul")[0];
const navbar = document.getElementsByTagName("nav")[0];
console.log(hamburgerBtn, crossBtn, listItems);
hamburgerBtn.addEventListener("click", () => {
    crossBtn.style.display = "inline";
    listItems.style.left = "0%"
    hamburgerBtn.style.display = "none";
    navbar.style.backdropFilter = "blur(10px)";
  
    listItems.style.position = "relative"
    listItems.style.transition = "all 0.5s ease-in-out"
})
crossBtn.addEventListener("click", () => {
    crossBtn.style.display = "none";
    listItems.style.left = "-110%"
    hamburgerBtn.style.display = "inline";
    navbar.style.backdropFilter = "blur(0)";
   
    listItems.style.position = "absolute";
    listItems.style.transition = "none"
})