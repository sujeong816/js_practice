function solution(people, limit) {
    var answer = 0;
    let peo = people.sort((a,b)=> a-b)
    let left = 0; let right = peo.length-1
    
    while(left <= right) {
        if(peo[left]+peo[right] <= limit) {
            left++; right--;
            answer++
        } else {
            answer++
            right-- //가장 큰 값 삭제
        }
    }
    return answer;
}
solution([30,30,40,50,70])