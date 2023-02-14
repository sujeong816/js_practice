function solution(n) {
    var answer = 0;
    if(n == 1) {
        return 1;
    }
    for(var i=2; i<=n; i++) {
        n/=i;
        answer = i;
    }
    return answer;
}