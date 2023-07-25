function solution(arr, q) {
    //[s,e,k] j가 k 배수면 arr[i]1 더함 i는 s이상 e이하
    
    for(let i=0; i<q.length; i++) {
        let s = q[i][0]; let e = q[i][1]; let k = q[i][2]

        for(let j=s; j<=e; j++) {
            if(j%k == 0) { arr[j]+=1 }
        }
    }
    
    console.log(arr)
}

solution([0, 1, 2, 4, 3], [[0, 4, 1],[0, 3, 2],[0, 3, 3]])