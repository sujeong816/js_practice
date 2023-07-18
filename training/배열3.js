function solution(arr, intervals) {
    var answer = []
    for(let i=0; i<intervals.length; i++) {
        answer.push(arr.slice(intervals[i][0],intervals[i][1]+1))
    }
    
    let result = []
    for(let i=0; i<answer.length; i++) {
        for(let j=0; j<answer[i].length; j++) {
            result.push(answer[i][j])
        }
    }
    return result
}