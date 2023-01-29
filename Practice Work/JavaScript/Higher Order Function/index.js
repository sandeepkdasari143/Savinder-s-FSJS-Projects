// Functional Programming in JavaScript is not possible without Higher Order FUnctions. Higher Order Functions are those function which take other functions as an argument or returns another function from it is called Higher Order Functions.

function x() {
    console.log("Namaste JavaScript is Awesome")
}
function y(fun) {
    fun();
}
y(x)

// Here y is a Higher Order Function and x is a callback function. So the function which is being passed as an argument to higher order function is called Callback function.

function z() {
    return function () {
        console.log("I am returning anonymous function")
    }
}

console.log(z())
/// Since z is not taking any function as an argument but it is returning an anonymous function so it is called a Higher Order Function

function y(a) {
    return a()
}
y(function () {
    console.log("I am anonymous function")
})

// y is also a higher order function because it takes anonymous function as an agrument

const radius = [3, 1, 2, 4];
// Calculate area, circumference, & diameter

function calculateArea(radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output
}
// console.log(calculateArea(radius));

function circumference(radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i])
    }
    return output
}
// console.log(circumference(radius))

function diameter(radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i])
    }
    return output
}
console.log(diameter(radius));

// All 3 functions that we wrote above above are working fine but the problem is we are repeatitveness. Almost 90% of the code is same in all 3 functions and the only thing which is changing is the logic for formula. So this breaks the DRY principle.

//Now try to solve this question using Higher Order functions
function area(r) {
    return Math.PI * r * r
}
function circumference2(r) {
    return 2 * Math.PI * r
}
function diameter2(r) {
    return 2 * r
}
// function calculate2 (radius,fun){
//  const output = [];
//  for(let i = 0; i<radius.length; i++){
//       output.push(fun(radius[i]))
//  }
//  return output
// }

Array.prototype.calculate2 = function (fun) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(fun(this[i]))
    }
    return output
}

// console.log(calculate2(radius,area))
// console.log(calculate2(radius,circumference2))
// console.log(calculate2(radius, diameter2))

console.log(radius.calculate2(diameter2));
console.log(radius.map(diameter2));

// Array.prototype.fun1 = function (){
//     console.log(this)
// }
// radius.fun1()

//This all magic that we seen above is only possible because functions are first class citizen in JavaScript
