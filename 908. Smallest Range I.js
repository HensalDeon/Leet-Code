/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    nums.sort((a, b) => b - a);
    let min = nums[nums.length - 1] + k, max = nums[0] - k, diff = max - min
    return diff < 0 ? 0 : diff;
};