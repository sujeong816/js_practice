function solution(strings, n) {
    let answer = strings.sort((i, j) => 
                              i.charCodeAt(n) - j.charCodeAt(n) == 0 ?
                              (i > j ? 1 : -1) : i.charCodeAt(n) - j.charCodeAt(n));
    return answer;
}