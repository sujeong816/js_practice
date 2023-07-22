function solution(arr, q) {
    var answer = [];
    for(let i=0; i<q.length; i++) {
        let s = q[i][0]; let e = q[i][1]; let k = q[i][2]
        let tmp = arr.slice(s,e+1).filter(i=>i>k).sort((a,b)=>a-b)
        
        answer.push(tmp.length > 0 ? tmp[0] : -1)
    }
    console.log(answer)
    return answer
}

solution([0, 1, 2, 4, 3],[[0, 4, 2],[0, 3, 2],[0, 2, 2]])