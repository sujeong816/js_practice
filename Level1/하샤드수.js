function solution(x) {
    let n = 0;
    if(x>9) { n = x.toString().split("").reduce((a,b)=>Number(a)+Number(b));}
    else { n = x; }
    return x%n==0 ? true : false;
}