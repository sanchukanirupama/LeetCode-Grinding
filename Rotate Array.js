/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * 
 */
var rotate = function(nums, k) {
    let left = 0
    let right = nums.length - 1
    let temp;

    k = k % nums.length // to avoid the edge cases which is

    while (left < right) {
        
        temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp

        left++
        right--
    }

    left = 0
    right = k - 1;

    while (left < right) {
        
        temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp

        left++
        right--
    }

    left = k
    right = nums.length - 1;

    while (left < right) {
        
        temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp

        left++
        right--
    }

    return nums;
    
};


console.log(rotate([1,2,3,4,5,6,7],3))