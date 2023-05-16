function solution(k, tangerine) {
    var answer = 0;
    let count = new Map()
    tangerine.map(i=>count.set(i, count.has(i) ? count.get(i)+1 : 1))
    count = [...count].sort((a,b)=> b[1]-a[1])
    for(let i=0; i<count.length; i++) {
        if(k > 0) {
            k -= count[i][1]
            answer++
        }
    }
    return answer;
}