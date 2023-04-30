function solution(str, parts) {
    var answer = '';
    for(let i=0; i<str.length; i++) {
        answer += str[i].slice(parts[i][0], parts[i][1]+1)
    }
    return answer;
}
solution
//부분 문자열 이어 붙여 문자열 만들기