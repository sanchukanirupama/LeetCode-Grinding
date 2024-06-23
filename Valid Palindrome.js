/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let isPalindrome = true;
    
    // Convert to lowercase
    let lowerCaseStr = s.toLowerCase();
    
    // Remove spaces, commas, colons, and other non-alphanumeric characters
    let cleanedStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = cleanedStr.length - 1;

    while(left < right) {
        if(cleanedStr[left] != cleanedStr[right]) {
            isPalindrome = false;
            break;
        }
        left++
        right--
    }

    return isPalindrome;
    
    
};

console.log(isPalindrome("race a car"))