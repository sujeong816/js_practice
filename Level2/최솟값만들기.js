function solution(a,b){
    var answer = 0; a.sort((i,j)=>i-j); b.sort((i,j)=>j-i);
    for(let i=0; i<a.length; i++) {
        answer += a[i]*b[i];
    }
    console.log(answer);
}
solution([1, 4, 2], [5, 4, 4]);
solution([1,2], [3,4]);