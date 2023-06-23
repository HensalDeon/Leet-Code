/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // nums.sort((a,b)=>{
    //     return b - a;
    // })
    let largest = -Infinity;
    let seclarg = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            seclarg = largest;
            largest = nums[i];
        } else if (nums[i] > seclarg)
            seclarg = nums[i];
    }
    return (largest - 1) * (seclarg - 1);

};