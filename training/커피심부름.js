function solution(order) {
    var answer = 0;
    for(let i=0; i<order.length; i++) {
        if(order[i].includes("americano") || order[i].includes("anything")) {
            answer += 4500
        } else if(order[i].includes("latte")) {
            answer += 5000
        }
    }
    return answer;
}