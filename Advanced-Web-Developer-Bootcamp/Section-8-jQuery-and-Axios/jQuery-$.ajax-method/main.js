const addParagraph = (response) => { 
    $("p").text(response[0]);
}

$("#btn").click(() => {
    $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler",
       dataType: "json" 
    })
    .done(addParagraph) // ne moramo vise da radimo JSON.parse(response) !
    .fail(() => {
        alert("Oh no! Failed to fetch!");
    })
});