function solution(emergency) {
    var answer = [];
    var arr = [...emergency].sort((a, b) => b-a);
    
    for(var i=0; i<emergency.length; i++) {
        answer.push(arr.indexOf(emergency[i])+1);
    }
    
    return answer;
}