/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            if (count === 1) return false
            if (nums[i + 1] > (nums[i - 1] || 0)) {
                count++;
            } else if (nums[i] < (nums[i + 2] || Infinity)) {
                count++;
                i++;
            } else return false;
        }
    }
    return true
};