function rotateString(A,B){
    length = A.length;
    effectiveRotations = B % length;
    if(effectiveRotations ===0 || length===0){
        return A;
    }
    splitpoint = length - effectiveRotations
    rotateString = A.slice(splitpoint)+A.slice(0,splitpoint)
    return rotateString;
}
const input1="scaler";
  B1 = 2;
  const output1 = rotateString(input1,B1)
  console.log(output1)
//   Problem Description
// Given a string A, rotate the string B times in clockwise direction and return the string.
// Problem Constraints
// 1 <= |A| <= 105
// 1 <= B <= 109
// String A consist only of lowercase characters.
// Input Format
// First and only argument is a string A.
// Output Format
// Return a string denoting the rotated string.
// Example Input
// Input 1:
//  A = "scaler"
//  B = 2
// Input 2:
//  A = "academy"
//  B = 7
// Example Output
// Output 1:
//  "erscal"
// Output 2:
//  "academy"
// Example Explanation
// Explanation 1:
//  Rotate the given string twice so the string becomes "erscal".
// Expected Output
// Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
