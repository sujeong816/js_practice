function solution(number) {
    let num = number.split("").map(i=>Number(i)).reduce((i,j)=>i+j)
    return num%9;
}
solution