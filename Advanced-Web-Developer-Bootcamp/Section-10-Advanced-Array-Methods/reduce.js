// reduce WITHOUT second parameter
const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((accumulator, nextValue) => {
    return accumulator + nextValue;
}));

// reduce WITH second parameter
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1.reduce((accumulator, nextValue) => {
    return accumulator + nextValue;
}), 10);

// primer 1

const name = ["Tim", "Matt", "Colt", "Elie"];

console.log(name.reduce((accumulator, nextValue) => {
    return accumulator += " " + nextValue;
}), "The instructors are");

// primer 2
const arr2 = [5, 4 ,1 ,4 ,5];

arr2.reduce((accumulator, nextValue) => {
    if(nextValue in accumulator) {
        accumulator[nextValue]++;
    } else {
        accumulator[nextValue] = 1;
    }

    return accumulator;
}, {})

// primer 3
const sumOddNumbers = (arr) => {
    return arr.reduce((accumulator, nextValue) => {
        if(nextValue % 2 !== 0) {
            accumulator += nextValue;
        }
        return accumulator;
    }, 0);
}

console.log(sumOddNumbers([1, 2 ,3 ,4 ,5]));

// primer 4
const createFullName = (arr) => {
    return arr.reduce((accumulator, nextValue) => {
        accumulator.push(nextValue.first + " " + nextValue.last);
        return accumulator;
    }, []);
}

console.log(createFullName([{first: "Colt", last: "Steele"}, {first: "Matt", last: "Lane"}]));
