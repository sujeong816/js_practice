function solution(d, budget) {
    d.sort((i,j)=>i-j); let count = 0
    
    while(d[0] <= budget) {
        budget -= d[0]
        d.shift(); count++
    }
    
    return count
}