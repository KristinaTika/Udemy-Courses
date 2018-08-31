// ES5 - how it was done before
var divs = document.getElementsByTagName("div"); // returns an array-like-object
divs.reduce // undefined, since it is not an actual array
var converted = [].slice.call(divs) // convert the array-like-object into an array
converted.reduce // function reduce() { ... }

// ES2015 - new way of converting
var divs = document.getElementsByTagName("div"); 
var converted = Array.from(divs);

var firstSet = new Set([1,2,3,4,3,2,1]); // {1,2,3,4}

var arrayFromSet = Array.from(firstSet); // [1,2,3,4]
