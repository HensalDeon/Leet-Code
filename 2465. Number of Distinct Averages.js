/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    nums.sort((a, b) => b - a);
    let s = new Set();
    let len = nums.length - 1, i = 0;
    while(i < len/2){
        s.add((nums[i] + nums[len-i])/2);
        i++
    }
    return s.size;
};