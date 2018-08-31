var instructors = [{name: "Elie"}, {name: "Matt"}, {name: "Tim"}, {name: "Colt"}];

instructors.findIndex(function(val){
    return val.name === "Tim";
}); // 2

