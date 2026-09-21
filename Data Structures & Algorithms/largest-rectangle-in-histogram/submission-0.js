class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
    const stack = [];
    let biggestArea =0 ;
    for (let [i, h] of heights.entries())
    {
        if(stack.length<1 || stack[stack.length-1][1] <= h)
        {
            stack.push([i,h]);
        }
        else
        {
            let j;
            while (stack.length>0 && stack[stack.length-1][1] >= h){
                let poped;
                [j,poped] = stack.pop();
                let area = ( i-j ) * poped;
                if(area >= biggestArea)
                    biggestArea = area;
            }
            stack.push([j,h])
        }
    }
    console.log(stack)
    for (let [i, poped] of stack){
        biggestArea=  Math.max(biggestArea, ((heights.length-i)*poped))
    }
    return biggestArea;
    }
}
