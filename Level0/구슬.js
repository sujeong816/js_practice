function solution(balls, share) {
    function fac(n) {
        let count = BigInt(1);
        for(var i=1; i<=n; i++) {
            count *= BigInt(i);
        }
        return count;
    }
    
    return fac(balls)/(fac(balls-share)*fac(share));
    
}