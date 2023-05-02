function solution(a, d, included) {
    let arr = []
    for(let i=0; i<included.length; i++){
        if(included[i] == true) { arr.push(i) }
    }
    return arr.map(i=> i*d+a).reduce((i,j)=>i+j)
}
solution