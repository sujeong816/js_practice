function solution(sizes) {
    let left = []; let right = [];
    for(let i=0; i<sizes.length; i++) {
        if(sizes[i][0] > sizes[i][1]){
            left.push(sizes[i][0])
            right.push(sizes[i][1])
        }else {
            left.push(sizes[i][1])
            right.push(sizes[i][0])
        }
    }
    return Math.max(...left)*Math.max(...right);
}
solution([[60, 50], [30, 70], [60, 30], [80, 40]])
