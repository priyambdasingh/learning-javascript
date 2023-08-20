// 217. Contains Duplicate
// Example 1:


// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
var containsDuplicate = function(nums) {
    const map = {}
    for(const num of nums) {
         if(map[num]) return true
        map[num] = true
    }
    return false
};