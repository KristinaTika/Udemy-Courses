const btn = document.querySelector("button");
const section = document.querySelector("#comments");

const appendComment = (comment) =>{
    const newP = document.createElement("p");
    newP.innerText = comment.email;
    section.appendChild(newP);
}

const addComments =(res) =>{
    res.data.forEach(function(comment){
    appendComment(comment);
});
}

const handleErrors = (err) => {
    if (err.response) { // axios daje mogucnost da obradimo gresku u response-u
        console.log("Problem With Response ", err.response.status);
    } else if (err.request) { // axios daje mogucnost da obradimo gresku u response-u
        console.log("Problem With Request!");
    } else {
        console.log('Error', err.message);
    }
}

const sendRequest = () =>{
    axios.get("https://json1placeholder.typicode.com/comments", {
        params: {
            postId: 1
        }
    })
    .then(addComments)
    .catch(handleErrors)
}

btn.addEventListener("click", sendRequest);


