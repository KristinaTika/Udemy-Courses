//Syntax
var s = new Set;
// can also be created from an array
var s2 = new Set([3,1,4,1,2,1,5]); // {3,1,4,2,5}

s.add(10); // {10}
s.add(20); // {20, 10}
s.add(10); // {20, 10}

s.size; // 2

s.has(10); // true

s.delete(20); // true

s.size; // 1

s2[Symbol.iterator]; // function(){}...
// we can use a for...of loop!