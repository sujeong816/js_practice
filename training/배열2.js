function solution(l, r) {
    var answer = [];
    
    while(true) {
        let strl = l.toString().split('')
        
        let count = 0
        for(let i=0; i<strl.length; i++) {
            (strl[i] !== '0' && strl[i] !== '5') ? count++ : 0
        }
        
        if(count == 0) { answer.push(l) }
        l++
        
        if(l > r) break;
    }
    return answer.length ? answer : [-1]
}