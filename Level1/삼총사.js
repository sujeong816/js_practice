function solution(number) {
    var answer = 0;
    for(let i=0; i<number.length; i++) {
        for(let j=0; j<i; j++) {
            for(let k=0; k<j; k++) {
                number[i] + number[j] + number[k] == 0 ? answer++ : 0;
            }
        }
    }
    return answer;
}