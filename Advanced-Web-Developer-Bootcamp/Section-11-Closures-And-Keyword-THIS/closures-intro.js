function outer() {
    var start = "Closures are";
    return function inner() {
        return start + " " + "awesome"
    }
}

console.log(outer()); // ispisuje function:inner
console.log(outer()()); // pozvali smo inner function i ispisuje closures are awesome

// primer 1
function outer1(a) {
    return function inner(b) {
        // the inner function is making use of the variable "a"
        // which was defined in an outer function called "outer1"
        // and by the time inner was called, that outer1 function has returned
        // this function called "inner" is a closure!
        return a + b;
    }
}

console.log(outer1(5)(5));

var storeOuter = outer1(5);
console.log(storeOuter(10));

// primer 2
function outerFn() {
    var data = "something from outerFn";
    var fact = "Remember me!";
    return function innerFn() {
        // if you keep the chrome dev tools open
        // this will pause our code and place us 
        // in the sources tab where we can examine variables
        debugger
        return fact;
    }
}

var outer = outerFn();
console.log(outer());

// primer 3 - PRIVATE VARIABLES
function counter() {
    var count = 0;
    return function () {
        count++;
        return count;
    }
}

var counter1 = counter();
console.log(counter1()); // 1
console.log(counter1()); // 2

var counter2 = counter();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter1()); // 3 this is not affected by counter2!

console.log(count); // ReferenceError: count is not defined - because it is private!

// primer 4 - PRIVATE VARIABLES
function classRoom(){
    var instructors = ["Elie", "Colt"];
    return {
        getInstructors: function(){
            return instructors.slice();
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors.slice();
        }
    }
}

var first = classRoom();
console.log(first.addInstructor("Natalija"));

var course2 = classRoom();
console.log(course2.addInstructor("Kristina"));


