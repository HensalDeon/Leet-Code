/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let tmoney = 0;
    let i = 1;
    let p = 1;
    let m = p;
    while (i <= n) {
        if (i % 7 == 0) {
            tmoney = tmoney + m;
            p = p + 1;
            m = p;
        } else {
            tmoney = tmoney + m;
            m++;
        }
        i++;
    }
    return tmoney
};