// Task 01

const languages = Array.from(document.querySelectorAll(".main__languages > a"))
console.log(languages)
languages.forEach(elem => {
    console.log(elem)
    if (elem.innerText.includes("2.0")) {
        elem.style.display = "none"
    }
})

//Task 02

const submitBtn = document.getElementsByClassName('main__form-btn')[0];
submitBtn.disabled = false;
const inputField = document.getElementsByClassName('main__form-input')[0];
inputField.disabled = false;