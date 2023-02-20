function solution(com) {
    var answer = 0;
    if(com[1]-com[0] != com[2]-com[1]) {
        return com[com.length-1]*(com[1]/com[0]);
    } else {
        return com[com.length-1]+(com[1]-com[0]);
    }
}