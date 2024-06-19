/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let hIndex = citations.length;
    citations.sort((a, b) => b - a);

    if(citations[0] == 0) {
        hIndex = 0; // for edge cases
    }

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            hIndex = i + 1;
        } else {
            break;
        }
    }

    return hIndex;
};

console.log(hIndex([3,0,6,1,5]))