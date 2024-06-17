/**
 * 
 * @param {*} nums 
 * @returns 
 * 
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 * 
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 */

/**
 * Here this is implemented using Boyer–Moore majority voting algotithem to achive O(n) time complexity and O(1) space complexity
 * otherwise this can be done using haspmap which makes O(n) space complexity
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {  
            candidate = nums[i];
        }

        if (nums[i] === candidate) { 
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};

console.log(majorityElement([1,1,1,1,2,2,3,4,5]))