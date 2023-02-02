// First letter of the constructor function should be Capital not compulsory but a kind of a convention

//constructor functions can't be created using arrow functions because arrow functions do not have access of "this" keyword

const Resume = function(firstName,lastName,birthYear,job){
this.name = firstName+lastName;
this.profession = job;
this.age  = 2023-birthYear;

// This is not recommended use prototype instead
this.summary = function () {
    console.log(`Hi! I am ${this.name} and I am a ${this.profession}`)
}
 }

// console.log(Resume) // normal function

//new operator does these 4  steps
// creates an {} object
// function is being called & this = {}
// {} linked to prototype
// function will return {}

console.log(new Resume())
const atul = new Resume ("atul","Tiwari",2000,"Developer");
const mayur = new Resume ("Mayur","Tiwari",1999,"Developer");
const bhrat = new Resume ("Bharat", "Chavhan",2000,"Developer");
// console.log(atul)
// console.log(atul.summary())
// console.log(atul)
console.log(atul.__proto__)
console.log(atul instanceof Resume)
console.log(atul.__proto__ === Resume.prototype);
 console.log( Resume.__proto__ === Resume.prototype)  
 Resume.prototype.intro = function(){
    return `Hi! I am ${this.name} and I am a ${this.profession}`
 }
console.log(mayur.intro())
console.log(bhrat)
