// Task 01

let languages = Array.from(document.querySelectorAll(".main__languages > a"))
languages.forEach(elem => {
    if (elem.innerText.includes("2.0")) {
        elem.style.display = "none"
    }
})

//Task 02
const submitBtn = document.getElementsByClassName('main__form-btn')[0];
submitBtn.disabled = false;
const inputField = document.getElementsByClassName('main__form-input')[0];
inputField.disabled = false;
let namesValue;
const language = document.querySelector(".main__languages")
const names = localStorage.getItem('names');
if (names) {
    namesValue = JSON.parse(names);

} else {
    namesValue = [];
}
submitBtn.addEventListener('click', () => {
    const inputValue = inputField.value;
    namesValue.push(inputValue)
    localStorage.setItem('names', JSON.stringify(namesValue))
})

// function to add text in left card

function addText() {
    const aTag = language.getElementsByTagName('a')[0];
    namesValue.forEach(text => {
        const aTagNew = aTag.cloneNode(true);
        aTagNew.innerText = text;
        language.appendChild(aTagNew)

    })
}
addText();



















// submitBtn.addEventListener('click', () => {
//     let names = localStorage.getItem('names');
//     if (inputField.value) {
//         if (names === null) {
//             namesValue = [];
//         } else {
//             namesValue = JSON.parse(names)
//         }
//         namesValue.push(inputField.value);
//         localStorage.setItem('names', JSON.stringify(namesValue))
//     }

// })

// function append() {

//     const storedValue = JSON.parse(localStorage.getItem('names'));
//     const languagesBox = document.getElementsByClassName("main__languages")[0];
//  if (storedValue === null) {
//             namesValue = [];
//         } else {
//             namesValue = JSON.parse(names)
//         }

//     storedValue.forEach(name => {
//         const link = document.createElement('a');
//         link.href = "https://www.ineuron.ai";
//         link.target = "_blank"
//         link.innerText = name;
//         languagesBox.appendChild(link)
//     })
// }
// append();