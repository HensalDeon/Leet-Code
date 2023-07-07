/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    nums.unshift(0)
    let curSum = nums[0];
    let maxSum = Number.MIN_VALUE;
    if (nums.length == 1) return nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            curSum = curSum + nums[i];
        } else {
            curSum = 0;
            curSum = curSum + nums[i]
        }
        maxSum = Math.max(curSum, maxSum);
    }
    return maxSum

};