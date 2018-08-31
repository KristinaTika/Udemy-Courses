// primer 1
var person2 = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi " + this.firstName;
    },
    determineScope: function () {
        return this === person2;
    },
    dog: {
        sayHello: function () {
            return "Hello " + this.firstName;
        },
        determineScope: function () {
            return this === person2;
        }
    }
}
console.log(person2.sayHi()); //Hi Colt
console.log(person2.determineScope()); // true
console.log(person2.dog.sayHello.call(person2)); // Hello Colt
console.log(person2.dog.determineScope.call(person2)); // TRUE

// primer 2
var colt = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi " + this.firstName;
    }
}

var elie = {
    firstName: "elie",
    sayHi: function () {
        return "Hi " + this.firstName;
    }
}
console.log(colt.sayHi());
console.log(elie.sayHi());

// better way to write the code
var colt2 = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi " + this.firstName;
    }
}

var elie2 = {
    firstName: "elie"
}
console.log(colt2.sayHi());
console.log(colt2.sayHi.call(elie2));

// the best way to write the code
function sayHi() {
    return "Hi " + this.firstName;
}

var kristina = {
    firstName: "Kristina",
}

var natalija = {
    firstName: "Natalija",
}

console.log(sayHi.call(kristina));
console.log(sayHi.call(natalija));

// primer 3
var divs = document.querySelectorAll("div");
var divsArray = [].slice.call(divs);

divsArray.filter(function(value) {
    return value.textContent === "Hello";
});