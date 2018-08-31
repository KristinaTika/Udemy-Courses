//setTimeout - clearTimeout

var timerId = setTimeout(function () {
    console.log("This function runs in 30 seconds");
}, 30000);

setTimeout(function () {
    console.log("Canceling the first setTimeout", timerId);
    clearTimeout(timerId);
}, 2000);


//setInterval - clearInterval

var num = 0;
setInterval(function () {
    num++;
    console.log("num:", num);
}, 1000);

var num = 0;
var intervalId = setInterval(function () {
    num++;
    console.log("num:", num);
    if (num === 3) {
        clearInterval(intervalId);
    }
}, 1000);


//Homework

function countDown(time) {
    var timer = setInterval(function () {
        time--;
        if (time !== 0) {
            console.log("Time remain: ", time);
        }
        if (time === 0) {
            console.log("Ring Ring Ring!!!");

            clearInterval(timer);
        }
    }, 1000);
}