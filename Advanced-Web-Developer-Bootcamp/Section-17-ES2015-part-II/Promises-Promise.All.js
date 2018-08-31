function displayAtRandomTime() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.5) {
                resolve('Yes!');
            } else {
                reject('No!');
            }
        }, 1000);
    });
}

displayAtRandomTime().then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log(error);
});

var years = [];
$.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb')
    .then(function (movie) {
        years.push(movie.Year);
        return $.getJSON('https://omdbapi.com?t=shrek&apikey=thewdb');
    })
    .then(function (movie) {
        years.push(movie.Year);
        console.log(years);
    })

console.log('ALL DONE!');

// "ALL DONE!"
// ["1997", "2001]


//Promise.All
function getMovie(title) {
    return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

var eliePromise = getMovie('titanic');
var tigarciaPromise = getMovie('shrek');
var coltPromise = getMovie('braveheart');

Promise.all([eliePromise, tigarciaPromise, coltPromise]).then((movies) => {
    console.log(movies);
    
    return movies.forEach((value) => {
        console.log(value.Year);
    });
});

// 1997
// 2001
// 1995