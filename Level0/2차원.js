function solution(num_list, n) {
    var answer = [];
    
    for(var i=0; i<num_list.length;) {
        let arr = [];
        for(var j=0; j<n; j++) {
            arr.push(num_list[i]);
            i++
        }
        answer.push(arr);
    }
    return answer;
}