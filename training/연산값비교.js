function solution(a, b) {
    let ab = Number(String(a)+String(b))
    let ab2 = 2*a*b
    return ab > ab2 ? ab : ab2;
}