function solution(n) {
    var answer = 0; 
    for(let i=1; i<=n; i++) {
        answer++;
        
        //3 제거
        while(answer.toString().includes('3') || answer%3==0){ answer++ }
    }
    return answer;
}