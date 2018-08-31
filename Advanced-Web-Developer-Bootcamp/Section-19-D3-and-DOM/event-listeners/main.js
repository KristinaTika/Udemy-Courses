d3.select("h1").on("click", function() {  //dodaj event listener
    console.log("radi!");
})

d3.select("h1").on("click", null)   // iskljuci event listener

d3.select("#new-note").on("submit", function() {
    d3.event.preventDefault();
    console.log(d3.event);

    var input = d3.select("input");
    d3.select("#notes")
            .append("p")
            .classed("note", true)
            .text(input.property("value"));
    input.property("value", "");     
});

// d3.selectAll("p").remove()

var a = d3.select("p").text("New text!") 
console.log(a);
