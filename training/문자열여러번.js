function solution(str, q) {
    str = str.split('')
    for(let i=0; i<q.length; i++) {
        let s = q[i][0]; let e = q[i][1]
        let revStr = str.slice(s, e+1).reverse()
        
        for(let j=0; j<revStr.length; j++) {
            str.splice(s+j, 1, revStr[j])
        }
    }
    return str.join('')
}