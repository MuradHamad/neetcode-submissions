class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    for (let i =0;i<temperatures.length;i++)
    {
        while(temperatures[stack[stack.length-1]]<temperatures[i])
        {
            
            result[stack[stack.length-1]] = i - stack[stack.length-1];
            stack.pop()
        }

        stack.push(i);
    }
    
    return result;
}
}
