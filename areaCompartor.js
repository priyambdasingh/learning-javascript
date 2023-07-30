
// 2. Write a function 'areaCompartor' which takes 2 number as input which are sides of square and returns the area of square that has more area.
// Ex.
// Input: areaCompartor(4,5)
// Output: 25

// Input: areaCompartor(6,5)
// Output: 36
function areaCompartor(side1,side2){
var area1 = side1 **2;
var area2 = side2 **2;
if (area1>area2){
    return area1;
}else {
    return area2;
}
};
