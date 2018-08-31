const button = document.querySelector("#btn");
const image = document.querySelector("#photo");

const dogHandler = () => { 
    
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            const url = JSON.parse(request.responseText).message;
            image.src = url;
        }
    }

    request.open("GET", "https://dog.ceo/api/breeds/image/random");
    request.send();
}

button.addEventListener("click", dogHandler );
