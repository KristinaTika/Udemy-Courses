// Gather remaining (rest) of keys and values in an object and create a new one out of them.

var instructor = { first: "Elie", last: "Schoppik", job: "Instructor", numSiblings: 3 };
var { first, last, ...data } = instructor
first; // "Elie"
last; // "Schoppik"
data; // { job: "Instructor", numSiblings: 3 }