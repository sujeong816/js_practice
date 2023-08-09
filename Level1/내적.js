// function solution(a, b) {
//     var answer = [];
//     for(let i=0; i<a.length; i++) {
//         answer.push(a[i]*b[i]);
//     }
//     return answer.reduce((a,b)=>a+b);
// }
function solution(a, b) {
    let answer = 0
    for(let i=0; i<a.length; i++) {
        answer += a[i]*b[i]
    }
    return answer
}