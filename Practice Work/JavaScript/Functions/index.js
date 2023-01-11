//Functions are the heart of JavaScript.They are useful while build real industry projects with the help of JavaScript. Function is a piece of code which can be reuse again & again. It is similar to variables but variables can hold a value but function can hold chunks of code or many lines of complex code.

//Syntax
// first we have function key word, then name of the function , in pranthesis we give parameters, parameters are like labels or placeholders or varibles whose scope is limited to the function only and at last we have function body inside the curlt braces {}

function greetingMessage() {
    console.log(`Welcome ! JavaScript will change your life !`);
}

//If we won't call/run/invoke a function.It;s code will never executed by JavaScript Engine

//Calling/Invoking/Running JS code ---> Now function code will execute
greetingMessage();
greetingMessage();
greetingMessage();

//As we mention above we can also provide input to the function and also can take output in the form of a value from function


// function parameters like scoreTeamA & scoreTeamB can't be used outside of function body
function WinnerTeam(scoreTeamA, scoreTeamB) {
    console.log(`The score of Team A is ${scoreTeamA} & The score of Team B is ${scoreTeamB} `)
    return scoreTeamA > scoreTeamB ? "Team A" : "Team B"
}
//WinnerTeam(25,23) // only print console.log() not the return value
//Since this function is returing a value we need to store it somewhere

const match_1 = WinnerTeam(25, 30) // 25 & 30 are called arguments and these will be replaced as a value to parameters inside the functions
const match_2 = WinnerTeam(35, 30)
console.log(`The winner of Match 1 is ${match_1}
The winner of Match 2 is ${match_2}`)

//Conclusion --> So functions help us to write clean & concise code based on DRY principle which Don't Repeat Yourself.
//We have many inbuilt functions such as Number(), our favourite console.log() etc.

//Passing N number of arguments in a function

function add() {
    console.log(arguments);// Stores our arguments in the form of array
    let sum = 0;
    for (args of arguments) {
        sum = sum + args;
    }
    return sum;
}
const add1 = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20);
console.log(add1);

//Function calling other function

function cutPizzaSlices(pizzas) {
    return pizzas * 8;
}
function cutBurgerIntoPieces(burgers) {
    return burgers * 3
}
function orderedFastFood(pizza, burger) {
    const pizzaSlices = cutPizzaSlices(pizza);
    const burgerPieces = cutBurgerIntoPieces(burger);

    return `The Fast Food that you ordered has ${pizzaSlices} Pizza slices and ${burgerPieces} Burger pieces`;
}
console.log(orderedFastFood(2, 3));