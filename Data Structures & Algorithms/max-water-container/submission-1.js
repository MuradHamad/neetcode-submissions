class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        let pointer1 = 0;
        let pointer2 = height.length-1;
        let biggestArea = 0;
        while(pointer1<pointer2)
        {
            let width = pointer2 - pointer1;
            let tall = Math.min(height[pointer1], height[pointer2]);
            let area = width * tall;
            if(area >= biggestArea)
                biggestArea = area;
            if(height[pointer2] >= height[pointer1])
                pointer1++;
            else
                pointer2--;
            console.log(biggestArea)
        }
        return biggestArea;
    }
}
