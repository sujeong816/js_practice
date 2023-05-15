// n을 a로 나눈 값에 b를 곱한 값을 answer에 더한다
// n에 answer을 대입한다.
// n이 a가 될 때까지 계산 반복

function solution(a, b, n) {
    var answer = 0; let trade = 0;
    while(n >= a) {
        trade = parseInt(n / a) * b
        answer += trade
        n = trade + n%a
    }
    return answer
}