let inputItems = document.querySelectorAll(".input-container input");
inputItems = Array.from(inputItems)
console.log(inputItems)
inputItems.forEach(item=>{
    item.addEventListener("input",()=>{
        if(item.id === "input-border"){
            document.querySelector("#content").style.border = `${item.value}px solid rgb(104, 21, 180)`;
            console.log("border")
        }else if(item.id === "input-margin"){
            document.querySelector("#content").style.margin = `${item.value}px`;
            console.log("margin")
        }else if(item.id === "input-padding"){
            document.querySelector("#content").style.padding = `${item.value}px`;
            console.log("padding")
        }else if(item.id === "input-height"){
            document.querySelector("#content").style.height = `${item.value}px`;
            console.log("padding")
        }else if(item.id === "input-width"){
            document.querySelector("#content").style.width = `${item.value}px`;
            console.log("padding")
        }
    })
})