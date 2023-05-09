function solution(s, n) {
    let alp = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    s = s.replace(/ /g, "0").split("")
    for(let i=0; i<s.length; i++) {
        s[i]!='0' ? s[i] = alp[alp.indexOf(s[i])+n] : s[i] = " "
    }
    return s.join("")
}