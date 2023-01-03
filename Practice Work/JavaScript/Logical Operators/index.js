// Q1. Write a basic logic for a person if he/she has driving license, good vision and is not tired only then he/she can drive. If any one of the condition is not fullfilled then he is not able to drive.

const person = "Savinder";
const hasDrivingLicense = true;
const hasGoodVision = false;
const isTired = false;

console.log(hasDrivingLicense || hasGoodVision);
console.log(hasDrivingLicense && hasGoodVision && !isTired);
console.log(!isTired);

if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log(`${person} can Drive !`)
} else {
    console.log(`${person} can't Drive! Someone else should drive.`)
}

/* Q2. There are two Cricket teams, Mumbai and Kolkata. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.




/**************************Mumbai************************/
const scoreMumbai = {
    match_1: 88,
    match_2: 91,
    match_3: 50
};
let totalScoreMumbai = 0;
let numberOfMatchesMumbaiPlayed = Object.keys(scoreMumbai).length;
for (let score in scoreMumbai) {
    totalScoreMumbai = totalScoreMumbai + scoreMumbai[score];
}
const scoreAvgMumbai = (Math.round((totalScoreMumbai / numberOfMatchesMumbaiPlayed) * 100)) / 100;


/*****************************Kolkata**************************/
const scoreKolkata = {
    match_1: 88,
    match_2: 91,
    match_3: 50
}
let totalscoreKolkata = 0;
let numberOfMatchesKolkataPlayed = Object.keys(scoreKolkata).length;
for (let score in scoreKolkata) {
    totalscoreKolkata = totalscoreKolkata + scoreKolkata[score];
}
const scoreAvgKolkata = (Math.round((totalscoreKolkata / numberOfMatchesKolkataPlayed) * 100)) / 100;
console.log(`The Average Score of Team Mumbai is : ${scoreAvgMumbai}
The Average Score of Team Kolkata is : ${scoreAvgKolkata}`)


if (scoreAvgMumbai > scoreAvgKolkata && scoreAvgMumbai >= 100) {
    console.log(`YAY! Mumbai is the Winner!`)
} else if (scoreAvgMumbai < scoreAvgKolkata && scoreAvgKolkata >= 100) {
    console.log(`YAY! Kolkata is the Winner!`)
} else if (scoreAvgKolkata >= 100 && scoreAvgMumbai >= 100) {
    console.log(`Both wins! It's a Draw!`)
} else {
    console.log(`Nobody Wins, Neighter a Draw!`)
}