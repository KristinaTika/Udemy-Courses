var arr = [3,2,4,1,5];

Math.max(arr); // NaN
// ES5
Math.max.apply(this, arr); // 5
// ES2015
Math.max(...arr); // 5

function sumValues(a,b,c){
    return a+b+c;
}

var nums = [12,15,20];
// ES5
sumValues.apply(this, nums); // 47
// ES2015
sumValues(...nums); // 47

function smallestValue(arr){
    return Math.min(...arr) 
 }
console.log(smallestValue([3,6,0,2,8]));
 