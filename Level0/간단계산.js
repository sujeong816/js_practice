//간단한 식 계산하기
function solution(binomial) {
    binomial = binomial.split(" ")
    if(binomial[1] == '+') return +binomial[0]+(+binomial[2])
    else if(binomial[1] == '-') return binomial[0]-(+binomial[2])
    else if(binomial[1] == '*') return binomial[0]*(+binomial[2])
}
solution