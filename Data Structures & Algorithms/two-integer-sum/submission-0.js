class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
            const map = new Map();
    nums.forEach((element,i)=>{
        map.set(element,i);
    });
    for(let i = 0;i<nums.length;i++){
        const remaining = target - nums[i];
        if(map.has(remaining)&&map.get(remaining)!==i){
            return [i,map.get(remaining)];
        }
    }

    return [];
    }
}
