function solution(a, b) {
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    
    for(let i=min+1; i<=max; i++) {
        min += i
    }
    return min
}