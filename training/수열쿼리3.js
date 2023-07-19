function solution(arr, queries) {
    for(let i=0; i<queries.length; i++) {
        let x = queries[i][0]; let y = queries[i][1]
        let tempx = arr[x]; let tempy = arr[y]
        arr[x] = tempy; arr[y] = tempx
    }
    return arr
}