// Ternary operator is also known as conditional operator. Since it is a operator it is used in an expression and it produces a value unlike a statement.We can store that value in a variable to use it anywhere in the code. Since this operator has three parts first is the condition, second is if block  & third is else block. That's why we call it Ternary Operator.

const age = 17;
// age >= 18 ? console.log("You are allowed to drink wine 🍷") : console.log("You can only drink water 💧");

//Ternary operator is actual used in an expression or part of expression just like + or any other operator so it produces a value we can store this value.
const drink = age >= 18 ? "Wine 🍷" : "Water 💧";
console.log(drink);

let drink1;
if(age>=18){
    drink1 = "Wine 🍷";
}else{
    drink1 = "Water 💧";
}
console.log(drink1);

// Unlike if-else or switch statement we can store use it in template literals since it is an expression.
 console.log(`The age is ${age} and allowed to drink ${age >= 18 ? "Wine 🍷" : "Water 💧"}`);

