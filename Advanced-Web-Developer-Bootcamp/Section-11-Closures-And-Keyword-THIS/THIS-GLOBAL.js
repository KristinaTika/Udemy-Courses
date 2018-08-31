// GLOBAL SCOPE
function whatIsThis() {
    return this;
}

whatIsThis();

function variablesInThis() {
    this.person = "Elie";
}

variablesInThis(); //THIS inside the function is the WINDOW
console.log(person);  // Elie

function mistake() {
    this.badIdea = "oops!";
}

mistake();
console.log(badIdea);

// koristimo "use strict" da ne bismo slucajno kreirali globalnu varijablu u funkciji
"use strict";
console.log(this); // window

function whatIsThisNow() {
    return this;
}
whatIsThisNow(); // undefined
