function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    let topNum = numer1 * denom2 + numer2 * denom1;
    let bottomNum = denom1 * denom2;
    
    for(var i=1; i<=bottomNum; i++) {
        if(topNum % i == 0 && bottomNum % i == 0) {
            answer[0] = topNum / i;
            answer[1] = bottomNum / i;
        }
    }
    return answer;
}