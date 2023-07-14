function solution(rny) {
    rny = rny.split('')
    for(let i=0; i<rny.length; i++) {
        if(rny[i] == 'm') { rny[i] = 'rn'}
    }
    return rny.join('')
}