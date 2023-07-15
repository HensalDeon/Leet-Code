var averageValue = function (nums) {
    let sum = 0;
    let count = 0
    nums.forEach(val => {
        if (val % 2 === 0 && val % 3 === 0) {
            sum = sum + val;
            count++;
        }
    })
    return sum == count? sum : Math.floor(sum/count);
};