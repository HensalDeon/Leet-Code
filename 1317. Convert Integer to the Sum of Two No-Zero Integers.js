/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    let val1 = n - 1;
    let val2 = 1

    const hasZero = val => val.toString().includes('0');

    while (hasZero(val1) || hasZero(val2)) {
        val1 = val1 - 1;
        val2 = val2 + 1;
    }

    return [val1, val2];

};