function solution(myStr) {
    let str = myStr.replace(/a|b|c/g, ' ')
    str = str.split(" ").filter(i=>i.length!=0)
    return str.length!=0 ? str : ["EMPTY"]
}