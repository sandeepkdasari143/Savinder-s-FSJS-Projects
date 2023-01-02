let hamburger = document.getElementsByClassName("hamburger");
hamburger = Array.from(hamburger);

for (let x of hamburger) {
    x.addEventListener("click", () => {
        for (let y of hamburger) {
            y.classList.toggle("hamburger");
            y.classList.toggle("cross");
        }
        hamburger.forEach((element, index) => {
            console.log(element)
            if (element.classList.contains("cross")) {
                element.classList.add(`cross-${index + 1}`)
                document.getElementsByClassName("list-items-conatiner")[0].style.left = "0%";
                document.getElementsByClassName("list-items-conatiner")[0].style.position = "relative";
                document.getElementsByTagName("nav")[0].style.backdropFilter = "blur(10px)"
            } else {
                element.classList.remove(`cross-${index + 1}`)
                document.getElementsByClassName("list-items-conatiner")[0].style.left = "-110%";
                document.getElementsByTagName("nav")[0].style.backdropFilter = "blur(0)";
                document.getElementsByClassName("list-items-conatiner")[0].style.position = "absolute";
            }
        });
    })
}

let frontCards = document.getElementsByClassName("front");
frontCards = Array.from(frontCards);
console.log(frontCards)

frontCards.forEach(item => {
    item.addEventListener("mouseenter", () => {
        let cards = document.getElementsByClassName("card");
        cards = Array.from(cards);
        cards.forEach(x => {
            let child = x.querySelector(":first-child")
            child.classList.remove("rotate");
        })

    })
    item.addEventListener("mouseleave", () => {
        let cards = document.getElementsByClassName("card");
        cards = Array.from(cards);
        cards.forEach(x => {
            let child = x.querySelector(":first-child")
            child.classList.add("rotate");
        })

    })

})
