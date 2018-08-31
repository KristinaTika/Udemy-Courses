// writing my own forEach function

const forEach = (array, callback) => {
    for(let i = 0; i <array.length; i++) {
        callback(array[i], i , array);
    }
}

// primer
const halfValues = (arr) => {
    const newArr = [];
    arr.forEach((val) => {
        newArr.push(val / 2);
    });

    return newArr;
}

halfValues([2, 4, 6,]);

//task 1
function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(val) {
        if(val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

console.log(onlyEvenValues([1, 2, 3, 4, 5, 6]));

// task 2
function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(val) {
        newArr.push(val * 2);
    });
    return newArr;
}

console.log(doubleValues([1, 2 ,3]));

// task 3
function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(val) {
        var letters = val[0] + val[val.length -1]; 
       newArr.push(letters ); 
    });
    return newArr;
}

console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));

// task 4
function addKeyAndValue(arr,key,value){
    var newArr = [];
    arr.forEach(function(val) {
        val[key] = value;
        newArr.push(val);
    });
    return newArr;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var newObj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter) {
        if(vowels.indexOf(letter) !== -1) {
            if(newObj[letter]) {
                newObj[letter]++;
            } else {
                newObj[letter] = 1;
            }
        }
    });
    return newObj;
}

console.log(vowelCount("Kristina"));

