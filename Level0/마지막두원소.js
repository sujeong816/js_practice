function solution(num) {
    let a = num.length-1
    let b = num.length-2
    num[a] > num[b] ? num.push(num[a]-num[b]) : num.push(num[a]*2)
    return num;
}
solution('[1,2,3,4]')