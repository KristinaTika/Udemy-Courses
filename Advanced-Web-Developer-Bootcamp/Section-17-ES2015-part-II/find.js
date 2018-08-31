var instructors = [{name: "Elie"}, {name: "Matt"}, {name: "Tim"}, {name: "Colt"}];

instructors.find(function(val){
    return val.name === "Tim";
}); // {name: "Tim"}