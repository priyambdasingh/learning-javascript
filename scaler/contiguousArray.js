findMaxLength = function(nums){
  const map = new Map();
  let maxLen = 0;
  let sum = 0;
  map.set(0,-1);
  for(let i = 0; i < nums.length; i++){
    sum += nums[i] === 0 ? -1 : 1;
    if(map.has(sum)){
        maxLen = Math.max(maxLen, i - map.get(sum));
    }else{
        map.set(sum,1);
    }
  }
  return maxLen;
}
const nums = [0, 1, 0, 1, 0, 1];
console.log(findMaxLength(nums))
// Q2. Contiguous Array
// Solved
// feature icon
// Using hints is now penalty free
// Use Hint
// Given an array of integers A consisting of only 0 and 1.

// Find the maximum length of a contiguous subarray with equal number of 0 and 1.



// Input Format

// The only argument given is the integer array A.
// Output Format

// Return the maximum length of a contiguous subarray with equal number of 0 and 1.
// Constraints

// 1 <= length of the array <= 100000
// 0 <= A[i] <= 1
// For Example

// Input 1:
//     A = [1, 0, 1, 0, 1]
// Output 1:
//     4
//     Explanation 1:
//         Subarray from index 0 to index 3 : [1, 0, 1, 0]
//         Subarray from index 1 to index 4 : [0, 1, 0, 1]
//         Both the subarrays have equal number of ones and equal number of zeroes.

// Input 2:
//     A = [1, 1, 1, 0]
// Output 2:
//     2