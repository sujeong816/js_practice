function solution(dots) {
    var answer = 0; //그냥 함수로 할까?
    function cal(i, j, k, l) {
        let a = (j[1] - i[1]) / (j[0] - i[0]);
        let b = (l[1] - k[1]) / (l[0] - k[0]);
        
        if(a == b) { answer++; }
    }
    //01 23 / 02 13 / 03 12
    cal(dots[0], dots[1], dots[2], dots[3])
    cal(dots[0], dots[2], dots[1], dots[3])
    cal(dots[0], dots[3], dots[1], dots[2])
    
    return answer > 0 ? 1 : 0
}