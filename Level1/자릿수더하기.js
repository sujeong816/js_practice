function solution(n){
    return n.toString().split('').map(i=>Number(i)).reduce((i,j)=>i+j)
}