function solution(n) {
    n.sort((a, b) => a - b);
    return (n[0]*n[1]>n[n.length-1]*n[n.length-2]) ? n[0]*n[1]  : n[n.length-1]*n[n.length-2];
}