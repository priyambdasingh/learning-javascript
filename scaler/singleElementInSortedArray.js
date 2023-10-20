function findSingleElement(A) {
    let low = 0;
    let high = A.length - 1;
    if (high === 0) return A[0];
    if (A[0] !== A[1]) return A[0];
    if (A[high] !== A[high - 1]) return A[high];
    while (low <= high) {
        let mid = (high + low) / 2;
        if (A[mid] !== A[mid + 1] && A[mid] !== A[mid - 1]) {
            return A[mid];
        }
        if (A[mid] % 2 === 0 && A[mid] === A[mid - 1]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; // Handle the case where no single element is found
}

// Example usage
const input1 = [1, 1, 7, 8, 7];
const input2 = [2, 3, 3, 2, 3, 3];

console.log(findSingleElement(input1)); // Output should be 8
console.log(findSingleElement(input2)); // Output should be -1 since there is no single element
// Problem Description
// Given a sorted array of integers A where every element appears twice except for one element which appears once, find and return this single element that appears only once.
// Elements which are appearing twice are adjacent to each other.
// NOTE: Users are expected to solve this in O(log(N)) time.
// Problem Constraints
// 1 <= |A| <= 100000
// 1 <= A[i] <= 10^9
// Input Format
// The only argument given is the integer array A.
// Output Format
// Return the single element that appears only once.
// Example Input
// Input 1:
// A = [1, 1, 7]
// Input 2:
// A = [2, 3, 3]
// Example Output
// Output 1:
//  7
// Output 2:
// 2
//  Example Explanation
// Explanation 1:
//  7 appears once
// Explanation 2:
//  2 appears once
// Expected Output
// Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
