function solution(num) {
    return num.sort((i,j)=>i-j).slice(0,5)
}
solution(1,2,3)