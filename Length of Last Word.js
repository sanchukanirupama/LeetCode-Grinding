/**
 * @param {string} s
 * @return {number}
 * 
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal 
 * substring
 * consisting of non-space characters only.
 * 
 * Example 1:
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 */
var lengthOfLastWord = function (s) {
    let indexOfLastSpace = 0;
    str = s.trim();

    for (i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            indexOfLastSpace = i
        }
    }

    // edge cases
    if (indexOfLastSpace == 0) {
        return str.length;
    }

    let result = str.substring(indexOfLastSpace + 1, s.length);

    return result.length;

};


console.log(lengthOfLastWord("    day"))