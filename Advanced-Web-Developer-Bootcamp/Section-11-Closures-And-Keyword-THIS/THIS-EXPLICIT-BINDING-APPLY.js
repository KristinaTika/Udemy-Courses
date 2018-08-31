// primer 1
var nums = [5, 7, 1, 4, 2];
console.log(Math.max(nums)); // NaN
console.log(Math.max.apply(this, nums)); // 7

// primer 2
function sumValues(a, b, c) {
    return a + b +c;
}
var values = [4, 1, 2];
console.log(sumValues(values)); // 4, 1, 2undefined, undefined
console.log(sumValues.apply(this, values)); // 7

