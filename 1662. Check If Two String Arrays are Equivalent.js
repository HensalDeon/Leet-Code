/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    return word1.join("") === word2.join("");

    //alternative method
    // return word1.reduce((acc, total) => acc += total) === word2.reduce((acc, total) => acc += total);
};
