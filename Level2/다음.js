function solution(n) {
    let one = n.toString(2).split('').filter(i=> i==1).length
    while(true) {
        n++
        if(n.toString(2).split('').filter(i=> i==1).length == one)
            break
    }
    return n;
}
solution(78)