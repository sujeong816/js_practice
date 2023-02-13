function solution(array) {
    var answer = [];
    var arr2 = array.slice().sort((a, b) => b - a);
    answer[0] = arr2[0];
    answer[1] = array.indexOf(answer[0]);
    return answer;
}