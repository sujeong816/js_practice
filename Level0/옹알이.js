function solution(bb) {
    var answer = 0; let arr = ['aya', 'ye', 'woo', 'ma'];
    for(let i=0; i<bb.length; i++) {
        for(let j in arr) {
            if(bb[i].includes(arr[j])) {
                bb[i] = bb[i].replace(arr[j], '1');
            } 
        }
        bb[i] = bb[i].replace(/1/gi, '');
    }
    
    bb.map(i => i.length == 0 ? answer++ : 0);
    return answer;
}