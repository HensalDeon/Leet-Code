/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let max = 0, curr = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            curr++;
            max = Math.max(max, curr);
        } else {
            curr = 0;
        }
    }

    return max > 0 ? max + 1 : 1;
};