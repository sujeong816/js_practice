function solution(order) {
    var answer = 0;
    [...String(order)].filter(i => (['3', '6', '9'].includes(i))? answer++ : 0);
    return answer;
}