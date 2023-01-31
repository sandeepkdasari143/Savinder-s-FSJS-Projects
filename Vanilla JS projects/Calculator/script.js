const screenInput = document.getElementsByClassName("screen")[0];
// console.log(screen)
const buttons = Array.from(document.getElementsByClassName("btn"));
let n = 0;
buttons.forEach((elem) => {
    elem.addEventListener("click", function (e) {
        if (n === 1) {
            screenInput.value = "";
            n = 0;
        }

        if (e.target.innerText !== "=") {
            if (e.target.innerText !== "x" && n === 0 && e.target.innerText !== 'x y') {
                screenInput.value += e.target.innerText;
            }
        }

        switch (e.target.innerText) {
            case "AC":
                screenInput.value = "";
                break;
            case "←":
                const screenValue = screenInput.value;
                screenInput.value = screenValue.slice(0, -2)
                // screenInput.value = screenValue.slice(0,screenValue.length-2)
                break
            case "=":
                // const output = eval(screenInput.value);
                // screenInput.value = output;
                try {
                    const output = eval(screenInput.value);
                    screenInput.value = output;
                } catch {
                    screenInput.value = " Error 😢";
                    n = 1;
                }
                break;
            case "x":
                e.target.innerText = "*";
                screenInput.value += e.target.innerText;
                e.target.innerText = "x";
                break;
            case 'x y':
                console.log(e.target.innerText)
                e.target.innerText = "**";
                screenInput.value += e.target.innerText;
                e.target.innerHTML = `<span>x <sup>y</sup></span>`

                break
            default:
                break;
        }

    })
})
