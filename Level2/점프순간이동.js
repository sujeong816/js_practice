function solution(n) {
    var ans = 0;
    //계속 2로 나누면서
    //나머지 있으면 -1 하고 2로 마저 나눔
    while(true) {
        if(n%2==1) { 
            n -= 1; ans++
        }
        n /= 2
        if(n < 1) break;
    }

    return ans;
}
solution(5)