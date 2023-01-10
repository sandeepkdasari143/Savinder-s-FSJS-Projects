// Function Declaration aka Function Statements

// const age1 = calculateAge(1998) // acceptable

function calculateAge(birthYear) {
    return 2023 - birthYear;
}
const age1 = calculateAge(1998)


//Function Expression
//A function without a name is called anonymous function and it is more of a expression so we can store it in variable. 

// const age1 = calculateAge(1998) //not acceptable throw error

const calculateAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calculateAge2(1997)

/*
We can't use anonymous function like this either provide a function name to make it a function statement or store it in variable to make it function expression
function () {
    //
}

*/
console.log(age1, age2)

//The only differenece between function expression & function statement is of Hoisting
//A function which is created by function statement/declaration can also be invoked before its creation
//A function which is created by function expression can't be invoked before its creation


