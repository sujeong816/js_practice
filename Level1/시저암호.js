function solution(s, n) {
    var alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    s = s.split('')
    for(let i=0; i<s.length; i++) {
        if(s[i] !== ' ')  s[i] = alpha[alpha.indexOf(s[i])+n]
    }
    return s.join('')
}