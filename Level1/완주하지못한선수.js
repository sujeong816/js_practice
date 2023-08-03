function solution(part, com) {
    part.sort(); com.sort()

    for(let i=0; i<part.length; i++) {
        if(part[i] !== com[i]) return part[i]
    }
}
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))