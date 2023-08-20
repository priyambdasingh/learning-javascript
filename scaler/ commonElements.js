var CommonElements = function(A, B) {
    let result = [];

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                result.push(A[i]);
                break; // If you want to find all common elements, remove this line
            }
        }
    }

    return result;
};

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];

const commonElements = CommonElements(arrayA, arrayB);
console.log(commonElements);




// Input Format
// First argument is an integer array A of size N.

// Second argument is an integer array B of size M.



// Output Format
// Return an integer array denoting the common elements.



// Example Input
// Input 1:

//  A = [1, 2, 2, 1]
//  B = [2, 3, 1, 2]
// Input 2:

//  A = [2, 1, 4, 10]
//  B = [3, 6, 2, 10, 10]


// Example Output
// Output 1:

//  [1, 2, 2]
// Output 2:

//  [2, 10]


// Example Explanation
// Explanation 1:

//  Elements (1, 2, 2) appears in both the array. Note 2 appears twice in both the array.
// Explantion 2:

//  Elements (2, 10) appears in both the array.