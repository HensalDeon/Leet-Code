/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let map = new Map();
    let maxfreq = 0;
    let element = -1;

    for(let num of nums){
        if(num % 2 === 0) map.set(num,(map.get(num) || 0)+1);
        if(num % 2 ===0 && maxfreq <= map.get(num)){
            if(maxfreq == map.get(num)){
                element = Math.min(element,num)
            }else{
                element = num;
                maxfreq = map.get(num)
            }
        }
    }
    return element;
    
};