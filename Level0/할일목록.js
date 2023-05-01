function solution(todo_list, finished) {
    var answer = [];
    for(let i=0; i<finished.length; i++) {
        if(finished[i] == false) 
            answer.push(i)
    }
    return answer.map(i=> i=todo_list[i]);
}
solution