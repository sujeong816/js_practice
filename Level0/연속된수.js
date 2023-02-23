function solution(num, total) {
    var answer = []; let index = 0;
    
    if(num%2==0) { index = parseInt(num/2)-1; }
    else { index = parseInt(num/2); }
    
    answer[index] = parseInt(total/num);
    
    for(let i=0; i < num; i++) {
        if(i > index) {
            answer[i] = parseInt(total/num) + (i - index); 
        } else if(i == index) {
            continue;
        } else {
            answer[i] = parseInt(total/num) -(index - i);
        }
    }
    return answer;
}