/*//Functions are the heart of JavaScript.They are useful while build real industry projects with the help of JavaScript. Function is a piece of code which can be reuse again & again. It is similar to variables but variables can hold a value but function can hold chunks of code or many lines of complex code.

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

//Write a function which is calling other functions inside of it 

function Averagescore(totalScore) {
    return totalScore / 10; //total 10 matches are there
}
function winner(scoreTeamA, scoreTeamB) {
    const averageScoreTeamA = Averagescore(scoreTeamA)
    const averageScoreTeamB = Averagescore(scoreTeamB)
    if (averageScoreTeamA > averageScoreTeamB) {
        return "TeamA is the winner"
    } else if (averageScoreTeamA < averageScoreTeamB) {
        return 'Team B is the winner'
    } else {
        return "Draw"
    }
}

// Note --> return keyword will stop the execution of the function and give output whatever value is retuned. So anything written after return keyword won't be executed
const season1 = winner(500, 550)
const season2 = winner(560, 550)
const season3 = winner(500, 500)
console.log(`${season1}, 
${season2}, 
${season3}`)
*/
/*
Q.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgMumbai' and 'avgKolkata'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "mumbai win (28 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Mumbai score 44, 23 and 71. Kolkata score 65, 54 and 49
TEST DATA 2: Mumbai score 85, 54 and 41. Kolkata score 23, 34 and 27
*/
//Solution

//1. 
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(calcAverage(10,10,13))

//2
const avgMumbaiTestData1 = calcAverage(44, 23, 71);
const avgMumbaiTestData2 = calcAverage(85, 54, 41);
const avgKolkataTestData1 = calcAverage(65, 54, 49);
const avgKolkataTestData2 = calcAverage(23, 34, 27);
console.log(`Test Data 1 : Average score of Mumbai is ${ avgMumbaiTestData1} and Kolkata is ${avgKolkataTestData1}
Test Data 2 : Average score of Mumbai is ${ avgMumbaiTestData2} and Kolkata is ${avgKolkataTestData2}`)

//3 
const checkWinner = function (avgMumbai,avgKolkata){
    if(avgMumbai >= avgKolkata*2){
        return`Mumbai wins (${avgMumbai} Vs ${avgKolkata})`
    }else if(avgKolkata>=avgMumbai*2){
        return `Kolkata wins (${avgKolkata} Vs ${avgMumbai})`
    }else{
       return `Draw! Noone wins ☹️☹️`
    }
}

//4
const winnerTestData1 = checkWinner(avgMumbaiTestData1,avgKolkataTestData1)
const winnerTestData2 = checkWinner(avgMumbaiTestData2,avgKolkataTestData2)
console.log(`Winner of TestData1 ; ${winnerTestData1}
Winner of TestData2 : ${winnerTestData2}`)