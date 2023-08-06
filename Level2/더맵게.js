function solution(sco, k) {
    let count = 0; let newSco = 0

    while(true){
        sco.sort((i,j)=>i-j)
        if(sco[0] >= k) { return count }

        newSco = sco[0]+(sco[1]*2)
        sco.shift(); sco.shift()
        sco.unshift(newSco)
        
        count++
    }
}

console.log(solution([1, 2, 3, 9, 10, 12], 7))