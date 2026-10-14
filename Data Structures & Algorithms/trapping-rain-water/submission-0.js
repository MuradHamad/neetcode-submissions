class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
            let result = 0;
    let pointer1 =0, maxLeft = 0; 
    let pointer2 =height.length-1, maxRight = 0; 

    while(pointer1<pointer2)
    {
        if(height[pointer1] <= height[pointer2])
        {
            maxLeft = Math.max(maxLeft, height[pointer1]);
            result = result + (maxLeft - height[pointer1]);
            pointer1++;
        }
        else
        {
            maxRight = Math.max(maxRight, height[pointer2]);
            result = result + (maxRight - height[pointer2]);
            pointer2--;
        } 
    }

    return result;

    }
}
