function solution(num, n) {
    let a = num.splice(0, n).map(i=> num.push(i))
    return num;
}
solution