function solution(n) {
    var answer = Array.from(Array(n), () => Array(n).fill(0));
    for(let i=0; i<answer.length; i++) {
        answer[i][i]=1
    }
    return answer;
}
solution