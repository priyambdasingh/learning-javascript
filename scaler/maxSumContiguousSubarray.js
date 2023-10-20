
function maxSubarraySum(A) {
    let maxSum = A[0];
    let currentSum = A[0];
  
    for (let i = 1; i < A.length; i++) {
      currentSum = Math.max(A[i], currentSum + A[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  // Example usage:
  const input1 = [1, 2, 3, 4, -10];
  console.log(maxSubarraySum(input1)); // Output: 10
  
  const input2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSubarraySum(input2)); // Output: 6
//   User
// Problem Description
// Find the maximum sum of contiguous non-empty subarray within an array A of length N.
// Problem Constraints
// 1 <= N <= 1e6
// -1000 <= A[i] <= 1000
// Input Format
// The first and the only argument contains an integer array, A.
// Output Format
// Return an integer representing the maximum possible sum of the contiguous subarray.
// Example Input
// Input 1:
//  A = [1, 2, 3, 4, -10] 
// Input 2:
//  A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 
// Example Output
// Output 1:
//  10 
// Output 2:
//  6 
// Example Explanation
// Explanation 1:
//  The subarray [1, 2, 3, 4] has the maximum possible sum of 10. 
// Explanation 2:
//  The subarray [4,-1,2,1] has the maximum possible sum of 6. 
// Expected Output
// Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases