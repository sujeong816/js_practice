function solution(board, k) {
    var answer = [];
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i].length; j++) {
            if(i+j <= k) { answer.push(board[i][j]) }
        }
    }
    return answer.reduce((i,j)=>i+j);
}