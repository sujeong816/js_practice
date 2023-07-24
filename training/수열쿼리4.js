function solution(arr, q) {
    //[s,e,k] j가 k 배수면 arr[i]1 더함 i는 s이상 e이하
    
    for(let i=0; i<q.length; i++) {
        for(let j=q[0]; j<=q[1]; j++) {
            if(j%q[2] == 0) { arr[j]+=1 }
        }
    }
    
    return arr
}