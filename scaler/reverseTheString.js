function reverseWords(str){
    const words = str.split(' ');
    const nonEmptyWords = words.filter(word => word !== '');
    const reversedWords = nonEmptyWords.reverse();
    const reversedString = reversedWords.join(' ');
    return reversedString;
  }
  const input1 = "The sky is blue"
  const output1 = reverseWords(input1);
  console.log(output1);
//   Problem Description
// You are given a string A of size N.
// Return the string A after reversing the string word by word.
// NOTE:
// A sequence of non-space characters constitutes a word.
// Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
// If there are multiple spaces between words, reduce them to a single space in the reversed string.
// Problem Constraints
// 1 <= N <= 3 * 105
// Input Format
// The only argument given is string A.
// Output Format
// Return the string A after reversing the string word by word.
// Example Input
// Input 1:
// A = "the sky is blue"
// Input 2:
// A = "this is ib"
// Example Output
// Output 1:
// "blue is sky the"
// Output 2:
// "ib is this"    
// Example Explanation
// Explanation 1:
// We reverse the string word by word so the string becomes "blue is sky the".
// Explanation 2:
// We reverse the string word by word so the string becomes "ib is this".



// Expected Output
// Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases