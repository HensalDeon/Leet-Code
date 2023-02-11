var lengthOfLongestSubstring = function (s) {
    const mySet = new Set();
    let start = 0;
    let end = 0;
    let max = 0;
    while (start < s.length) {
        if (mySet.has(s[start])) {
            mySet.delete(s[end]);
            end++;
        } else {
            mySet.add(s[start]);
            start++;
            max = Math.max(max, start - end);
        }
    }
    return max;
};