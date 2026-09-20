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

/* 
function characterCount(str) {
    const result = {};

    str = str.toLowerCase();

    for(let char of str) {
        if(result[char]) {
            result[char] ++
        } else {
            result[char] = 1
        }
    }

    return result
}


console.log(characterCount("JavaScriptPhytonppppp"));

*/

// 3. একটি string দেওয়া থাকবে। তোমাকে প্রথম এমন character বের করতে হবে, যেটি পুরো string-এ মাত্র একবার এসেছে। ( First Unique Character in a String )

/* 
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
*/ 


// 4.  দুটি string দেওয়া থাকবে। Check করতে হবে তারা Anagram কিনা। Anagram মানে character একই হবে, শুধু order আলাদা হতে পারে।

/* 
function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1.length !== str2.length) {
        return false
    }

    const result = {};

    for(let char of str1){
        result[char] = (result[char] || 0) + 1;
    }

    for(let char of str2) {
        if(!result[char]) {
            return false
        }

        result[char]--
    }

    return true
}

console.log(isAnagram("orko", "OkRo"));

*/

// 5. একটি array দেওয়া থাকবে। তোমাকে সব 0-কে array-এর শেষে move করতে হবে।

/*
function modeZero(nums) {
    let index = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    for(let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums
}

console.log(modeZero([0, 2, 3, 0, 5]))
*/



// 6. একটি sorted array দেওয়া থাকবে। তোমাকে duplicate value গুলো remove করে unique values রেখে দিতে হবে।

/*
function removeDuplicateNumbers(nums) {
    let count = 0;

    for(let i = 1; i < nums.length; i++) {
       if( nums[count] !== nums[i]) {
            count ++
            nums[count] = nums[i]
       }
    }

    // return count + 1;
    return nums.slice(0, count + 1);
}

console.log(removeDuplicateNumbers([1, 1, 2, 2, 3, 4, 4, 5]));
*/


// 7. একটি array দেওয়া থাকবে যেখানে প্রতিটি element একটি দিনের stock price। তোমাকে একবার buy এবং একবার sell করে সর্বোচ্চ profit বের করতে হবে।

const prices = [7, 1, 5, 3, 6, 4];

function proft(todayRate) {
    let min_price = todayRate[0];
    let maxDiffrence = 0;

    for(let i = 0; i < todayRate.length; i++) {
        let currentPrice = todayRate[i];

        if(currentPrice < min_price) {
            min_price = currentPrice
        } else {
            let currentDiffrence = currentPrice - min_price;

            if(currentDiffrence > maxDiffrence) {
               maxDiffrence = currentDiffrence
            }
        }
    }

    return maxDiffrence
}

console.log(proft([7, 1, 5, 3, 6, 4, 8, 20]))