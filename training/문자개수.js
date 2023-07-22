function solution(str) {
    let answer = new Array(52).fill(0)
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    
    for(let i=0; i<str.length; i++) {
        answer[alpha.indexOf(str[i])] += 1
    }
    
    return answer
}