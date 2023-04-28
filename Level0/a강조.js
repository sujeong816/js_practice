function solution(str) {
    str = str.split('');
    for(let i=0; i<str.length; i++) {
        if(str[i]=='a' || str[i]=='A') {
            str[i] = str[i].toUpperCase()
        } else {
            str[i] = str[i].toLowerCase()
        }
    }
    return str.join("");
}
solution('solution')