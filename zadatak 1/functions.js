function random(min, max) {

    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (typeof min !== "number" || typeof max !== "number") {
        return "Min and max have to be numbers!";
    }

    return randomNumber;
}

console.log(random(1, "2"));
console.log(random(1, 2));


function minIntegerFromArray(array) {

    if (array.length <= 5) {
        return "An array must have at least 6 elements!";
    }

    var filteredArray = array.filter(function (el) {
        return typeof el === "number";
    })

    if (filteredArray.length === 0) {
        return false;
    }

    for (var i = 0; i < filteredArray.length; i++) {
        var minNumber = filteredArray[0];

        if (filteredArray[i] < minNumber) {
            minNumber = filteredArray[i];
        }
    }

    return minNumber;
}

var array = ['2', '3', '4', '6', '7', '8'];
var array1 = ['2', '4', '6', 7, '8'];
var array2 = ['2', '4', '6', '7', '8', [3, 4, 6]];
var array3 = [0, 4, '6', '7', 8, 3];

console.log(minIntegerFromArray(array3));

function minIntegerFromString(string) {

    if (string.length < 10) {
        return " A string has to be at least 10 characters long!";
    }

    var splitArray = string.split(" ");

    var numbersArray = splitArray.filter(function (el) {
        return parseFloat(el);
    });

    var newArray2 = [];
    for (var i = 0; i < numbersArray.length; i++) {
        newArray2.push(parseInt(numbersArray[i]));
    }

    for (var i = 0; i < newArray2.length; i++) {
        var minNumber = newArray2[0];

        if (newArray2[i] < minNumber) {
            minNumber = newArray2[i];
        }
    }

    return minNumber;
}

console.log(minIntegerFromString('Danas, 17tog Septembra, bice hladnije nego juce u 20h, 19og Septembra'));

function concatStringsByLength(arrayOfStrings, type = 0 || 1) {

    var result = "";
    var inputArr = [];

    for (var i = 0; i < arrayOfStrings.length; i++) {
        inputArr[i] = arrayOfStrings[i];
    }

    switch (type) {
        case 0:
            for (var i = 0; i < inputArr.length; i++) {
                var position = i;
                for (var j = i; j < inputArr.length; j++) {
                    if (inputArr[j].length < inputArr[position].length) {
                        position = j;
                    }
                }
                var tmp = inputArr[i];
                inputArr[i] = inputArr[position];
                inputArr[position] = tmp;
                result += inputArr[i];
            }
            return result;
            break;

        case 1:
            for (var i = 0; i < inputArr.length; i++) {
                var position = i;
                for (var j = i; j < inputArr.length; j++) {
                    if (inputArr[j].length > inputArr[position].length) {
                        position = j;
                    }
                }
                var tmp = inputArr[i];
                inputArr[i] = inputArr[position];
                inputArr[position] = tmp;
                result += inputArr[i];
            }
            return result;

        default:
            return "Type has to be number 0 or number 1!";
    }
}

console.log(concatStringsByLength(['Abc', 'Ac', 'Bdca', 'Edagas'], 0));


