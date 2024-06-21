/**
 * @param {number[]} ratings
 * @return {number}
 * 
 * There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the following requirements:
 * 
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * Return the minimum number of candies you need to have to distribute the candies to the children.
 * 
 * Example 1:
 * Input: ratings = [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
 */
var candy = function(ratings) {

    const candyArr = new Array(ratings.length).fill(1);
    let minCandyAmount = 0;

    // itarate first to last
    for(i=1; i < ratings.length; i++) {
        candyArr[0] = 1
        if(ratings[i] > ratings[i-1]) {
            candyArr[i] = candyArr[i-1] + 1;
        }
    }

    // itarate last to first
    for(j=ratings.length - 2; j >= 0; j--) {
        if(ratings[j] > ratings[j+1]) {
            candyArr[j] = Math.max(candyArr[j], candyArr[j + 1] + 1);
        }
    }

    for(k=0; k < ratings.length; k++) {
        minCandyAmount = minCandyAmount + candyArr[k]
    }
    
    return minCandyAmount;
};

console.log(candy([1,0,2]))