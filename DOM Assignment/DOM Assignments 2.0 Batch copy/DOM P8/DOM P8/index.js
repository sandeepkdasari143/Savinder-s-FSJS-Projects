
// Task-1
const newsContainer = document.getElementsByClassName('col-lg-4 new')[0];
newsContainer.style.overflow = "scroll"
const h2 = document.getElementsByClassName("new-head")[2];
const p = document.getElementsByClassName('new-p')[2];
const line = document.getElementsByClassName('hr-line')[1];
console.log(h2, p, line)
const newLine = line.cloneNode(true);
const newHeading = h2.cloneNode(true)
newHeading.innerText = "This is my Custom Heading"
const newPara = p.cloneNode(true)
newPara.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim massa ut dui rutrum, vel hendrerit ipsum tempus. In purus ante, tincidunt id ornare quis, dignissim nec "
p.insertAdjacentElement('afterend', newLine).insertAdjacentElement('afterend', newHeading).insertAdjacentElement("afterend", newPara)

//Task-2
document.body.style.backgroundImage = "none";

//Task-3 ---> navbar links will show smaller device
const collapseNavbar = document.getElementsByClassName('collapse')[0];
collapseNavbar.style.display = "flex";
