/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let S = s.split('');
    let T = t.split('');
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '#') {
            if (i > 0) {
                S.splice(i - 1, 2)
                i -= 2
            } else {
                S.splice(i, 1);
                i--;
            }
        }
    }
    for (let i = 0; i < T.length; i++) {
        if (T[i] === '#') {
            if (i > 0) {
                T.splice(i - 1, 2)
                i -= 2
            } else {
                T.splice(i, 1);
                i--;
            }
        }
    }
    let str1 = S.join();
    let str2 = T.join();
    return str1 == str2;
};