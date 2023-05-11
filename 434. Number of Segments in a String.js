/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let length;
    if (s.trim() === "") {
        return 0;
    }
    const segments = s.trim().split(/\s+/);
    return length = segments.length;
};
