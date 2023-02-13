function solution(age) {
    var arr = String(age).split("");
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    var answer = [];
    
    for(var i=0; i<arr.length; i++) {
        answer += alpha[arr[i]];    
    }
    
    return answer;
}