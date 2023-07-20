/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let nums = String(num)
    if (num < 10) {
        return num
    } else {
        num = [...nums].reduce((a, b) => a + Number(b), 0)
        return addDigits(num)
    }

};