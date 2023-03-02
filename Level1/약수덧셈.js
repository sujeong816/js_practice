function solution(left, right) {
    var answer = 0; let n = 0;
    for(let i=left; i<=right; i++) {
        for(let j=1; j<=i; j++) {
            if(i%j==0) { n+=1; }
        }
        console.log(i);
        console.log(n);
        n%2===0 ? answer += i : answer -= i;
        n = 0;
    }
    return answer;
}
solution(13, 17);