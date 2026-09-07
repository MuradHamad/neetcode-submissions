class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        let prefix = 1;
        for(let i of nums){
            result.push(prefix);
            prefix = prefix * i;
        }
        let postfix = 1;
        for(let i = nums.length-1;i>=0;i--){
            result[i] = result[i] * postfix;
            postfix = postfix * nums[i];
        }
        return result;
    }
}
