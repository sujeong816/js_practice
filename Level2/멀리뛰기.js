function solution(n) {
    let arr = [0, 1];
    for(let i=2; i<=n+2; i++) {
        arr[i] = (arr[i-2]+arr[i-1])%1234567
    }
    return arr[n+1];
}
solution(4)