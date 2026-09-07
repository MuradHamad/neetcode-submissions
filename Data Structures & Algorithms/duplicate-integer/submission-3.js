/**
 * @param {number[]} nums
 * @return {boolean}
 */
class Solution{
hasDuplicate (nums) {
    const arrSet = new Set(nums);
    if(arrSet.size === nums.length)
    return false;
    return true

};
}