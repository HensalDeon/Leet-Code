/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let array = s1.split(" ").concat(s2.split(" "));
    let res = [];
    let wordObj = {};

    for (let word of array) {
        wordObj[word] = (wordObj[word] || 0) + 1
    }

    for (let i in wordObj) {
        if (wordObj[i] == 1) res.push(i)

    }

    return res;
};