// function solution(n) {
//     var answer = '';
//     for(let i=0; i<parseInt(n/2); i++) { answer += '수박'; }
//     if(n%2==1) { answer += '수'; }
//     return answer;
// }
function solution(n) {
    return n%2==0 ? '수박'.repeat(n/2) : '수박'.repeat(Math.floor(n/2))+'수'
}