function solution(chicken) {
    let coupon = chicken;
    let service = 0;
    
    while(coupon >= 10) {
        service += parseInt(coupon/10);
        coupon = coupon%10 + parseInt(coupon/10);
    }
    
    return service;
}