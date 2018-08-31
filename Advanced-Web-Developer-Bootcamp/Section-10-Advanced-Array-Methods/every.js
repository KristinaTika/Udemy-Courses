// Writing my own every function

const myEvery = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
           return true;
        }
    }
    return false;
}

// primer 1

const allLowerCase = (str) => {
    return str.split("").every((value) => {
        return value === value.toLowerCase();
    });
}

console.log(allLowerCase("this is really nice."));

// primer 2

const allArrays = (arr) => {
    return arr.every(Array.isArray);
}

console.log([[1, 2], [4, 6]]);
