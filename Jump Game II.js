/**
 * @param {number[]} nums
 * @return {number}
 * 
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
 * Each element nums[i] represents the maximum length of a forward jump from index i. 
 * In other words, if you are at nums[i], you can jump to any nums[i + j] where:
 * 
 * Return the minimum number of jumps to reach nums[n - 1]. 
 * The test cases are generated such that you can reach nums[n - 1]
 * 
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * 
 * Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index..
 */
var jump = function(nums) {
    let minSteps = 0;
    const last = nums.length - 1;
    let goal = 0;
    let maxReach = 0;

    // If the array has 1 or fewer elements, no jumps are needed
    if (nums.length <= 1) {
        return 0;
    }

    while (goal < last) {
        let nextMaxReach = maxReach;

        // Check all reachable indices from the current goal
        for (let i = goal; i <= maxReach; i++) {
            nextMaxReach = Math.max(nextMaxReach, i + nums[i]);
            if (nextMaxReach >= last) {
                return minSteps + 1; // One more step to reach the end
            }
        }

        if (nextMaxReach == maxReach) {
            break; // If no progress is made, break the loop
        }

        goal = maxReach + 1;
        maxReach = nextMaxReach;
        minSteps++;
    }

    return minSteps;
};


console.log(jump([2,3,1,1,4]))