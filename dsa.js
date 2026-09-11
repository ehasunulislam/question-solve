// 1. Problem: Find the Second Largest Number
// const numbers = [10, 5, 8, 20, 15];
// output: 15

const numbers = [5, 5, 8, 24, 25];

let largest = -Infinity;
let secLargets = -Infinity;

for(const num of numbers) {
    if(num > largest) {
        secLargets = largest;
        largest = num;
    } else if(num > secLargets && num !== largest) {
        secLargets = num
    }
}

console.log(secLargets)