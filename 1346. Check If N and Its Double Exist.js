/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    while(arr.length){
        let n = arr.pop();
        if(arr.includes(n*2) || arr.includes(n/2)){
            return true
        }
    }
    return false;
};