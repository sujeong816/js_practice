function solution(x) {
    return x % x.toString().split('').map(i=>Number(i)).reduce((i,j)=>i+j) == 0
}