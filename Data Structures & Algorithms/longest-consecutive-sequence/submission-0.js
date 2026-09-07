class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length ===0)return 0;
        let heigest = [];
        const numsSet = new Set(nums);
        let counter = 0
        numsSet.forEach((value)=>{
            if(!numsSet.has(value-1)){
                heigest.push(1);
                while(numsSet.has(value+heigest[counter])){
                    heigest[counter] += 1; 
                }
                counter+=1;
            }
        });
        return Math.max(...heigest);
    }
}
