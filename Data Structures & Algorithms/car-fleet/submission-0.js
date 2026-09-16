class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
            const stack = [];
    const cars = position.map(
        (p, i)=> [p, speed[i]]
    ).sort((a,b)=>a[0] - b[0]);//[[0,1],[3,3],[5,1],[8,4],[10,2]]

    for(let i =cars.length-1;i>=0;i--){
        const remain = ( target - cars[i][0] ) / cars[i][1];
        if(stack[stack.length-1]>= remain)
        {
            
            continue;
        }
        else
        {
            stack.push(remain);
        }
    }
    // console.log(stack)
    return stack.length;
    }
}
