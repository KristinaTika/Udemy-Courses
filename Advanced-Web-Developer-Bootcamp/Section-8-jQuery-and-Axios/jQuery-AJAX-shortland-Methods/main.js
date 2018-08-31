$("#getBtn").click(() => {
    $.get("https://api.github.com/users/kristinatika")
    .done((data) => {
        console.log(data);
    })
    .fail(() => {
        console.log("Error!");
    })
});

$("#postBtn").click(() => {
    const dataToSend = {
        title: "blabla",
        body: "fsdfdfds"
    }
    $.post("https://jsonplaceholder.typicode.com/posts", dataToSend)
    .done((response) => {
        console.log(response);
    })
    .fail(() => {
        console.log("Error!");
    })
});

$("#getJSONBtn").click(() => {
    $.getJSON("https://api.github.com/users/kristinatika")
    .done((data) => {
        console.log(data);
    })
    .fail(() => {
        console.log("Error!");
    })
});