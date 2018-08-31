function Person(name) {
    this.name = name;
}

var elie = new Person("Elie");
var colt = new Person("Colt");
console.log(elie.__proto__ === Person.prototype);
console.log(Person.prototype.constructor === Person);

Person.prototype.isInstructor = true;
console.log(elie.isInstructor);
console.log(colt.isInstructor);

////////////////////////////////////

//refactoring code
function Person(name) {
    this.name = name;
    this.sayHi = function() {
        return "Hi " + this.name;
    }
}

var elie = new Person("Elie");
console.log(elie.sayHi());

function Person(name) {
    this.name = name;
}
Person.prototype.sayHi = function() {
    return "Hi " + this.name;
}

var colt = new Person("Colt");
console.log(colt.sayHi());

// challenge 1
// Create a constructor function for a Vehicle: every object created from this constructor should have a make, model, and year property. Each object should also have a property called isRunning, which should be set to false
// Every object created from the Vehicle constructor should have a function called turnOn, which changes the isRunning property to true
// Every object created from the Vehicle constructor should have a function called turnOff, which changes the isRunning property to false
// Every object created from the Vehicle constructor should have a method called honk, which returns the string "beep" ONLY if the isRunning property is true

function Vehicle(make, model, year, property) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.property = property;
    this.isRunning = false;
}
Vehicle.prototype.turnOn = function() {
    this.isRunning = true;
}
Vehicle.prototype.turnOff = function() {
    this.isRunning = false;
}
Vehicle.prototype.honk = function() {
    if(this.isRunning){
        return "Beep!";
    }
}

var punto = new Vehicle("fiat", "punto sa tackom", 2009, "moj");
punto.turnOn();
console.log(punto);
console.log(punto.honk());
