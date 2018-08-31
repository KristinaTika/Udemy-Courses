// ES5
var o = { name: "Elie" };
var o2 = o;

o2.name = "Tim";
console.log(o.name); // "Tim"
console.log(o2.name); // "Tim"

// ES2015
var o = { name: "Elie" };
var o2 = Object.assign({}, o);
o2.name = "Tim";
console.log(o.name); // "Elie"
console.log(o2.name); // "Tim"


// NOT A DEEP CLONE - if there is another object nested inside an object, the reference stays the same
// ES2015
var o = {instructors: ["Elie", "Tim"]};
var o2 = Object.assign({},o);

o2.instructors.push("Colt");
console.log(o.instructors); // ["Elie", "Tim", "Colt"];
