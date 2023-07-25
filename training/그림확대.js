function solution(pic, k) {
    var answer = [];
    for(let i=0; i<pic.length; i++) {
        let str = ''
        for(let j=0; j<pic[i].length; j++) {
            for(let n=0; n<k; n++) {
                str += (pic[i][j])
            }
        }
        
        for(let n=0; n<k; n++) {
            answer.push(str)
        }
    }
    return answer
}
solution([".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."], 2)