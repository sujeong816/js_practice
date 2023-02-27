function solution(ab, signs) {
    for(let i=0; i<ab.length; i++) {
        if(signs[i] == false) { ab[i] *= -1; }
    }
    return ab.reduce((a,b) => a+b);
}