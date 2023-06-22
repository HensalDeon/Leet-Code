/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let i = 0;
    while (n > i) {
        i++;
        n = n - i
    }
    return i;
};
