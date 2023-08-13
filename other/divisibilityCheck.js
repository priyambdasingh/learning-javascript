
// 1. Create a function 'divisibilityCheck' which takes a number as input and prints if it is divisible by 3 , divisible by 5 or divisible by both 3 and 5.
// Ex.	
// Input:	9
// Output:     Is divisible  by 3

// Input: 	10
// Output: 	Is divisible by 5

// Input:	15
// Output:	Is divisible by both 3 and 5
function divisibilityCheck(nums){
if(nums%3==0 && nums%5==0){
    console.log( nums +  " Is divisible by both 3 and 5")
}else if (nums%3==0){
    console.log(nums + " Is divisible  by 3")
}else if (nums%5==0){
    console.log(nums + " Is divisible  by 5")
}
};
divisibilityCheck(15)
divisibilityCheck(9)
divisibilityCheck(10)
