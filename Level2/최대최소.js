// function solution(s) {
//     let arr = s.split(" ").map(i=>parseInt(i)).sort((i,j) => i-j);
//     return arr[0]+" "+arr[arr.length-1];
// }

function solution(s) {
    s = s.split(' ')
    return Math.min(...s)+' '+Math.max(...s)
}