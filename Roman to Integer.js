/**
 * @param {string} s
 * @return {number}
 * For example, 2 is written as II in Roman numeral, just two ones added together. 
 * 12 is written as XII, which is simply X + II. 
 * The number 27 is written as XXVII, which is XX + V + II.
 * 
 * The logic behind this is whenever you gets a character which value is larger than the next character, it should be deducted from the comming value
 * IV = 5 - 1 = 4
 * VI = 5 + 1 = 6
 */
var romanToInt = function(s) {
    let sum=0;
    const numArr = [];
    const symbolValMap = { "I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000 }

    for (i=0; i < s.length; i++) {
        currentLetterVal = symbolValMap[s[i]]
        nextLetterVal = symbolValMap[s[i+1]]

        if(nextLetterVal == undefined) {
            numArr.push(currentLetterVal)
            break;
        }
        
        if(currentLetterVal >= nextLetterVal) {
            numArr.push(currentLetterVal)
        } else {
            numArr.push(-1*currentLetterVal)
        }
    }

    // get the sum
    for(j=0; j < numArr.length; j++) {
        sum += numArr[j]
    }

    return sum
    
};

console.log(romanToInt("MCMXCIV"))