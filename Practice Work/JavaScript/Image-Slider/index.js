const imageCards = Array.from(document.getElementsByClassName("card"));
const nextBtn = document.getElementsByClassName("next")[0];
const prevBtn = document.getElementsByClassName("prev")[0];


imageCards.forEach((card, index) => {
    card.style.transform = `translateX(${index * 100}%)`;
})

let n = 1;
nextBtn.addEventListener("click", () => {
    if (n > imageCards.length - 1) {
        return
    }
    imageCards.forEach((card, index) => {
        card.style.transform = `translateX(${(index - n) * 100}%)`

    })
    n++;
    console.log(n)

})
let m = 0;
prevBtn.addEventListener("click", () => {
    m++;
    if(n>0){
    if(m === 1){
        n = n-2
    }else{
        n = n-1;
    }
} 
    if (n <= 0) {
        n = 0;
    }
   
    imageCards.forEach((card, index) => {

        card.style.transform = `translateX(${-(n - index) * 100}%)`

    })
    console.log(n)
})

