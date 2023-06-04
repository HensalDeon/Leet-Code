var longestCommonPrefix = function (strs) {
    let str = '';
    //localeCompare is a built in method to compare strings
    let sorted = strs.sort((a, b) => b.localeCompare(a))
    let strOne = sorted[0];
    let strLast = sorted[sorted.length - 1]
    for (let i = 0; i < strOne.length; i++) {
        if (strOne[i] == strLast[i]) {
            str = str + strOne[i]
        } else {
            break;
        }
    }

    return str
};