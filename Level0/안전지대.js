function solution(b) {
    var answer = 0;
    for(let i=0; i<b.length; i++) {
        for(let j=0; j<b[i].length; j++) {
            if(b[i][j] == 1) {
                if(i!=0 && j!=0 && b[i-1][j-1]!=1) {b[i-1][j-1] = 2;} //윗줄 왼쪽
                if(i!=0 && b[i-1][j]!=1) {b[i-1][j] = 2;} //윗줄
                if(i!=0 && j<b.length-1 && b[i-1][j+1]!=1) {b[i-1][j+1] = 2;} //윗줄 오른쪽
                if(j!=0 && b[i][j-1]!=1) {b[i][j-1] = 2;} //왼쪽
                if(b[i][j+1]!=1) {b[i][j+1] = 2;} //오른쪽
                if(i<b.length-1 && j!=0 && b[i+1][j-1]!=1) {b[i+1][j-1] = 2;} //아래왼쪽
                if(i<b.length-1 && b[i+1][j]!=1) {b[i+1][j] = 2;} //아래
                if(i<b.length-1 && j<b.length-1 && b[i+1][j+1]!=1) {b[i+1][j+1] = 2;}
            }
        }
    }
    b.forEach(i => i.forEach(j => j == 0 ? answer++ : 0));
    return answer;
}