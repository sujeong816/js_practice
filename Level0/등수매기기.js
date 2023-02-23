function solution(score) {
    let s2 = [...score];
    for(let i=0; i<s2.length; i++) {
        s2[i] = (s2[i][0]+s2[i][1])/2;
    }
    s2.sort((a,b)=>b-a);
    for(let i=0; i<score.length; i++) {
        score[i] = s2.indexOf((score[i][0]+score[i][1])/2)+1;
    }
    return score;
}