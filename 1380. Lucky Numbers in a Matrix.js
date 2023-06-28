/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    for (let j = 0; j < matrix.length; j++) {
        let min = Math.min(...matrix[j])
        let idx = matrix[j].indexOf(min)
        if (matrix.every(arr => arr[idx] <= min)) return [min];
    }
    return [];
};