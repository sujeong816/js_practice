function solution(rank, attendance) {
    let temp = [];
    for(let i=0; i<attendance.length; i++) {
        if(attendance[i] == true) { temp.push(rank[i]) }
    }
    temp.sort((i,j)=>i-j)
    
    let answer = []
    for(let i=0; i<3; i++) {
        answer.push(rank.indexOf(temp[i]))
    }
    return answer[0]*10000 + answer[1]*100 + answer[2]
}