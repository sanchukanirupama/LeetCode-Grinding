/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * You are given an integer array nums. 
 * You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 * 
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * This is solved using greedy algorithem
 */
var canJump = function(nums) {
    let iscanJump = false;
    let last = nums.length - 1;
    let pointer = last - 1;
    let step = 1;

    // for edge case which array only has a single element
    if (nums.length === 1) {
        return true;
    }

    while(pointer >= 0) {
        if(pointer == 0 && nums[pointer] >= step) {
            iscanJump = true;
            break;
        }

        if(nums[pointer] >= step){
            last = pointer;
            step = 1;
        } else {
            step++;
        }
        
        pointer--;
    }

    return iscanJump;
};

console.log(canJump([3,2,1,0,4]))