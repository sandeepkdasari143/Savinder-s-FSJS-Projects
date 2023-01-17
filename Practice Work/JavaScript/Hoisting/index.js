//Hoisting means that we actually access variables and function even before initializing or putting any value on them. This all happens becuase of the variable environment which we have inside the execution context. In this variable environment all variables, functions created with function expresions & arrow functions will store value undefined and classical function i.e. those are declared using function declaration/function statements are stored as it is i.e the complete function.

// This is the reson why we can call person1 & person2 function before initializing them in the code 
// myName inside the {} is a new variable and has nothing to do with the myName in the global scope

var myName = "Savinder";
person1(); // Atul
person2(); // Bharat
console.log(myName) // Savinder

function person1() {
    var myName = "Atul";
    console.log(myName);
}
function person2() {
    var myName = "Bharat";
    console.log(myName);
}