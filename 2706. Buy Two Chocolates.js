/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    prices.sort((a, b) => {
        return a - b
    })
    let ans = money - (prices[0]+prices[1]);
    return ans >= 0 ? ans : money;
};