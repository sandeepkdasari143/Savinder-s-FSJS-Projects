// Before jumping to ES6 Classes we will revise some basic things related to Constructor functions, prototype, prototypal inheritance & prototypal chaining

// convention for creating a construcor function is that it should start from an upper case letter
//constructor functions can be created using function expression and function declaration but can't using arrow function because of arrow functions limitation to this keyword

// constructor function we are trying to create using function expression
const Person = function (firstName, lastName, currentYear, birthYear, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.currentYear = currentYear;
    this.birthYear = birthYear;
    this.job = job;


    //This is not recommended ❌
    this.summary = function () {
        return `Hi I am ${this.firstName} ${this.lastName}. I am a ${this.currentYear - this.birthYear} years old ${this.job}`
    }
}

console.log(Person) // Till here it will behave like a normal function, nothing special
console.log(Person("Savinder", "Singh", 2023, 1998, "Developer")) // returns undefined
//This real magic starts when we use the new operator on this function Person
console.log(new Person)
const person1 = new Person("Savinder", "Singh", 2023, 1998, "Developer")
console.log(person1)

// The new operator does these 4 operations
//1. it creates an empty object =  {}
//2. function Person is being called and inside that function, this = {} ---> so that all properties and methods that we declare with this. goes inside {}
//3. The object which was created now constructor is being linked to its prototype i.e. person1.__proto__ === Person.prototype;
//4. At last object is being returned from the function

const person2 = new Person("Ravinder", "Singh", 2023, 1998, "Developer")
console.log(person2)
console.log(person2.summary())
const person3 = new Person("Havinder", "Singh", 2023, 1998, "Developer")
console.log(person3)
console.log(person3.summary())
const person4 = new Person("Mavinder", "Singh", 2023, 1998, "Developer")
console.log(person4.summary())


//Now any object that we create using this constructor Person it will have this summary method inside of it. Which is not optimal so instead of doing this we do this

// Now each object that is being created using this constructor won't carry this summary2 method inside them but inside their prototype i.e. inside contructor we can find it and this is the most optimal way of doing this.

//This is recommended ✔️
Person.prototype.summary2 = function () {
    return `Hi I am ${this.firstName} ${this.lastName}. I am a ${this.currentYear - this.birthYear} years old ${this.job}`
}
console.log(person2)
console.log(person2.summary2())

//prototype ---> So the one thing that we obeserved right now is this that summary2 methode is not inside any object we created using new operator from constructor Person. But still we can access it because of something called prototypal inheritance. 
console.log(person2.__proto__) // It will give us the prototype of person2 which is an object which conatins  the method summary2 and constructor fn

// if we go one more step further
console.log(person2.__proto__.__proto__) // Now we get an object which has properties and method of Global Object is JS

//Remeber our object person2 has access to all these properties and methods inside these objects in step 1 & step2. This is called prototypal inheritance

// again going one more step deep
console.log(person2.__proto__.__proto__.__proto__) //This will return null which means this is the end of the chain. This is called prototypal chaining where ends occurs when we got null

//We can checkout all the properties and methods which are inside a object using .prototype
console.log(person2.prototype) // This will return undefined because person2 itsel is not a prototype but it contains some prototype down the chain
console.log(Person.prototype)
console.log(person2.__proto__ === Person.prototype)
console.log(person2.__proto__.__proto__ === Person.prototype.__proto__)

// We can also check these things
console.log(person2.__proto__.__proto__ === Object.prototype)
console.log(person2.__proto__.__proto__.__proto__ === Object.prototype.__proto__)

//Remember before checking .__proto__ oof Object, Array, String we need to write .prototype first
const a = "Savinder"
console.log(a.__proto__ === String.prototype)
console.log(a.__proto__.__proto__ === String.prototype.__proto__)
console.log(a.__proto__.__proto__ === Object.prototype)

const b = new String("Atul")
console.log(typeof b) //object
console.log(typeof a) //string

//Since everything is inheriting from global Object.prototype so we say that literally everything in JavaScript is an Object


/********************************************Now we can jump to ES6 Classes ********************************************/
// Classes in JavaScript are not similiar to classes in other programming languages. Infact classes are just syntax sugar to what we studied in constructor fn and in prototypes

// Behind the scenes classes are just functions but some special type of functions that do all things what constructor fn can do but with more concise and readable code.

//Like functions we can create classes using either by declaration or expression

// class expression
/*
const PersonNew = class{

}
*/

// class declaration
class PersonNew {
    constructor(firstName, lastName, currentYear, birthYear, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.currentYear = currentYear;
        this.birthYear = birthYear;
        this.job = job;
    }


    // unlike constructor all these methods are inside .prototype not inside object that is being created
    getSummary() {
        return `Hi! I am ${this.firstName} ${this.lastName}. I am a ${this.currentYear - this.birthYear} years old ${this.job}`
    }

    // No comma is required between differen methods unlike in case of constructor function
    getName() {
        return `Hi! I am ${this.firstName} ${this.lastName}.}`
    }
}


const personNew1 = new PersonNew("Savinder", "Singh", 2023, 1998, "Developer");
console.log(personNew1)
console.log(personNew1.getSummary())


// We can also add methods like this But this we have to do in constructors we can directly write this inside class that is why we have classes

PersonNew.prototype.getSummary2 = function () {
    return `Hi! I am ${this.firstName} ${this.lastName}. I am a ${this.currentYear - this.birthYear} years old ${this.job}`
}
console.log(personNew1)

//Notes
// Unlike functions classes are not hoisted
// var person555 = new PersonNew2("Ravinder", "Singh", 2023, 1998, "Developer");
// // Can't access class PersonNew2
// console.log('The output is' + person555)

class PersonNew2 {
    constructor(firstName, lastName, currentYear, birthYear, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.currentYear = currentYear;
        this.birthYear = birthYear;
        this.job = job;
    }
}

// Like functions classes are first class citizens which means we can pass them as an argument and return them from a function becuase at the end of the day classes are special type of function 

function first(x) {
    return x
}
first(PersonNew2)
first(new PersonNew("Savinder", "Singh", 2023, 1998, "Developer"));


// classes are executed in strict mode



// Getters & Setters ---. They are basically functions that Get & Set values but outside they look like regular properties
//Every Object in JavaScript has two type of properties 1. Accessors properties and 2. Data properties
//Data properties are normal properties but Accessors includes getter and setters 

const obj = {
    fullName: "Savinder",
    job: "Developer",

    get role() {
        return this.job
    },

    set role(domain) {
        return this.job = domain + " " + this.job
    }


}
obj.role = "Fullstack";
console.log(obj)
console.log(obj.role)

// Using Getters & Setters in classes
class People {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }

    set fullName(name) {
        console.log(name)
        if (name.includes(" ")) {
            return this._fullName = name;
        } else {
            alert("enter full name")
        }
    }
    get fullName() {
        return this._fullName
    }

}

const person222 = new People("Hanna Baker", "28")
console.log(person222)
const person420 = new People("james", 20)
console.log(person420)

//Static Methods --> Static methods are those methods which are not available on instances but only available on contructors.
// For example Array.from() here.from() is a static method which is not available on arrays like we can't do
 //const arr = [1,2,3]
 //console.log(arr.from()) //Error : arr.from is not a function. Because it is a static method and not available on instances But available on constructor

 console.log(Array.from("savinder")) // Array is a constructor so it is available there
 //Other static nethods are Number.parseInt()  and Number.ParseFloat()

 //Creating a Static method
const arr = [1,2]
 Array.hey = function (){
return `Hey 🫡`
 }

console.log(Array.hey())
//console.log(arr.hey()) ❌ arr.hey is not a function


//Creating static methods in classes
class People230 {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }

   static hey(){
    return `Hey This is me 🫡🙂✌️`
   }

}

console.log(People230.hey()) // Using this static method on contructor class 
const savi = new People230("savi","45")
//console.log(savi.hey()) ❌ savi.hey is not a function