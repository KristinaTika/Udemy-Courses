const pageTitle = d3.select("#page-title")
                    .style("background-color", "cyan")
                    .style("color", "white")
                    .attr("class", "new-class")
                    .classed("new-class", true)
                    .text("D3 is cool!")
                    .html("<div>Moj novi div </div>");
console.log(pageTitle);

const li = d3.selectAll("li");
console.log(li);

const lis = d3.selectAll("li").nodes();
console.log(lis);

const singleLi = d3.selectAll("li").node();
console.log(singleLi);

d3.selectAll("li")
    .style("font-size", function() {
        return Math.random() * 40 + "px";
    })
 
d3.selectAll("li")
.style("background-color", function(_, idx) {
    return idx % 2 === 0 ? "lightgrey" : "white";
})

d3.select(".outer")
        .style("color", "purple")
    .select("div")
        .style("font-size", "30px")
        .style("background-color", "orange")
    .select("div")
        .style("border", "5px solid blue")