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



 /* Q. Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is greater then the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430 */

const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill > 300  ? bill*0.20 : 0;
console.log(`The Bill is ${bill} and the tip is ${tip} and the final bill is ${bill+tip}`)