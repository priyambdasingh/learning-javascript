function countBobOccurences(A){
    const target = "bob"
    let count = 0;
    for(let i = 0; i<=A.length-3; i++){
        const substring = A.substring(i,i+3);
        if(substring === target){
            count++;
        }
    }
    return count;
}
const input = "abobc"
console.log(countBobOccurences(input));
// Problem Description
// Find the number of occurrences of bob in string A consisting of lowercase English alphabets.
// Problem Constraints
// 1 <= |A| <= 1000
// Input Format
// The first and only argument contains the string A, consisting of lowercase English alphabets.
// Output Format
// Return an integer containing the answer.
// Example Input
// Input 1:
//   "abobc"
// Input 2:
//   "bobob"
// Example Output
// Output 1:
//   1
// Output 2:
//   2
// Example Explanation
// Explanation 1:
//   The only occurrence is at second position.
// Explanation 2:
//   Bob occures at first and third position.
// Expected Output
// Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
