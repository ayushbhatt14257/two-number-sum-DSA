const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10;

// O(n^2) Time | O(1) Space 

// for (let i = 0; i < array.length; i++) {
//     const firstNum = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//         const secondNum = array[j];
//         if (firstNum + secondNum === targetSum) {
//             console.log(firstNum, secondNum);
//         }
//     }
// }

// O(n) Time | O(n) Space 

// let nums = {}
// for (let num of array) {
//     const potentaialMatch = targetSum - num;
//     if (potentaialMatch in nums) {
//         console.log(potentaialMatch, num);
//     } else {
//         nums[num] = true
//     }
// }

// O(nlog(n)) Time | O(1) Space 

array.sort((a, b) => a - b);
let left = 0;
let right = array.length - 1;

while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
        console.log(array[left], array[right]);
    } else if (currentSum < targetSum) {
        left++;
    } else {
        right--;
    }
}