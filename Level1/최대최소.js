function solution(n, m) {
    var answer = []; let max = 0; /**최대공약수*/ let min = 0; //최소공배수 
    for(let i=1; i<=n*m; i++) { 
        if(n%i==0 && m%i==0) { max = i; }
    }
    min = n*m / max;
    return [max, min]
}