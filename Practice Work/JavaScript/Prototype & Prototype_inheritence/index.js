const employeeDetails = {
    userId: 7856,
    salary: "56985 INR",
    department: "Backend Developer",
    currentProject: function () {
        console.log(`The current project of ${this.userId} is to develop an ECommerce website`)
    }
}

// We have created an objecte called employeeDetails which have some properties & methods
console.log(employeeDetails);

//Apart from these above properties and methods our object has access to others many properties and method and these properties comes from prototype. So every object in JavaScript has some built in properties and methods and this is called prototype.
console.log(employeeDetails.__proto__);
// which is equal to 
console.log(Object.prototype);

const heroes = ["Naruto", "One Punch Man", "Goku"];
console.log(heroes);
console.log(heroes.__proto__); // equal to Array.prototype

function movies() {
    //
}

console.log(movies.__proto__); // equal to Function.prototype
console.log(movies.__proto__.__proto__) // equal to Object.prototype and called prototype chaining
console.log(movies.__proto__.__proto__.__proto__) //null, end of prototype chain

const employee2Detail = {
    userId: 7569,
    // __proto__:employeeDetails
}

//Prototype Inheritence
// employee2Detail.__proto__ = employeeDetails;
//modernWay
Object.setPrototypeOf(employee2Detail, employeeDetails);

String.prototype.savi = function () {
    console.log(`This method is created by savinder and true length of ${this} is ${this.trim().length}`)
}

