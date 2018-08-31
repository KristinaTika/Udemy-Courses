const xhrBtn = document.querySelector("#xhr");
const fetchBtn = document.querySelector("#fetch");
const axiosBtn = document.querySelector("#axios");
const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
let quote = document.querySelector("#quote");


// XML request

const xhrHandler = () => {

    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            quote.textContent = data;
        }
    }

    request.open("GET", url)
    request.send();
}

xhrBtn.addEventListener("click", xhrHandler);

////////////////////////////////////////////

//Fetch request

const fetchResponseHandler = (response) => {

    if (!response.ok) {
        throw Error(response.status);
    }
    return response.json();
}

const parseJSON = (response) => {
    return response.json()
}

const updateParagraph = (response) => {
    quote.textContent = response;
}

const printError = (error) => console.log("There was an error!");

const fetchHandler = () => {
    fetch(url)
        .then(fetchResponseHandler)
        .then(updateParagraph)
        .catch(printError)
}

fetchBtn.addEventListener("click", fetchHandler);

/////////////////////////////////////////////////////////////////////////////

//jQuery request

const addParagraph = (response) => {
    $("#quote").text(response[0]);
}

$("#jquery").click(() => {
    $.ajax({
        method: "GET",
        url: url,
        dataType: "json"
    })
        .done(addParagraph)
        .fail(() => {
            alert("Oh no! Failed to fetch!");
        })
})

/////////////////////////////////////////////////////////////////////////////

//Axios request

const handleErrors = (err) => {
    if (err.response) {
        console.log("Problem With Response ", err.response.status);
    } else if (err.request) {
        console.log("Problem With Request!");
    } else {
        console.log('Error', err.message);
    }
}

const axiosHandler = () => {
    axios.get(url)
        .then((response) => {
            quote.textContent = response.data[0];
        })
        .catch(handleErrors)
}

axiosBtn.addEventListener("click", axiosHandler);