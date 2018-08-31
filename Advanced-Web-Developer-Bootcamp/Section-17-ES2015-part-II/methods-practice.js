/* task 1
Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.
*/

function copyObject(obj) {
    return Object.assign({}, obj);
}

/* task 2
Write a function called checkIfFinite which accepts one parameter and returns true if that parameter is a finite number.
*/

function checkIfFinite(value) {
   return Number.isFinite(value) ;
 
}


/* task 3
Write a function called areAllNumbersFinite which accepts an array and returns true if every single value in the array is a finite number, otherwise return false.
*/

function areAllNumbersFinite(array) {
    return array.every(Number.isFinite);
}

/* task 4
Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. The function should return the array like object converted to an array.
*/

function convertArrayLikeObject(obj) {
    return Array.from(obj);
}

/* task 5
Write a function called displayEvenArguments which accepts a variable number of arguments and returns a new array with all of the arguments that are even numbers.
*/

function displayEvenArguments() {
    return Array.from(arguments).filter(val => val % 2 === 0);
}



