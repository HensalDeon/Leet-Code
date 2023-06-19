/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let arr=[];
    for(let i=0;i<s.length;i++){
        arr.push(s[i])
        while(arr.length > 1 && arr[arr.length-1] === arr[arr.length-2]){
        arr.pop();
        arr.pop();
        }
    }
    return arr.join('')
};