function solution(strArr) {
    let answer = []
    for(let i=0; i<strArr.length; i++) {
        i%2 == 1 ? answer.push(strArr[i].toUpperCase()) 
        : answer.push(strArr[i].toLowerCase())
    }
    return answer;
}