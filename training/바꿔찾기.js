function solution(str, pat) {
    str = str.split("")
    for(let i=0; i<str.length; i++) {
        str[i] == 'A' ? str[i] = 'B' : str[i] = 'A'
    }
    return str.join("").includes(pat) ? 1 : 0
}