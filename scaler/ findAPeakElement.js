function singleNumber(A) {
    let n = A.length;
    let ones = 0, twos = 0, threes = 0;
    for (let i = 0; i < n; i++) {
        // twos is a bitmask to represent the ith bit had appeared twice
        twos |= ones & A[i];
        // ones is a bitmask to represent the ith bit had appeared once
        ones ^= A[i];
        // threes is a bitmask to represent the ith bit had appeared three times
        threes = ones & twos;
        ones &= ~threes;
        twos &= ~threes;
    }
    return ones;
}
const A  = [0,0,0,1,1,1];;
const result = singleNumber(A);
console.log(result); // Output should be 4
// Problem Description
// Given an array of integers A, find and return the peak element in it.
// An array element is considered a peak if it is not smaller than its neighbors. For corner elements, we need to consider only one neighbor.
// NOTE:
// It is guaranteed that the array contains only a single peak element.
// Users are expected to solve this in O(log(N)) time. The array may contain duplicate elements.
// Problem Constraints
// 1 <= |A| <= 100000
// 1 <= A[i] <= 109
// Input Format
// The only argument given is the integer array A.
// Output Format
// Return the peak element.
// Example Input
// Input 1:
// A = [1, 2, 3, 4, 5]
// Input 2:
// A = [5, 17, 100, 11]
// Example Output
// Output 1:
//  5
// Output 2:
//  100
// Example Explanation
// Explanation 1:
//  5 is the peak.
// Explanation 2:
//  100 is the peak.
// Expected Output
// Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
