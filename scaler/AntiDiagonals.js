var diagonal = function(A){
    const l = A.length;
    const res = [];
    for (let i = 0; i < 2 * l - 1; i++) {
        const offset = i < l ? 0 : i - l + 1;
        const row = [];
        let k = 0;
        for (let j = offset; j <= i - offset; j++) {
            row.push(A[j][i - j]);
            k++;
        }
        for (let j = k; j < l; j++) {
            row.push(0);
        }
        res.push(row);
    }
    return res;
};
let A = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

let diagonalMatrix = diagonal(A);
console.log(diagonalMatrix);
// Input Format
// Only argument is a 2D array A of size N * N.


// Output Format
// Return a 2D integer array of size (2 * N-1) * N, representing the anti-diagonals of input array A.
// The vacant spaces in the grid should be assigned to 0.


// Example Input
// Input 1:
// 1 2 3
// 4 5 6
// 7 8 9
// Input 2:

// 1 2
// 3 4


// Example Output
// Output 1:
// 1 0 0
// 2 4 0
// 3 5 7
// 6 8 0
// 9 0 0
// Output 2:

// 1 0
// 2 3
// 4 0