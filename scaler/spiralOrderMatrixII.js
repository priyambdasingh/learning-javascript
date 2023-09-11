    // module.exports = { 
    //     //param A : integer
    //     //return a array of array of integers
 generateMatrix = function(A){
       const ans = Array(A).fill().map(() => Array(A).fill(0));
            
            let count = 1;
            let r = 0, c = 0;
            while (A > 1) {
                for (let i = 1; i < A; i++) {
                    ans[r][c] = count;
                    c++;
                    count++;
                }
                for (let i = 1; i < A; i++) {
                    ans[r][c] = count;
                    r++;
                    count++;
                }
                for (let i = 1; i < A; i++) {
                    ans[r][c] = count;
                    c--;
                    count++;
                }
                for (let i = 1; i < A; i++) {
                    ans[r][c] = count;
                    r--;
                    count++;
                }
                r += 1;
                c += 1;
                A -= 2;
            }
            
            if (A === 1) {
                ans[r][c] = count;
            }
            return ans;
        },
    
    console.log(generateMatrix(1));
    console.log(generateMatrix(3));
    console.log(generateMatrix(5));
//    Q1. Spiral Order Matrix II
//    Problem Description
//    Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.
// Problem Constraints
// 1 <= A <= 1000



// Input Format
// First and only argument is integer A


// Output Format
// Return a 2-D matrix which consists of the elements added in spiral order.



// Example Input
// Input 1:

// 1
// Input 2:

// 2
// Input 3:

// 5


// Example Output
// Output 1:

// [ [1] ]
// Output 2:

// [ [1, 2], 
//   [4, 3] ]
// Output 2:

// [ [1,   2,  3,  4, 5], 
//   [16, 17, 18, 19, 6], 
//   [15, 24, 25, 20, 7], 
//   [14, 23, 22, 21, 8], 
//   [13, 12, 11, 10, 9] ]


// Example Explanation
// Explanation 1:

// Only 1 is to be arranged.
// Explanation 2:

// 1 --> 2
//       |
//       |
// 4<--- 3
// Explanation 3:





// Expected Output
// Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
