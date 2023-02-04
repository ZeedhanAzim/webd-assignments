/*
Name: Zeedhan Azim
program name: arraysAndCallbacks
purpose: work with different types of arrays in jquery
*/
//literal array
let a = [1, 2, 3, 4]

//array using constructor
let j = new array();


//constructor with values
let k = new Array(10, 20, 30);
console.log('3 value array: ${k}');

let m = new Array(10);
console.log('new  value array: ${m}');
m.push(88);
console.log('new value array: ${m}');
m[0] = 20;
console.log('replaced value array: ${m}');

let p = Array(10).fill('friday');
console.log('friday value array: ${p}');


function square(x) {
    return x * x;
}

let r = new Array(1, 33, 22, 5);
let newR = r.map(function (value) {
    return square(value);
})

