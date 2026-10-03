class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
            //[-4,-1,-1,0,1,2]
    //[0,0,0,0,0,1,1,2]
    //     ^ ^  
    nums = nums.sort((a,b)=> a-b);
    const result = [];
    for(let i = 0;i<nums.length;i++)
    {
        if(nums[i]>0) break;
        if(nums[i] === nums[i-1]) continue;

        let pointer1 = i+1;
        let pointer2 = nums.length-1;

        while(pointer2>pointer1){
            let sum = nums[i] + nums[pointer1] + nums[pointer2];
            
            // if(nums[i] === nums[i-1]) continue;
            if(sum === 0)
            {
                result.push([nums[i], nums[pointer1], nums[pointer2]]);
                pointer1++;
                pointer2--;
                while(nums[pointer1] === nums[pointer1-1]&&pointer1<pointer2) pointer1++;
                // while(nums[pointer2] === nums[pointer2-1]) pointer2--;

            }
            if(sum> 0)
                pointer2--;
            if(sum< 0)
                pointer1++;
        }
    }
    return result;
    }
}
