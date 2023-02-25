function solution(lines) {
    var answer = 0; let arr =new Array(200); 
    arr.fill(0);
    for(let i=0; i<lines.length; i++) {
        let left = lines[i][0]; let right = lines[i][1];
        for(let j=left; j<right; j++) {
            arr[j+100] += 1;
        }
    }
    arr.map(i => i>1 ? answer++ : 0);
    return answer;
}