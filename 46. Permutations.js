/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    //global result
    const result = [];

    //recursive helper
    function backTrack(i,nums) {
        //base case
        if (i === nums.length) {
            result.push(nums.slice());
            return;
        }

        //recursive case
        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            backTrack(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }

    backTrack(0, nums);
    return result;
};