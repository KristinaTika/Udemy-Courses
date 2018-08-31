// primer 1 
function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

var firstHouse = new House(2, 2, 1000);

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function () {
        return this.name + " just barked!";
    }
}

var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);
console.log(rusty.bark());
console.log(fido);

// primer 2
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}

// better way to write Motorcycle function
function Motorcycle(make, model, year) {
    // using call
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

function Motorcycle(make, model, year) {
    // using apply
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}

function Motorcycle(make, model, year) {
    // even better using apply with arguments
    Car.apply(this, arguments);
    this.numWheels = 2;
}