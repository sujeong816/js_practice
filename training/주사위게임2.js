function solution(a, b, c) {
    if(a==b && b==c && c==a){ 
        return (a+b+c)*(a*a+b*b+c*c)*(a*a*a+b*b*b+c*c*c)
    } else if(a!==b && b!==c && c!==a) {
        return a+b+c
    } else {
        return (a+b+c)*(a*a+b*b+c*c)
    }
}