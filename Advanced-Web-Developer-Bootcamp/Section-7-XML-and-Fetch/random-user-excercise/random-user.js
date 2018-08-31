const button = document.querySelector("#btn");
const photo = document.querySelector("#avatar");
const name = document.querySelector("#fullname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const city = document.querySelector("#city");
const url = "https://randomuser.me/api/";

const responseErrorHandler = (response) => {

    if (!response.ok) {
        throw Error(response.status);
    }
    return response;
}

const parseJSON = (response) => {
    return response.json()
}

const updateProfile = (response) => {
    let data = response.results[0];
    photo.src = data.picture.medium;
    name.textContent = data.name.first + " " + data.name.last;
    username.textContent = data.login.username;
    email.textContent = data.email;
    city.textContent = data.location.city;
}

const printError = (error) => console.log("There was an error!");

const randomUserHandler = () => {
    fetch(url)
        .then(responseErrorHandler)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError)   
}

button.addEventListener("click", randomUserHandler);