function solution(t, p) {
    let arr = []; t = t.split("");
    for(let i=0; i<t.length; i++) {
        let num = t.slice(i, i+p.length).join("")
        if(num.length == p.length) 
            arr.push(num)
    }
    return arr.filter(i=> i<=Number(p)).length
}