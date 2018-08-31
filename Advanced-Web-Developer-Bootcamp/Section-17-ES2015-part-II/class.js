class Student { 
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    static isStudent(obj){
        return obj.constructor === Student;
    }
}

var elie = new Student('Elie', 'Schoppik'); 

