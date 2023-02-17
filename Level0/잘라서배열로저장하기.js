function solution(str, n) {
    var answer = [];
    
    for(let i=0; i<str.length; i++) {
        answer.push(str.substr(i, n));
        i += n-1;
    }
    return answer;
}