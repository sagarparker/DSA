// Check if number in two array add up to a given number

const array1 = [2,40,3,1,9]
const array2 = [9,4,6,8,50]

// O(n^2) solution

// function sumOfTwo(arr1,arr2,sumOfTwoNumbers){
//     for(let i = 0; i<arr1.length; i++){
//         if(arr2.includes(sumOfTwoNumbers-arr1[i])){
//             return true;
//         }
//     }
//     return false;
// }

// console.log("\nOutput:")
// console.log(sumOfTwo(array1,array2,100));



// O(n) solution

function sumOfTwo(arr1,arr2,sumOfTwoNumbers){
    let ledger = {}
    for(let i = 0; i<arr1.length; i++){
        if(!ledger[arr1[i]]){
            ledger[sumOfTwoNumbers - arr1[i]] = arr1[i]
        }
    }
    for(let j=0;j<arr2.length; j++){
        if(ledger.hasOwnProperty(arr2[j])){
            return true
        }
    }
    return false
}

console.log("\nOutput:")
console.log(sumOfTwo(array1,array2,9));

