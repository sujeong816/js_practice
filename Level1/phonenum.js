function solution(pn) {
    pn = [...pn];
    for(let i=pn.length-5; i>=0; i--) {
        pn[i] = '*'
    }
    return pn.join("");
}