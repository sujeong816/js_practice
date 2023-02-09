function solution(money) {
    if(money>=0){
        let a = Math.floor(money/5500);          
        let b = money - (5500*a);
        let answer = [a, b]; 
        return answer;
    }
}