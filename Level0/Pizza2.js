function solution(n) {
    //사람이 6의 배수라면 그냥 나눈 몫을 리턴 <- 이걸 아예 생각하지 않는다면?
    //아니라면... n과 6의 최소공배수를 찾아 그 값을 리턴
    //최소공배수는 n과 6으로 나누었을 때 둘다 나머지가 0
    
    let a = 1; //최소공배수
    
    while(true) {
        if(a%n==0 && a%6==0) {
            break;
        }
        a++;
    }
    return parseInt(a/6);
}