function solution(name, yearning, photo) {
    var answer = []; let nmap = new Map()
    name.forEach((i,j)=>nmap.set(i, yearning[j]))
    for(let i=0; i<photo.length; i++) {
        let count = 0
        for(let j=0; j<photo[i].length; j++) {
            nmap.has(photo[i][j]) ? count += nmap.get(photo[i][j]) : 0
        }
        answer.push(count)
    }
    console.log(answer)
}
solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])
