function solution(ab, signs) {
    let answer = 0
    for(let i=0; i<ab.length; i++) {
        signs[i] ? answer += ab[i] : answer += -ab[i] 
    }
    return answer
}