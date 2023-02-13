/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let longest = '';
    function isPaliandrome(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    for (i = 0; i < s.length; i++) {
        let oddPal = isPaliandrome(s, i, i);
        let evenPal = isPaliandrome(s, i, i + 1);

        let longestPal = oddPal.length > evenPal.length ? oddPal : evenPal;

        if (longestPal.length > longest.length) {
            longest = longestPal;
        }
    }

    return longest;
};