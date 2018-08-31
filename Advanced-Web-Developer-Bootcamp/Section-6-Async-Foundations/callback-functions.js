function callback() {
    console.log("Coming from callback");
}

function higherOrder(fn) {
    console.log("About to call callback");
    fn(); // Callback function is invoked
    console.log("Callback has been invoked");
}

higherOrder(callback);

/////////////////////////////////////////////////

function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

function upperCaseName(name) {
    return name.toUpperCase();
}

console.log(greet("Tim", upperCaseName));

///////////////////////////////////////////////////

function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

greet("Tim", function (name) {
    return name.toUpperCase();
});

greet("Tim", function (name) {
    return name + "!!!!!";
});

////////////////////////////////////////////////////////

function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

console.log(greet("Tim", function (name) {
    return name.toUpperCase()
}));

console.log(greet("Tim", function (name) {
    return name + "!!!!!";
}));