var person = {
    firstName: "Elie",
    sayHi: function() {
        return "Hi " + this.firstName;
    },
    determineScope: function() {
        return this === person;
    }
}

console.log(person.sayHi()); // Hi Elie
console.log(person.determineScope()); // true

// primer 1
var person1 = {
    firstName: "Elie",
    determineScope: this // THIS se odnosi na WINDOW, zato sto nije definisana u pozvanoj funkciji!
}

// primer 2
var person2 = {
    firstName: "Colt",
    sayHi: function() {
        return "Hi " + this.firstName;
    },
    determineScope: function() {
        return this === person2;
    },
    dog: {
        sayHello: function() {
            return "Hello " + this.firstName;
        },
        determineScope: function() {
            return this === person2;
        }
    }
}

console.log(person2.sayHi()); // Hi Colt - THIS se odnosi na person2 objekat
console.log(person2.determineScope()); // true - THIS se odnosi na person2 objekat
console.log(person2.dog.sayHello()); // Hello undefined - THIS se odnosi na dog objekat, a u tom objektu ne postoji firstName, stoga je UNDEFINED
console.log(person2.dog.determineScope()); // false - THIS se odnosi na dog objekat, stoga je vezan za dog i nije vezan za person2, zato je FALSE
