// In javaScript it is important to know the difference between statements and expressions. Because in some certain places JavaScript expects one of the particular one.

//Expression - Exression is the piece of code in JavaScript which produces some value.
// 3+4 = it is an expression because it produces an value.
// "My name is Savinder" - It is also an expression because it also produces a value in JavaScript.
// true && false && !true - another example of an expression

//Statement - It is a bigger piece of code which perform some actions but it does not produces a value.
// const name = "savinder"; - This entire code does one action that is declaring a variable but this line of code itself is not producing any value. Statements often ends with a semi colon.
// if (23>15){
//     const str = "23 is bigger";
//} -- This if else block is a statement similiarly switch case is also a statement. The only thing this if else is doing i.e. comparing whether 23 is grester than 15 or not and based on this it is declaring a variable str and storing a value "23 is bigger" in this str variable. But itself not producing any value. Although "23 is bigger" itself is an expression. So inside statements we can have expressions. 

// Statements are like entire sentences and expessions are like words forming those sentences.

//In some places javaScript expects an expression not a statement.

const myName = "Savinder";
console.log(`My name is ${myName} and my age is ${2022 - 1998}`); // Template literal expects an expression so this is valid.

// But we cannot pass a statement inside the template literal
/*console.log(`My name ${if (myName === "Savinder")
{
    console.log("My name is Savinder")
}}`); */



//Similarly inside the paranthesis of an if else statement an expression is expected so we can't provide a statement there.

/*if (const age = 23){
    console.log("My age is 23")
}*/