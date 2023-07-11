function solution(num) {
    let even = ''
    let odd = ''
    for(let i=0; i<num.length; i++) {
        num[i]%2==0 ? even += num[i] : odd += num[i]
    }
    return parseInt(even)+parseInt(odd)
}