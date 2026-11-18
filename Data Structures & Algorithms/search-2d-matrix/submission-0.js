class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let nrow = matrix.length;
        let mcol = matrix[0].length;

        let left = 0;
        let right = nrow * mcol -1;

        while(left<= right)
        {
            let middle = Math.floor((left+ right)/2);
            let row = Math.floor(middle / mcol);
            let col = middle % mcol;

            if(matrix[row][col] < target)
            {
                left = middle +1;
            }
            else if (matrix[row][col] === target)
            {
                return true;
            }
            else if (matrix[row][col] > target)
            {
                right = middle -1;
            }
        }
        return false;
        }
}
