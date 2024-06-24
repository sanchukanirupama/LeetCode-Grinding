/**
 * @param {string[]} strs
 * @return {string}
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // Handle edge case for empty input array

    let commonPrefix = "";

    // Iterate over each character of the first string
    for (let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i];

        // Check this character against all other strings at the same position
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== currentChar) {
                return commonPrefix;
            }
        }
        commonPrefix += currentChar;
    }

    return commonPrefix;
    
};

console.log(longestCommonPrefix(["flower","flow","flight"]))