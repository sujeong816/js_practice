function solution(quiz) {
    var ans = [];
    
    for(let i=0; i<quiz.length; i++) {
        let arr = quiz[i].split(" ");
        
        if(arr[1] == '-') {
            +arr[0] - +arr[2] === +arr[4] ? ans.push('O') : ans.push('X');
        } else {
            +arr[0] + +arr[2] === +arr[4] ? ans.push('O') : ans.push('X');
        }
    }
    return ans;
}