class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    let pointer1 = 0;
    let pointer2 = 1;
    let max = 0;
    while (pointer2< prices.length)
    {
        let profit = prices[pointer2] - prices[pointer1];
        if(profit< 0)
        {
            pointer1++;
            continue;
        }
        if(profit >= max)
            max = profit
        pointer2++
    }
    return max;
    }
}
