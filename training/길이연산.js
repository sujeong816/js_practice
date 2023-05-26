function solution(num) {
    return num.length>10 ? num.reduce((i,j)=>i+j) : num.reduce((i,j)=>i*j)
}