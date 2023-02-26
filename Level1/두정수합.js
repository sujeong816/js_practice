function solution(a, b) {
    var arr = [];
    if(a<b) { 
        for(let i=a; i<=b; i++) { arr.push(i); }
    } else {
        for(let i=b; i<=a; i++) { arr.push(i); }
    }
    return arr.reduce((a,b)=>a+b);
}