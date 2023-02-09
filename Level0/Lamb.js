function solution(n, k) {
    var answer = 0;
    
    if(n >= 10) {
        var s = parseInt(n/10);
        k = k-s;
        answer = (n*12000)+(k*2000);
    } else {
        answer = (n*12000)+(k*2000); 
    }
    return answer;
} //이렇게 더럽게 풀어도 되나?