function solution(str, indices) {
    str = str.split('')
    for(let i=0; i<indices.length; i++) {
        str[indices[i]] = ''   
    }
    return str.join('')
}