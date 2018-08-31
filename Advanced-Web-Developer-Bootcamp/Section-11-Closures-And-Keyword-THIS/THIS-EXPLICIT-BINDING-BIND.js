// WITH BIND - WE DO NOT NEED TO KNOW ALL THE ARGUMENTS IN ADVANCE !
// primer 1
function addNumbers(a, b, c, d) {
    return this.firstName + " just calculated " + (a + b + c + d);
}

var kristina = {
    firstName: "Kristina"
}

var kristinaCalc = addNumbers.bind(kristina, 1, 2, 3, 4);
console.log(kristinaCalc()); // Kristina just calculated 10


// primer 2
var colt = {
    firstName: "Colt",
    sayHi: function() {
        setTimeout(function() {
            console.log("Hi " + this.firstName);
        }, 2000)
    }
}
console.log(colt.sayHi()); // Hi UNDEFINED    -    zbog setTimeout-a THIS se ne odnosi na colt objekat, vec na WINDOW objekat

var natalija = {
    firstName: "Natalija",
    sayHi: function() {
        setTimeout(function() {
            console.log("Hi " + this.firstName);
        }.bind(this), 2000) // bind-ovali smo setTimeour, a samim tim i this, za natalija objekat
    }
}

console.log(natalija.sayHi()); // Hi Natalija 