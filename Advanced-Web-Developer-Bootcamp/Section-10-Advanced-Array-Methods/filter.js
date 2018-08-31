// Writing my own filter function
const myFilter = (arr, callback) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// primer 1
const onlyFourLetterName = (arr) => {
    return arr.filter((value) => {
        return value.length === 4;
    });
}

console.log(onlyFourLetterName(["Rusty", "Matt", "Moxie", "Colt"]));


// primer 2
const divisibleByThree = (arr) => {
    return arr.filter((value) => {
        return value % 3 === 0;
    });
}

console.log(divisibleByThree([1, 2, 3, 4, 5, 6, 7, 8, 9]));


//task 1

function filterByValue(arr, key) {
    return arr.filter(function (value) {
        return value[key];
    });
}

console.log(filterByValue([{ first: 'Elie', last: "Schoppik" }, { first: 'Tim', last: "Garcia", isCatOwner: true }, { first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele", isCatOwner: true }], 'isCatOwner'));

// task 2

function find(arr, searchValue) {
    return arr.filter(function (value) {
        return value === searchValue
    })[0];
}

console.log(find([1, 2, 3, 4, 5], 6));

// task 3

function findInObj(arr, key, searchValue) {
    return arr.filter(function (value) {
        return value[key] === searchValue
    })[0];
}

console.log(findInObj([{ first: 'Elie', last: "Schoppik" }, { first: 'Tim', last: "Garcia", isCatOwner: true }, { first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele", isCatOwner: true }], 'isCatOwner'));

// task 4
function removeVowels(str) {
    var vowels = "aeiou";
    return str.toLowerCase().split("").filter(function(value){
        return vowels.indexOf(value) === -1;
    }).join('');
}

console.log(removeVowels("KRISTINA"));

// task 5
function doubleOddNumbers(arr) {
    return arr.filter(function(value){
        return value % 2 !== 0;
    }).map(function(value){
        return value *2;
    })
}

console.log(doubleOddNumbers([1, 2, 3, 4, 5]));


