function countAmazingSubstring(s){
    const MOD = 10003;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
   let count = 0;
   const n = s.length;
    for(let i=0; i<n; i++){
        if(vowels.has(s[i])){
           count = (count + (n - i)) %MOD;
        }
    } 
    return count; 
}
const input ="abcde"
const output = countAmazingSubstring(input);
console.log(output);
// You are given a string S, and you have to find all the amazing substrings of S.
// An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).
// Input
// Only argument given is string S.
// Output
// Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.
// Constraints
// 1 <= length(S) <= 1e6
// S can have special characters
// Example
// Input
//     ABEC
// Output
//     6
// Explanation
//     Amazing substrings of given string are :
//     1. A
//     2. AB
//     3. ABE
//     4. ABEC
//     5. E
//     6. EC
//     here number of substrings are 6 and 6 % 10003 = 6.