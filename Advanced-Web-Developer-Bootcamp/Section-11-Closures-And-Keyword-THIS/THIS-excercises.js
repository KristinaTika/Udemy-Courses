/* task 1 
Write a function called arrayFrom which converts an array-like-object into an array.
*/

function arrayFrom(arrayLikeObject) {
    return [].slice.call(arrayLikeObject);
}

/* task 2
Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.
*/

function sumEvenArguments() {
    var newArgs = [].slice.call(arguments);
    return newArgs.reduce(function (acc, next) {
        if (next % 2 === 0) {
            return acc + next;
        }
        return acc;
    }, 0);
}
console.log(sumEvenArguments(1, 2, 3, 4));

/* task 3
Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out".
*/

function add(a, b) {
    return a + b;
}

function invokeMax(fn, num) {
    var max = 0;
    return function () {
        if (max >= num) {
            return "Maxed Out!";
        }
        max++;
        return fn.apply(this, arguments);
    }
}
var addOnlyThreeTimes = invokeMax(add, 0);
console.log(addOnlyThreeTimes(1, 2));

/* task 4
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.
*/

function once(fn, thisArg) {
    var hasBeenCalled = false;
    return function () {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            return fn.apply(thisArg, arguments);
        }
    };
}

function add2(a, b) {
    return a + b;
}

var addOnce = once(add2, this);
console.log(addOnce(2, 12)); // 14

function doMath(a, b, c) {
    return this.firstName + " adds " + (a + b + c);
}

var instructor = {
    firstName: "Elie"
};
var doMathOnce = once(doMath, instructor);
console.log(doMathOnce(1, 2, 3)); // "Elie adds 6"
console.log(oMathOnce(1, 2, 3)); // undefined

/*  BONUS task 5
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!
*/

function bind(fn, thisArg) {
    var outerArgs = [].slice.call(arguments, 2);
    return function () {
        var innerArgs = [].slice.call(arguments);
        var allArgs = outerArgs.concat(innerArgs);
        return fn.apply(thisArg, allArgs);
    }
}

function firstNameFavoriteColor(favoriteColor) {
    return this.firstName + "'s favorite color is " + favoriteColor;
}

var person = {
    firstName: 'Elie'
}

var bindFn = bind(firstNameFavoriteColor, person);
console.log(bindFn('green')); // "Elie's favorite color is green"

var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
console.log(bindFn2('green'));  // "Elie's favorite color is blue" 

function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
}

console.log(bind(addFourNumbers, this, 1)(2, 3, 4)); // 10
console.log(bind(addFourNumbers, this, 1, 2)(3, 4)); // 10
console.log(bind(addFourNumbers, this, 1, 2, 3, 4)()); // 10


/* BONUS task 6 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure! 

Flip should return a new function that when invoked takes the correct number of required arguments to that function which are then reversed. HINT - you will need to use the .length property on functions to figure out the correct amount of arguments. 
*/

function flip(fn, thisArg) {
    var outerArgs = [].slice.call(arguments, 2);
    return function () {
        var innerArgs = [].slice.call(arguments);
        var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
        return fn.apply(thisArg, allArgs.reverse());
    }
}

function personSubtract(a, b, c) {
    return this.firstName + " subtracts " + (a - b - c);
}

var person = {
    firstName: 'Elie'
}

var flipFn = flip(personSubtract, person);
console.log(flipFn(3, 2, 1)); // "Elie subtracts -4"

var flipFn2 = flip(personSubtract, person, 5, 6);
console.log(flipFn2(7, 8)); // "Elie subtracts -4"

function subtractFourNumbers(a, b, c, d) {
    return a - b - c - d;
}

console.log(flip(subtractFourNumbers, this)(1, 2, 3, 4)); // -2
console.log(flip(subtractFourNumbers, this, 11, 12, 13, 14, 15)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // -22