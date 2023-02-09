function solution(n) {
    var answer = 0;
    
    //반복해서 2로 나누고 만약 2로 나눈 값 나머지가 0이라면 더해서 저장
    for(var i =0; i<=n; i++) {
        if (i%2 == 0) {
            answer += i;
        }
    }
    
    return answer;
}