RotateMatrix = function(A){
    let n = A.length;
    for(let i = 0; i<n; i++){
        for(let j = i; j<i; j++){
            let temp = [i][j];
            A[i][j]=A[j][i];
            A[j][i]=temp
        }
    }
    for(let i = 0; i<n; i++ ){
        for (let j = 0; j=n/2; j++){
            let temp = A[i][j];
            A[i][j]==A[i][n-j-1];
            A[i][n-1-j]= temp;
        }
    }
};
// Test input
let input =  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
 ]

RotateMatrix(input);
console.log(input);

// Input Format
// First argument is a 2D matrix A of integers



// Output Format
// Return the 2D rotated matrix.



// Example Input
// Input 1:

//  [
//     [1, 2],
//     [3, 4]
//  ]
// Input 2:

//  [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//  ]


// Example Output
// Output 1:

//  [
//     [3, 1],
//     [4, 2]
//  ]
// Output 2:

//  [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
//  ]