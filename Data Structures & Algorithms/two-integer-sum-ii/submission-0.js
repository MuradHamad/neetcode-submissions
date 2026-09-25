class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let pointer1 = 0;
        let pointer2 = numbers.length-1;
        for(let i =0;i<numbers.length;i++)
        {
            if(numbers[pointer1] + numbers[pointer2] === target)
                return [pointer1 + 1, pointer2 + 1]
            else if(numbers[pointer1] + numbers[pointer2] > target)
                pointer2--;
            else if(numbers[pointer1] + numbers[pointer2] < target)
                pointer1++;

        }
        return -1;
    }
}
