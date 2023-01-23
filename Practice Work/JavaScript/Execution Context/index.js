var myName = "Savinder";
function calcAge (birthYear) {
    
    var currentYear = 2023;
    var age = currentYear - birthYear;
    return age
}
function introduce (birthYear){
   
    var age = calcAge(birthYear)
    var myName = "Savinder Singh"
    return `Hi! My name is ${myName} and I am ${age} years old`
}
 var sayHello = introduce(1999);
 console.log(sayHello);
 console.log(myName);