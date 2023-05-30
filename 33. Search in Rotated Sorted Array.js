let nums = [4, 5, 6, 7, 0, 1, 2];

let target = 0;
var search = function (nums, target) {
    const arr = [...nums];
    nums.sort((a, b) => {
        return a - b;
    });
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === nums[middleIndex]) {
            console.log(arr);
            return arr.indexOf(nums[middleIndex]);
        }

        if (target < nums[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
};

