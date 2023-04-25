function average(...a) {
    let result = 0;
    for(let i=0; i<a.length; i++) {
        result += a[i]
    }
    return result/a.length
}
console.log(average(1,2,3,4))
console.log(average(1,2,3,4,5))
console.log(average(1,2,3,4,5,6))