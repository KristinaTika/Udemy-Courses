/* task 1
In your constructor method, you should assign two properties for each object created from the MessageBoard class. The first should be a property called messages which is an empty Map, and the second is a property called id which has a value of 1. 

Add a method called addMessage which accepts a string. The function should add a key and value to the messages map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to the function. The function should return the object created from the class so that the method can be chained. (HINT - to implement the last part, make sure to return this).

Add a method called findMessageById which accepts a number and returns the message in the messages map with the same key as the number passed to the function. If the key is not found in the messages map, the function should return undefined.

Add a method called findMessageByValue which accepts a string and returns the message in the messages map with the same value as the string passed to the function. If the value is not found in the messages map, the function should return undefined.
    
Add a method called removeMessage which accepts a number and removes a message in the messages map with a key of the number passed to the function.

Add a method called numberOfMessages which returns the number of keys in the messages map.    

Add a method called messagesToArray which returns an array of all of the values in the messages map.
*/

class MessageBoard {
    constructor(messages, id) {
        this.messages = new Map;
        this.id = 1;
    }
    addMessage(string) {
        this.messages.set(this.id, string);
        this.id++;
        return this;
    }
    findMessageById(id) {
        return this.messages.get(id)
    }
    findMessageByValue(value) {
        for (let msg of this.messages.values()) {
            if (msg === value) return msg;
        }
    }
    removeMessage(id) {
        this.messages.delete(id);
        return this;
    }
    numberOfMessages() {
        return this.messages.size;
    }
    messagesToArray() {
        return Array.from(this.messages.values())
    }
}

/* task 2
Write a function called uniqueValues which accepts an array and returns the number of unique values in the array
example : 
    uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // 6
*/

function uniqueValues(arr) {
    return new Set(arr).size
}

/* task 3
Write a function called hasDuplicates which accepts an array and returns true if there are duplicate values in the array, otherwise it should return false.
example : 
    hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // true
    hasDuplicates([1,2,3,4,5,6]) // false
    hasDuplicates([]) // false
*/

function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length
}

/* task 4
Write a function called countPairs which accepts an array of numbers and a number. The function should return the number of unique pairs (two numbers) that sum up to the number passed to the function.
example : 
    countPairs([8,2,6,4,10,0],10) // 3
    countPairs([8,2],10) // 1
    countPairs([1,2],10) // 0
    countPairs([1,2,3,4,5],10) // 0
    countPairs([],10) // 0
    countPairs([5,4,-10,6,-20,16],-4) // 2
    countPairs([0,-4],-4) // 1
*/

function countPairs(arr, num) {
    var cache = new Set(arr);
    var count = 0;
    for (let val of arr) {
        cache.delete(val)
        if (cache.has(num - val)) {
            count++
        }
    }
    return count;
}
