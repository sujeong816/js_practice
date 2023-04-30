function solution(str) {
    var answer = []; str=[...str]
    for(let i=0; i<str.length; i++) {
        answer.push(str.slice(i, str.length+1).join(""))
    }
    return answer.sort();
}
solution()