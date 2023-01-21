let num = 1;
document.body.addEventListener("click",(e)=>{
    const circle = document.createElement("div");
    circle.classList.add("circle")
    // console.log("clicked",circle)
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
    circle.innerText = num;
    document.body.appendChild(circle)
    console.log(e.clientX,e.clientY,num)
    num++;
})