/**
 * @param {number} num
 * @return {string}
 * 
 * convert Integer to Roman
 */
var intToRoman = function(num) {
    let romanNum = "";
    const symbolValueList = [
        ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], 
        ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], 
        ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
    ];

    for (let i = 0; i < symbolValueList.length; i++) {
        while (num >= symbolValueList[i][1]) {
            romanNum += symbolValueList[i][0];
            num -= symbolValueList[i][1];
        }
    }

    return romanNum;
};
console.log(intToRoman(1052))