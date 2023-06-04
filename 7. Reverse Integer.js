var reverse = function (x) {
    let str = Math.abs(x).toString().split("").reverse().join("");
    if (x > 0) {
        if (str < Math.pow(2, 31) - 1) {
            return str;
        } else {
            return 0;
        }
    } else if (x < 0) {
        if (-str > -Math.pow(2, 31)) {
            return -str;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
};
