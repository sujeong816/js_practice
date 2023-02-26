function solution(n) {
    var answer = 0; let arr = [];
    if(n==0) { arr.push(0); }
    for(let i=1; i<=n; i++) {
        if(n%i==0) { arr.push(i); }
    }
    return arr.reduce((a,b)=>a+b);
}