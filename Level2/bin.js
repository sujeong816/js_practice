function solution(s) {
    var answer = [0,0]; 
    while(true) {
        s = s.split("");
        let one = s.filter(i=>i == '1').length;
        answer[0]++; answer[1] += s.length - one;
        s = one.toString(2);
        if(s.length==1) { break; }
    }
    return answer;
}