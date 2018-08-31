// task 1
async function getMostFollowers(...usernames) {
    let url = "https://api.github.com/users/";
    let urls = usernames.map(username => $.getJSON(`${url}${username}`));
    let results = await Promise.all(urls);
    let max = results.sort((a, b) => a.followers < b.followers)[0];
    var finalResult = `${max.name} has the most followers with ${max.followers}.`;
    console.log(finalResult);
    return finalResult;
}

getMostFollowers("kristinatika", "natalijamirkovic", "barbaravasic");


// task 2
async function starWarsString(id) {
    let str = "";
    let characterData = await $.getJSON(`https://swapi.co/api/people/${id}`);
    str += `${characterData.name} is featured in `;
    let filmUrl = characterData.films[0];
    let movieData = await $.getJSON(filmUrl);
    str += `'${movieData.title}', directed by ${movieData.director} `;
    let planetUrl = movieData.planets[0];
    let planetData = await $.getJSON(planetUrl);
    str += `and it takes place on planet ${planetData.name}.`;
    console.log(str);
    return str;
}

starWarsString(1);



