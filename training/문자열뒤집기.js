function solution(str, s, e) {
    str = str.split('')
    let revStr = str.splice(s, e-s+1).reverse().join('')
    str.splice(s, 0, revStr).join('')
    return str.join('')
}