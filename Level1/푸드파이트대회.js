function solution(food) {
    var answer = '';
    for(let i=1; i<food.length; i++) {
        if(food[i]%2==1) 
            food[i] -= 1
        for(let j=0; j<food[i]/2; j++) {
            answer += i   
        }
    }
    let revans = answer.split('').reverse().join('')
    return answer+'0'+revans;
}