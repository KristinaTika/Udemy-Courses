var firstMap = new Map;

firstMap.set(1, 'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice'); // true
// firstMap.size(); // 2

var arrayKey = [];
firstMap.set(arrayKey, [1,2,3,4,5]);

var objectKey = {};
firstMap.set(objectKey, {a:1});

//Extracting values
firstMap.get(1); // 'Elie'
firstMap.get(false); // 'a boolean'
firstMap.get(arrayKey); // [1,2,3,4,5]
firstMap.get(objectKey); // {a:1}

//Iteration over a map
firstMap.forEach(v => console.log(v));
// Elie
// a boolean
// [1,2,3,4,5]
// {a:1}


//Iteration over a map
firstMap.values(); // MapIterator of values
firstMap.keys(); // MapIterator of keys