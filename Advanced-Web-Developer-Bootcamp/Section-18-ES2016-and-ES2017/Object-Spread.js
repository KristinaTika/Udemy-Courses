var instructor = {first:"Elie", last:"Schoppik", job:"Instructor"};
var instructor2 = {...instructor, first:"Tim", last:"Garcia"};

var defaults = {job: "Instructor", ownsCat:true, ownsDog: true};
var matt = {...defaults, ownsCat: false};
var colt = {...defaults, ownsDog: false};