/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    let sum = 0;
    let count = 0

    nums.sort((a, b) => {
        return b - a;
    })
    let val = nums[0]
    while (count < k) {
        sum = sum + val;
        count++;
        val++;
    }
    return sum;
};