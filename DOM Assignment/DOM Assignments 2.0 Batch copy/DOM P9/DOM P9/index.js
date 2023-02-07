// Task-01
const title = document.querySelector('.caption > .title')
title.style.color = "#dc143c";

//Task-02
const addToCardBtn = document.getElementsByClassName('add-to-cart')[0];
addToCardBtn.addEventListener('mouseenter', ()=>{
    addToCardBtn.style.backgroundColor = "#dc143c";
})
addToCardBtn.addEventListener('mouseleave', ()=>{
    addToCardBtn.style.backgroundColor = "hsl(157, 37%, 20%)";
})
   
