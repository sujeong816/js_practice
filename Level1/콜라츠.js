function solution(n) {
    let m = 0;
    if(n==1) { return 0; }
    while(1) {
        n%2==0 ? n /= 2 : n = n*3+1;
        m++;
        if(n==1) { return m; }
        if(m > 500) { return -1; }
    }
}