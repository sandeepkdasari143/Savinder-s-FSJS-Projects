const moviesGenre = {
    scifi: "Lucy",
    action: "Extraction",
    comedy: "The Dictator",

    MostWatchedMovie: function () {
        console.log(`The most watched & loved movie is ${this.comedy}`)
    }
}
// console.log(moviesGenre)
// console.log(moviesGenre.scifi)
// console.log(moviesGenre.MostWatchedMovie())
console.log(moviesGenre.__proto__)
console.log(Object.getPrototypeOf(moviesGenre))

const bestAnime = ["Death Note","Naruto","One Punch Man"];
console.log(bestAnime.__proto__); // equals to Array.prototype

console.log(bestAnime.__proto__.__proto__) // equals to Object.prototype
console.log(bestAnime.__proto__.__proto__.__proto__)