function solution(d, budget) {
    var answer = 0; d.sort((i,j)=>i-j); let sum = 0;
    for(let i=0; i<d.length; i++) {
        sum += d[i]; answer++;
        sum > budget ? answer-- : 0;
    }
    return answer;
}