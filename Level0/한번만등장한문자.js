function solution(s) {
    let answer = [];
    let arr = s.split("").sort();
    
    arr.forEach(i => {
        if(arr.indexOf(i) == arr.lastIndexOf(i)) {
            answer.push(i);
        }
    })
    return answer.join("");
}