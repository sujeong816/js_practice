function solution(n) {
    var count = new Set();
    for(var i=1; i<=n; i++) {
        for(var j=2; j<i; j++) {
            if(i%j == 0) {
                count.add(i);
            }
        }
    }
    return count.size;
}