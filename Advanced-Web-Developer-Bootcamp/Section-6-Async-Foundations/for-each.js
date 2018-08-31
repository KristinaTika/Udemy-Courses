//Bez forEach metode
var arr = [1, 2, 3, 4, 5, 6];
function double(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] * 2);
    }
}
console.log(double(arr));

/////////////////////////////////////

function forEach(arr, callback) {
    for (var i = 0; i <arr.length; i++) {
        callback(arr[i], i, arr);
    }
}