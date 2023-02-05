// Apart from constructor and classes there is an another way to implement inheritance for instances
//This is Object.create() we often do not use this method a lot
'use strict'
const personProto = {
    getalert() {
        console.log(`Hello! This is a notification`)
    },
    calcAge() {
        console.log(2023 - this.birthYear)
    }

}
const person1 = Object.create(personProto)
person1.birthYear = 1998;
console.log(person1) // person1  will inherit the getalert() method from personProto object
console.log(person1.calcAge())

const personProto2 = {

    intro(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    },
    getalert() {
        console.log(`Hello! This is a notification from ${this.firstName}`)
    }

}
const person2 = Object.create(personProto2);
person2.intro("savinder", 1998)
console.log(person2)
console.log(person2.getalert())



function Car(make, speed) {
    this.make = make;
    this.speed = speed;
    this.accelate = function () {
        this.speed = this.speed + 10;
        return this.speed;
    },
        this.brake = function () {
            this.speed = this.speed - 5;
            return this.speed;
        }

}
const car1 = new Car('BMW', 120);
console.log(car1.speed)
console.log(car1.accelate());
console.log(car1.accelate());
console.log(car1.brake());

const car2 = new Car('Mercedes', 95);
console.log(car2.speed)
console.log(car2.accelate());
console.log(car2.accelate());
console.log(car2.brake());

class Carcl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelarate() {
        this.speed = this.speed + 10;
        return this.speed;
    }
    brake() {
        this.speed = this.speed - 5;
        return this.speed;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }

}

const car3 = new Carcl("Tata", 80)
console.log(car3)
console.log(car3.speed)
console.log(car3.speedUS)
car3.speedUS = 50;
console.log(car3)


/****************Inheritence between constructors ********************/
// Person is going to be Parent and Student is going to be a child and Student will have some specific methods as well as it will inherit properties and method from Person

function Person(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function () {
    return 2023 - this.birthYear;
}

// creating a Student constructor

function Student(firstName, birthYear, course) {
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    // instead of writing above duplicate code we can call Person here it will do two things first it maintain DRY principle and also suppose in future inside the Person class we are changing something then those changes will be reflected here as well But till now we haven't inherited methods from the Person constructor to Student constructor

    Person.call(this, firstName, birthYear); // In a normal function call this.something will become undefined
    this.course = course;
}

// We need to link Student.prototype.__proto__ to Person.prototype. We need to write this line here before declaring any methods because Object.create() will return emptyObject and methods declared above on Student will be overwrite. 
// This is also wrong Student.prototype = Person.prototype ❌
//Linking prototype
Student.prototype = Object.create(Person.prototype)
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I studied ${this.course}`)
}
Student.prototype.constructor = Student;
const mike = new Student("mike", 1998, "IT")
console.log(mike)
mike.introduce();
console.log(mike.calcAge());

function CarNew(make, speed) {
    this.make = make;
    this.speed = speed;
}

CarNew.prototype.brake = function () {
    this.speed = this.speed - 5;
    return this.speed;
}
CarNew.prototype.accelarate = function () {
    this.speed = this.speed + 10;
    return this.speed;
}


function EV(make, speed, batteryStatus) {
    //  this.make = make;
    //  this.speed = speed;
    CarNew.call(this, make, speed)
    this.batteryStatus = batteryStatus
}
EV.prototype = Object.create(CarNew.prototype)
const tesla = new EV("Tesla", 120, 50)
console.log(tesla)
EV.prototype.chargeBattery = function (chargeTo) {
    this.batteryStatus = chargeTo
}
EV.prototype.accelarate = function () {
    this.speed = this.speed + 20;
    this.batteryStatus = this.batteryStatus - this.batteryStatus * 0.01;
    console.log(`The ${this.make} is going with speed ${this.speed} and have a charge of ${this.batteryStatus}`)
}


/****************Inheritance between classes*************************/

class CarNewcl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelarate() {
        this.speed = this.speed + 10;
        return this.speed;
    }
    brake() {
        this.speed = this.speed - 5;
        return this.speed;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }

}

//extend will inherit the CarNewcl.prototype
class EVcl extends CarNewcl {
    constructor(make, speed, charge) {
        // supper is important it will give access to this keyword
        super(make, speed)
        this.charge = charge

    }

    batteryCharge(chargeto) {
        this.charge = chargeto;

    }

    accelarate() {
        this.speed += 20;
    }

}

const tata = new EVcl("Tata Motors", 120, 85)
console.log(tata)
tata.accelarate();
tata.batteryCharge();
tata.brake();
console.log(tata.__proto__)
console.log(tata.__proto__.__proto__);

// Inheritance between objects using Object.create()
const Personproto = {
    calcAge() {
        return 2023 - this.birthYear;
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const Studentproto = Object.create(Personproto);
Studentproto.init = function (firstName, birthYear, course) {
    Personproto.init.call(this, firstName, birthYear)
}

console.log(Studentproto)
const riya = Object.create(Studentproto);
console.log(riya)
riya.init('Riya Tiwari', 1998, "JavaScript Development")

// How call method works

const desiDhaba = {
    dhaba : "Desi Dhaba",
    city : "Faridabad",
    orders :[],
    booking (orderNum, name){
        this.orders.push({order:`${orderNum}`, customerName : `${name}`})
        console.log(`${name}'s order is booked and order number is ${orderNum}`)

    }
}
console.log(desiDhaba)
const book = desiDhaba.booking;
book.call(desiDhaba,785,"Riya")
const videshiDhaba = {
    dhaba : "Videshi Dhaba",
    city : "Chnadigarh",
    orders :[],
}
book.call(videshiDhaba,785,"Riya")