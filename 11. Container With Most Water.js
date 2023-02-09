/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let start = 0;
    let end  = height.length-1;
    let maxArea = 0;
    while(start < end){
        let area = Math.min(height[start],height[end]) * (end-start);
        maxArea = Math.max(maxArea,area)
        if(height[start] < height[end]){
            start++
        }else{
            end--
        }
    }
    return maxArea
}