const button = document.querySelector("#button");
const span = document.querySelector("#bitcoin-value");
const eur = document.querySelector("#eur");
const usd = document.querySelector("#usd");
const gbp = document.querySelector("#gbp");

let chosenCurrency = "";

const currencyHandler = (event) => {

    if (event.target.value === "EUR") {
        chosenCurrency = event.target.value;
    } else if (event.target.value === "USD") {
        chosenCurrency = event.target.value;
    } else if (event.target.value === "GBP") {
        chosenCurrency = event.target.value;
    }
}

window.addEventListener("click", currencyHandler);

const bitcoinHandler = (event) => {

    const request = new XMLHttpRequest();
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    if (chosenCurrency === "EUR") {
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText).bpi.EUR;
                const rate = data.rate;
                span.textContent = `${rate} ${chosenCurrency}`;
            }
        }
    } else if (chosenCurrency === "USD") {
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText).bpi.USD;
                const rate = data.rate;
                span.textContent = `${rate} ${chosenCurrency}`;
            }
        }
    } else {
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText).bpi.GBP;
                const rate = data.rate;
                span.textContent = `${rate} ${chosenCurrency}`;
            }
        }
    }

    request.open("GET", url);
    request.send();
}

button.addEventListener("click", bitcoinHandler);

