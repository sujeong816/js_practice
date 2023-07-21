function solution(myString, pat) {
    var answer = 0;
    for(let i=0; i<myString.length; i++) {
        if(pat == myString.slice(i, i+pat.length))
            answer++
    }
    return answer
}