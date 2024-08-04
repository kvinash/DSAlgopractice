/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let maxProfit = 0;
    let buyPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice >= prices[i]) {
            buyPrice = prices[i];
            profit += maxProfit;
            maxProfit = 0;
        } else {
            if (prices[i] - buyPrice > maxProfit) {
                maxProfit = prices[i] - buyPrice;

            } else {
                profit += maxProfit;
                buyPrice = prices[i];
                maxProfit = 0;

            }

        }

        if (i === prices.length - 1) {
            profit += maxProfit;
        }
    }

    return profit;

};