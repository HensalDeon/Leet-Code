/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if(s.length !== t.length){
        return false;
    }
    sort = s.split('').sort((a,b)=> a<b ? 1: -1).join('');
    tort = t.split('').sort((a,b)=> a<b ? 1: -1).join('');

    return sort === tort;

};