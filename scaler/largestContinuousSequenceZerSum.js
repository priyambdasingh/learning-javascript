var Iszero = function(A) {
    let result = [];

    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] + A[j] === 0) {
                result.push([A[i], A[j]]);
            }
        }
    }

    return result;
};

const IszeroA = [1, 2, -2, 4, -4];
const zeroSumPairs = Iszero(IszeroA);
console.log(zeroSumPairs);
// Input Format
// Single argument which is an integer array A.



// Output Format
// Return an array denoting the longest continuous sequence with total sum of zero.

// NOTE : If there are multiple correct answers, return the sequence which occurs first in the array.



// Example Input
// A = [1,2,-2,4,-4]


// Example Output
// [2,-2,4,-4]


// Example Explanation
// [2,-2,4,-4] is the longest sequence with total sum of zero.



// Expected Output
// Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
