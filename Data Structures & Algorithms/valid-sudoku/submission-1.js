class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
            const rows = Array.from({length:9}, ()=>new Set());
    const cols = Array.from({length:9}, ()=>new Set());
    const squrs = Array.from({length:9}, ()=>new Set());

    for(let i = 0;i<board.length;i++){
        for(let j = 0; j<board[i].length;j++){
            if(board[i][j] === '.')continue;

            const squrValue = Math.floor(i/3)*3 + Math.floor(j/3);

            if(rows[i].has(board[i][j])  ||  cols[j].has(board[i][j])  ||  squrs[squrValue].has(board[i][j]))
                return false;
            rows[i].add(board[i][j]);
            cols[j].add(board[i][j]);
            squrs[squrValue].add(board[i][j]);
        }
    }
    return true;

    }
}
