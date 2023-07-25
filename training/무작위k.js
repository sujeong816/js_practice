function solution(arr, k) {
    var answer = [];
    for(let i=0; i<arr.length; i++) {
        if(!answer.includes(arr[i])) { answer.push(arr[i]) }
    }
    
    let count = k - answer.length
    if(count > 0) {
        for(let i=0; i<count; i++) { answer.push(-1) }
    } else if(count < 0) {
        for(let i=0; i>count; i--) { answer.pop() }
    }
    return answer
}