/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
    let minVal1 = Math.min(...nums1)
    let minVal2 = Math.min(...nums2);
    let val = Math.min(minVal1, minVal2)
    let small;
    if (val == minVal1) {
        small = Number(String(minVal1) + String(minVal2));
    } else {
        small = Number(String(minVal2) + String(minVal1));
    }
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                small = Math.min(small, nums1[i]);
            }
        }
    }

    return small;

};