function solution(n, numlist) {
    return numlist.filter(i => i%n == 0);
}
//조건에 따라 원하는 값만 걸러주는 filter 함수 사용