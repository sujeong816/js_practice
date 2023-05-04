function solution(my_string, n) {
    let arr = []; [...my_string]
    for(let i=0; i<n; i++) {
        arr.push(my_string[i])
    }
    return arr.join("")
}
solution