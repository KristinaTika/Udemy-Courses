function Student(firstName, lastName){
    return Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.status = function(){
    return "I am currently a student!"
}
var elie = new Person('Elie', 'Schoppik');

elie.status; // undefined 

///////////////////////////

function Student(firstName, lastName){
    return Person.apply(this, arguments);
}

Student.prototype.sayHi = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;