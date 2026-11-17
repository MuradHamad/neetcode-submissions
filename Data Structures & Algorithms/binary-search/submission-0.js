class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
            let left = 0;
    let right = nums.length-1;
    let middle = Math.floor((right + left)/2);
    while(left <= right)
    {
        if(target> nums[middle])
        {
            left = middle +1;
            middle = Math.floor((right + left) /2);
        }
        else if(target === nums[middle]) return middle;
        else if (target< nums[middle])
        {
            right = middle -1;
            middle = Math.floor((right + left) /2);
        }
    }
    return -1;
    }
}
