//Arrow functionis a new way of creating function expressions in ES6. Although the main difference between arrow functions & traditional functions is that arrow function do not have access to this keyword but we will learn about this keyword later.

//Function Expression 
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(1998);

//Arrow function when one parameter & one line of code requires

const calcAge3 = birthYear => 2023 - birthYear; // inthis single line of code no need to write return keyword it will get returned automatically
const age3 = calcAge3(1997);

// Arrow function when more than one parameter & more than one line of code requires.

const workingAgeLeft = (retirementAge, currentAge) => {
    return `The age left is ${retirementAge - currentAge}`
}
const age4 = workingAgeLeft(65, 24)
console.log(age2, age3, age4)