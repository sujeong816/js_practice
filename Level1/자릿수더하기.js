function solution(n){ 
    if(n<10) { return n; }
    else {return n.toString().split("").reduce((a,b)=>Number(a)+Number(b));}
}