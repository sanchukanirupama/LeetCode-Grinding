/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 * Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
 * 
 * Return k.
 * 
 * Example 1:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 2.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */
var merge = function(nums1, m, nums2, n) {
    last = m + n - 1
    while(m > 0 && n > 0) {
        if(nums1[m-1] > nums2[n - 1]){
            nums1[last] = nums1[m-1]
            m--
        } else {
             nums1[last] = nums2[n-1]
            n--
        } 
        
        last--
    }
    
     while (n > 0) {
        nums1[last] = nums2[n - 1];
        n--;
        last--;
    }
    
};

