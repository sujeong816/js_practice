function solution(i, j, k) {
    var answer = 0;
    let str = '';
    for(let a=i; a<=j; a++) {
        str+=a;
    }
    let arr = str.split('');
    for(let a=0; a<arr.length; a++) { if(arr[a] == k) {answer += 1;} }
    console.log(answer);
    return str;
}
solution(1, 13, 1);