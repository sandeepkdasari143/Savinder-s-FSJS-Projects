const textArea = document.getElementsByClassName("textArea")[0];
const previewText = document.getElementsByClassName("preview")[0];
const btnUpper = document.querySelector("[data-upper]");
const btnLower = document.querySelector("[data-lower]");
const btnTitle = document.querySelector("[data-title]");
const btnRemoveSpace = document.querySelector("[data-remove-space]");
const btnCopy = document.querySelector("[data-copy]");
const btnClear = document.querySelector("[data-clear]");
const alertMsg = document.getElementsByClassName("pop_msg")[0];
const buttons = Array.from(document.getElementsByClassName("btn"));
if (!textArea.value) {
    buttons.forEach((btn) => {
        btn.classList.add("btn_inactive")
    })
}
// console.log(alertMsg);
const crossBtn = document.getElementById("cross");
const searchBtn = document.getElementById("search");
textArea.addEventListener("input", () => {
    previewText.innerText = textArea.value;
    if (textArea.value) {
        buttons.forEach((btn) => {
            btn.classList.remove("btn_inactive")
        })
        // console.log(textArea.value)
        btnUpper.addEventListener("click", () => {
            textArea.value = textArea.value.toUpperCase();
            previewText.innerText = textArea.value.toUpperCase();

        })
        btnLower.addEventListener("click", () => {
            textArea.value = textArea.value.toLowerCase();
            previewText.innerText = textArea.value.toLowerCase();
        })
        btnRemoveSpace.addEventListener("click", () => {
            const arr = textArea.value.split(" ");
            // console.log(arr)
            const arr2 = [];
            arr.forEach(element => {
                if (element) {
                    arr2.push(element);
                }
            })
            textArea.value = arr2.join(" ");
            previewText.innerText = textArea.value;
        })
        btnTitle.addEventListener("click", () => {
            const arr = textArea.value.split(" ");
            const arr2 = [];
            arr.forEach(item => {
                const word = item[0].toUpperCase() + item.slice(1);
                arr2.push(word)
            });
            textArea.value = arr2.join(" ");
            previewText.innerText = textArea.value;
        })
        btnClear.addEventListener("click", () => {
            textArea.value = "";
            previewText.innerText = textArea.value;
        })
        btnCopy.addEventListener("click", () => {
            navigator.clipboard.writeText(textArea.value);
            alertMsg.style.display = "flex"

        })

    } else {
        buttons.forEach((btn) => {
            btn.classList.add("btn_inactive")
        })
    }
})

crossBtn.addEventListener("click", () => {
    alertMsg.style.display = "none"
})
searchBtn.addEventListener("input", () => {
    if (previewText.innerText.includes(previewText.innerText)) {
        const searchTerm = searchBtn.value;
        const text = previewText.innerText;
        const re = new RegExp(searchTerm, "gi");
        const TextHigh = text.replace(re, "<mark>" + searchTerm + "</mark>");
        previewText.innerHTML = TextHigh;
    }
})


