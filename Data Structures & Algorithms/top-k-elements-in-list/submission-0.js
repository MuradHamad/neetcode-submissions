class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
            const map = new Map();
    for(let i of nums){
        map.set(i,(map.get(i)||0)+1); 
    }
    
    const result = [];
    const fillingArray = Array.from({length: nums.length+1},()=>[]);
    for(let [key, value] of map.entries()){

        fillingArray[value].push(key);
    }
console.log(fillingArray)
    for(let i = fillingArray.length-1;i>=0;i--){
    
        for(let j of fillingArray[i]){
            result.push(j);
            if(result.length===k){
                return result;
            }
        }
    }

    
    }
}
