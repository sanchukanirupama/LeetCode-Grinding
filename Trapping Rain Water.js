/**
 * @param {number[]} height
 * @return {number}
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 * compute how much water it can trap after raining.
 * 
 * Example 1:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 * (Refer the diagram in the leetcode)
 */
var trap = function(height) {
    let total = 0;
    const maxLeft = [];
    const maxRight = [];
    const minArr = [];

    // getting the maximum left boundaries
    maxLeft[0] = 0;
    for(i = 1; i < height.length; i++) {
        if(height[i - 1] > maxLeft[i-1]) {
            maxLeft[i] = height[i - 1]
        } else {
            maxLeft[i] = maxLeft[i - 1]
        }

    }

    // getting the maximum right boundaries
    maxRight[height.length - 1] = 0;
    for(j = height.length - 2; j >= 0; j--) {
        if(height[j + 1] > maxRight[j + 1]) {
            maxRight[j] = height[j + 1]
        } else {
            maxRight[j] = maxRight[j + 1]
        }
    
    }


    // getting the minimum boundaries
    for(k = 0; k < height.length; k++) {
        minArr.push(Math.min(maxLeft[k], maxRight[k]))
    }

    // logic
    for(l = 0; l < height.length; l++) {
        if(minArr[l] - height[l] > 0) {
            total += minArr[l] - height[l]
        }
    }

    return total;
    
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))