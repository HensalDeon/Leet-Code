/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        
        product = product * nums[i];
    }
    return signFunc(product)

};
function signFunc(product) {
    if (product > 0) {
        return 1;
    } else if (product< 0) {
        return -1;
    } else {
        return 0;
    }
}