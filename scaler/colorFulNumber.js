isColorfulNumber = function(number){
   const numStr = number.toString();
   const digitSet = new Set();
   for(let i = 0; i < numStr.length; i++){
       let product = 1;
       for (let j = i; j < numStr.length; j++){
        product *= parseInt(numStr[j]);
        if (digitSet.has(product)){
            return 0;
        }
        digitSet.add(product);
       }

   }
   return 1;
}
console.log(isColorfulNumber(3245)); 
console.log(isColorfulNumber(123));
// Q1. Colorful Number

// Problem Description
// Given a number A, find if it is COLORFUL number or not.

// If number A is a COLORFUL number return 1 else, return 0.

// What is a COLORFUL Number:

// A number can be broken into different consecutive sequence of digits. 
// The number 3245 can be broken into sequences like 3, 2, 4, 5, 32, 24, 45, 324, 245 and 3245. 
// This number is a COLORFUL number, since the product of every consecutive sequence of digits is different


// Problem Constraints
// 1 <= A <= 2 * 109



// Input Format
// The first and only argument is an integer A.



// Output Format
// Return 1 if integer A is COLORFUL else return 0.



// Example Input
// Input 1:

//  A = 23
// Input 2:

//  A = 236


// Example Output
// Output 1:

//  1
// Output 2:

//  0