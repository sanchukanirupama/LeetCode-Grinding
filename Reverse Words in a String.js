/**
 * @param {string} s
 * @return {string}
 * 
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated by a single space.
 * 
 * Note that s may contain leading or trailing spaces or multiple spaces between two words. 
 * The returned string should only have a single space separating the words. Do not include any extra spaces.
 * 
 * Example 1:
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 */
var reverseWords = function(s) {
    let str = s.trim();
    let wordArr = [];
    let left = 0;
    let right = 0;

    while (right <= str.length) {
        if (str[right] === " " || str[right] === undefined) {
            if (left !== right) { // Avoid adding empty strings caused by multiple spaces
                let word = str.substring(left, right);
                wordArr.push(word);
            }
            left = right + 1;
        }
        right++;
    }

    // Reverse the words and join them with a single space
    let reverseWord = wordArr.reverse().join(" ");

    return reverseWord;
    
};

console.log(reverseWords("a good   example"))