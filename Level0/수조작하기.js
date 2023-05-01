function solution(log) {
    var answer = '';
    for(let i=1; i<log.length; i++){
        let a = log[i]-log[i-1]
        if (a==1) { answer += 'w'}
        if (a==-1) { answer += 's'}
        if(a==10) { answer += 'd'}
        if(a==-10) { answer += 'a'}
    }
    return answer;
}
solution