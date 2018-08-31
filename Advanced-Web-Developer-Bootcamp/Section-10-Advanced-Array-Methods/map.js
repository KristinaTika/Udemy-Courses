// Writing my own map function

const myMap = (arr, callback) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
}

// primer 1
const tripleValues = (arr) => {
    return arr.map(function(value) {
        return value * 3;
    });
}

console.log(tripleValues([1, 2, 3]));

// primer 2
const onlyFirstName = (arr) => {
    return arr.map(function(value) {
        return value.first;
    });
}

console.log(onlyFirstName([{first: "Tim", last: "Garcia"}, {first: "Matt", last: "Lane"} ]));

// task 1
function doubleValues(arr){
    return arr.map(function(value) {
       return value * 2; 
    });
}
console.log(doubleValues([1, 2, 3]));

//task 2
function valTimesIndex(arr){
    return arr.map(function(value, index) {
       return value * index;
    });
}

console.log(valTimesIndex([1, 2, 3]));

// task 3

function extractKey(arr, key) {
    return arr.map(function(value) {
      return value[key];
  });
}

console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));

// task 4
function extractFullName(arr) {
    
    return arr.map(function(value) {
        var concatenatedNames = value.first + " " + value.last;
        return concatenatedNames; 
    });
}

console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));
