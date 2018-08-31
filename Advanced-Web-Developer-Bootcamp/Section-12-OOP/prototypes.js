function Person(name) {
    this.name = name;
}

var elie = new Person("Elie");
var colt = new Person("Colt");
console.log(elie.__proto__ === Person.prototype);
console.log(Person.prototype.constructor === Person);
