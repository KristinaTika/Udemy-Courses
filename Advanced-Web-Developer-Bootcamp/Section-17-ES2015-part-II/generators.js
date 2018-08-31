function* pauseAndReturnValues(num) {
    for (let i = 0; i < num; i++) {
        yield i;
    }
}

var gen = pauseAndReturnValues(5);

gen.next(); // {value: 0, done: false}
gen.next(); // {value: 1, done: false}
gen.next(); // {value: 2, done: false}
gen.next(); // {value: 3, done: false}
gen.next(); // {value: 4, done: false}
gen.next(); // {value: undefined, done: true}


// Iterating over a generator
// Since generators implement a Symbol.iterator property we can use a for...of loop!
function* pauseAndReturnValues1(num){
    for(let i = 0; i < num; i++){
	yield i;
    }
}

for(i of pauseAndReturnValues1(3)){
    console.log(i);
}

// 0
// 1
// 2

// Async Generators
// We can use generators to pause asynchronous code!

function* getMovieData(movieName){
    console.log('starting')
    yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);
    console.log('ending')
}

// The next value returned is a promise so let's resolve it!

var movieGetter = getMovieData('titanic')
movieGetter.next().value.then(val => console.log(val));
