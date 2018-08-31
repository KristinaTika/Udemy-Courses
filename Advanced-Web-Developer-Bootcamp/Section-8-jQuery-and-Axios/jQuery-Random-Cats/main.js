const url = "http://aws.random.cat/meow";
$("#btn").click(() => {
    $.get(url)
    .done((response) => {
        $("#photo").attr("src", response.file);
    })
    .fail(() => {
        console.log("There has been an error.");
        
    })
})