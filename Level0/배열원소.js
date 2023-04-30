function solution(arr) {
    var answer = [];
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i]; j++) {
            answer.push(arr[i])
        }
    }
    return answer;
}
solution()
//배열의 원소만큼 추가하기