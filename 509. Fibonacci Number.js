/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let feb = [0, 1];
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    for (let i = 2; i <= n; i++) {
        feb[i] = feb[i - 1] + feb[i - 2];
    }
    return feb[n];
};
