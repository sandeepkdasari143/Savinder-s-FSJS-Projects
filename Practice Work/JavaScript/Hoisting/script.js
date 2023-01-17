
console.log(x);  //undefined
console.log(fun1) // entire function will print
console.log(fun1());  // fun1 will execute and prints "Function 1 is executed" in the console.
console.log(fun2) // undefined
// console.log(fun2()) // TypeError: fun2 is not a function
console.log(fun3) // undefined
// console.log(fun3()) // TypeError: fun3 is not a function
var x = 15;
function fun1() {
    console.log("Function 1 is executed");
}
var fun2 = function () {
    console.log("fun 2 is being executed");
}
var fun3 = () => {
    console.log("fun3 is executed")
}
