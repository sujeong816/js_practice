function solution(arr) {
    return arr.reduce((a,b)=> a*b / min(a,b))
}

function min(a, b) {
    if (b == 0) return a
    return min(b, a%b)
}
solution([2,4,6,14])