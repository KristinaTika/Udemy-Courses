function tripleAndFilter(arr) {
    return arr.map(function (value) {
        return value * 3;
    }).filter(function (value) {
        return value % 5 === 0;
    })
}
const tripleAndFilter = arr => arr.map(value => value * 3).filter(value => value % 5 === 0);

function doubleOddNumbers(arr) {
    return arr.filter(function (val) {
        return val % 2 !== 0;
    }).map(function (val) {
        return val * 2;
    })
}
const doubleOddNumbers = arr => arr.filter(value => value % 2 !== 0).map(value => value * 2);

function mapFilterAndReduce(arr) {
    return arr.map(function (val) {
        return val.firstName
    }).filter(function (val) {
        return val.length < 5;
    }).reduce(function (acc, next) {
        acc[next] = next.length
        return acc;
    }, {})
}

const mapFilterAndReduce = arr => arr.map(value => value.firstName).filter(value => value.length < 5).reduce(acc, next => acc[next] = next.length);
const mapFilterAndReduce = arr => arr.map(value => value.firstName).filter(value => value.length < 5).reduce((acc, next) => {
    acc[next] = next.length;
    return acc;
});

console.log(mapFilterAndReduce([{ firstName: "Mark" }]))

/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/

const createStudentObj = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
}

console.log( createStudentObj('Elie', 'Schoppik'));


/* 5 - Given the following code: 
Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'
*/
    
    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(() => {
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }

console.log(instructor.sayHi());