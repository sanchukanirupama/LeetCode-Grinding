/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * This can be easily done by taking the product of all the element in the array and looping and dividing the by it selves.
 * but it asked not to use division operation.
 * 
 * Therefore here we use prefix and postfix multiplications
 */
var productExceptSelf = function(nums) {
    let output = [];
    let prefix = 1;
    let postfix = 1;

    // adding prefixes to output array
    for(i=0; i < nums.length; i++) {
        output[i] = prefix;
        prefix = prefix * nums[i]
    }

    for(j=nums.length - 1; j >= 0; j--) {
        output[j] = output[j] * postfix;
        postfix = postfix * nums[j]
    }

    return output;

};