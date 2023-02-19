function solution(ki, board) {
    var answer = []; let x = 0; let y = 0;
    for(let i=0; i<ki.length; i++) {
        if(ki[i] == 'left') { Math.floor(board[0]/2) > -x ? x-- : 0; }
        else if(ki[i] == 'right') { Math.floor(board[0]/2) > x ? x++ : 0; }
        else if(ki[i] == 'up') { Math.floor(board[1]/2) > y ? y++ : 0;}
        else if(ki[i] == 'down') { Math.floor(board[1]/2) > -y ? y-- : 0;}
    }
    answer.push(x); answer.push(y);
    return answer;
}