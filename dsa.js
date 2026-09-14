// 1. Problem: Find the Second Largest Number
// const numbers = [10, 5, 8, 20, 15];
// output: 15

/* const numbers = [5, 5, 8, 24, 25];

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

console.log(secLargets);   
*/


// 2. একটি string দেওয়া আছে। তোমাকে বের করতে হবে কোন character কতবার এসেছে।
// function characterCount(str) {
//     const result = {};

//     str = str.toLowerCase();

//     for(let char of str) {
//         if(result[char]) {
//             result[char] ++
//         } else {
//             result[char] = 1
//         }
//     }

//     return result
// }


// console.log(characterCount("JavaScriptPhytonppppp"));


// একটি string দেওয়া থাকবে। তোমাকে প্রথম এমন character বের করতে হবে, যেটি পুরো string-এ মাত্র একবার এসেছে। ( First Unique Character in a String )
function firstCharacter(fc) {
    const count = {};

    for(let char of fc) {
        count[char] = (count[char] || 0) + 1
    }

    for(let i = 0; i < fc.length; i++) {
        if(count[fc[i]] === 1) {
            return fc[i];
        }
    }

    return null
}


console.log(firstCharacter("orko okro Ehasun orko"))
