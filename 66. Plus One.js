/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let string = digits.map(num => num.toString()).join('');
    let num = BigInt(string);
    num = num+BigInt(1);
    string = num.toString();
    let result = string.split('').map(num => Number(num))
    return result;
};