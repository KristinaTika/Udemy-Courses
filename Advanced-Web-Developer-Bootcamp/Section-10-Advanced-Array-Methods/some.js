// Writing my own some function

const mySome = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
           return true;
        }
    }
    return false;
}

// primer 1
const hasEvenNumber = (arr) => {
    return arr.some((value) => {
        return value % 2 === 0;
    });
}

console.log(hasEvenNumber([1, 2, 3 ,4]));

// primer 2
const hasComma = (str) => {
    return str.split("").some((value) => {
        return value === ",";
    });
}

console.log(hasComma("This is wonderful,"));
