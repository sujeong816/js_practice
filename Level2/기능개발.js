function solution(progresses, speeds) {
    let day = []
    for(let i=0; i<progresses.length; i++) {
        let n = Math.ceil((100 - progresses[i]) / speeds[i])
        day.push(n)
    }
    
    let answer = []
    let n = 1; let maxDay = day[0]
    for(let i=1; i<=day.length; i++) {
        if(day[i] <= maxDay) { n++ }
        else {
            maxDay = day[i]
            answer.push(n)
            n = 1
        }
    }
    return answer
}