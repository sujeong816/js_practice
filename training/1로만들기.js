function solution(num) {
    var answer = 0;
    for(let i=0; i<num.length; i++) {
        while(true) {
            if(num[i]==1) {
                break;
            } else {
                num[i]%2==0 ? num[i]/=2 : num[i]=(num[i]-1)/2;
                answer++   ;
            }
        }
    }
    return answer;
}