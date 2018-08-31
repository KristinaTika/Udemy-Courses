// Destructuring Objects
var instructor = {
    firstName: "Elie",
    lastName: "Schoppik"
}

var {firstName, lastName} = instructor;

firstName; // "Elie"
lastName; // "Schoppik"

// menjamo imena propertijima u objektu
var instructor = {
    firstName: "Elie",
    lastName: "Schoppik"
}

var {firstName:first, lastName:last} = instructor;

first; // "Elie"
last; // "Schoppik"

function createInstructor({name = {first:"Matt", last:"Lane"}, isHilarious=false } = {}){
    return [name.first, name.last, isHilarious];
}


function displayInfo(obj) {
    return [obj.name, obj.favColor];
}

var instructor = { 
    name: "Elie",
    favColor: "Purple"
};

displayInfo(instructor); // ["Elie", "Purple"]


function displayInfo({name,favColor}) {
    return [name, favColor];
}
var instructor = { 
    name: "Elie",
    favColor: "Purple"
};

displayInfo(instructor); // ["Elie", "Purple"]


// Destructuring Arrays

//swapping values
// ES2015
function swap(a,b){
    return [a,b] = [b,a];
}

swap(10,5); // [5,10]