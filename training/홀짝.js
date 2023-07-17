function solution(n) {
    let arr = new Array(n).fill(0).map((i,j)=> j+1)
    return n%2==1 ? 
        arr.filter(i=> i%2==1).reduce((i,j)=>i+j) : 
        arr.filter(i=> i%2==0).map(i=>i*i).reduce((i,j)=>i+j)
}