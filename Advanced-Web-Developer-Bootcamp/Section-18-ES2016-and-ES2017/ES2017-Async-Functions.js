// primer 1
async function getMovieData(){
    var titanicPromise = $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
    var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);

    var titanicData = await titanicPromise;
    var shrekData = await shrekPromise;

    console.log(titanicData);
    console.log(shrekData);
}

getMovieData();

// primer 2
var movieCollector = {
    data: "titanic",
    async getMovie() {
        var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
        console.log(response);
    }
}

movieCollector.getMovie();

// primer 3
class MovieData {
    constructor(name) {
        this.name = name;
    }
    async getMovie() {
        var response = await $.getJSON(`https://omdbapi.com?t=${this.name}&apikey=thewdb`);
        console.log(response);
    }
}

var m = new MovieData('shrek');
m.getMovie();

// primer 4 HANDLING ERRORS
async function getUser(user) {
    try {
        var response = await $.getJSON(`https://api.github.com/users/${user}`);
        console.log(response.name);
    } catch (e) {
        console.log("User does not exist!");
    }
}

//Await with Promise.all
async function getMovieData(first, second){
    var moviesList = await Promise.all([
        $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
        $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`) 
    ]);
    console.log(moviesList[0].Year);
    console.log(moviesList[1].Year);
}

getMovieData('shrek', 'blade'); 

// 2001
// 1998

