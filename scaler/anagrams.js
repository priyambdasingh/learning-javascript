// Problem Description
// Given an array A of N strings, return all groups of strings that are anagrams.

// Represent a group by a list of integers representing the index(1-based) in the original list. Look at the sample case for clarification.

// NOTE: Anagram is a word, phrase, or name formed by rearranging the letters, such as 'spar', formed from 'rasp'.



// Problem Constraints
// 1 <= N <= 104

// 1 <= |A[i]| <= 104

// Each string consists only of lowercase characters.

// The sum of the length of all the strings doesn't exceed 107



// Input Format
// The first and only argument is an integer array A.



// Output Format
// Return a two-dimensional array where each row describes a group.

// Note:

// Ordering of the result :
// You should not change the relative ordering of the strings within the group suppose within a group containing A[i] and A[j], A[i] comes before A[j] if i < j.



// Example Input
// Input 1:

//  A = [cat, dog, god, tca]
// Input 2:

//  A = [rat, tar, art]


// Example Output
// Output 1:

//  [ [1, 4],
//    [2, 3] ]
// Output 2:

//  [ [1, 2, 3] ]

function groupAnagrams(A) {
    const anagramGroups = new Map();
    for (let i = 0; i < A.length; i++) {
        const sortedString = A[i].split('').sort().join('');
        if (anagramGroups.has(sortedString)) {
            anagramGroups.get(sortedString).push(i + 1);
        } else {
            
            anagramGroups.set(sortedString, [i + 1]);
        }
    }

   
    const result = Array.from(anagramGroups.values());

    return result;
};
const A = ["cat", "dog", "tac", "god", "act"];
const result = groupAnagrams(A);
console.log(result);
