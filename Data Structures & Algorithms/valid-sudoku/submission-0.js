class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const map = new Map();//{ 1: [0,0], 2:[0,1]}
        for (let i = 0;i<board.length;i++){
            for(let j = 0;j<board[i].length;j++){
                if(board[i][j] >=0 && board[i][j] <=9){
                    let squr = Math.floor(i/3)* 3 + Math.floor(j/3);
                    if(map.has(board[i][j])){
                        if(map.get(board[i][j])[0] === i)
                            return false;
                        if(map.get(board[i][j])[1] === j)
                            return false;
                        if(map.get(board[i][j])[2] === squr)
                            return false;
                    }
                    map.set(board[i][j],[i,j,squr])
                }
            }
        }
        return true;
    }
}
