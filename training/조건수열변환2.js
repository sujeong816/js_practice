function solution(arr) {
    var answer = 0;
    while(true){
        let count = 0
        for(let i=0; i<arr.length; i++) {
            if(arr[i]>=50 && arr[i]%2==0) {
                arr[i] = arr[i]/2; count++;
            } else if(arr[i]<50 && arr[i]%2==1) {
                arr[i] = arr[i]*2 +1; count++;
            }
            else
                continue
        }
        if(count == 0)
            break;
        answer++
    }
    return answer;
}