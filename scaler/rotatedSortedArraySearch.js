function searchInRotatedArray(A, B) {
    let low = 0;
    let high = A.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (A[mid] === B) {
            return mid;
        }

        if (A[low] <= A[mid]) {
            if (B >= A[low] && B < A[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (B > A[mid] && B <= A[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1; // B not found in the array
}

// Example usage
const input1 = [4, 5, 6, 7, 0, 1, 2, 3];
const target1 = 4;
const input2 = [9, 10, 3, 5, 6, 8];
const target2 = 8;

console.log(searchInRotatedArray(input1, target1)); // Output should be 0
console.log(searchInRotatedArray(input2, target2)); // Output should be 3

// Problem Description
// Given a sorted array of integers A of size N and an integer B, 
// where array A is rotated at some pivot unknown beforehand.

// For example, the array [0, 1, 2, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2].
// Your task is to search for the target value B in the array. If found, return its index; otherwise, return -1.
// You can assume that no duplicates exist in the array.
// NOTE: You are expected to solve this problem with a time complexity of O(log(N)).
// Problem Constraints
// 1 <= N <= 1000000
// 1 <= A[i] <= 109
// All elements in A are Distinct.
// Input Format
// The First argument given is the integer array A.
// The Second argument given is the integer B.
// Output Format
// Return index of B in array A, otherwise return -1
// Example Input
// Input 1:
// A = [4, 5, 6, 7, 0, 1, 2, 3]
// B = 4 
// Input 2:
// A : [ 9, 10, 3, 5, 6, 8 ]
// B : 5
// Example Output
// Output 1:
//  0 
// Output 2:
//  3
// Example Explanation
// Explanation 1:
// Target 4 is found at index 0 in A. 
// Explanation 2:
// Target 5 is found at index 3 in A.{
         

