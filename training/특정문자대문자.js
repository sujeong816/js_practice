function solution(str, alp) {
    str = str.split('')
    for(let i=0; i<str.length; i++) {
        if(str[i] == alp) {
            str[i] = str[i].toUpperCase()
        }
    }
    return str.join("");
}