const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const responseHandler = (response) => {

    if (!response.ok) {
        throw Error(response.status);
    }
    return response;
}

fetch(url)
    .then(responseErrorHandler)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log("There was an error!")
    });
