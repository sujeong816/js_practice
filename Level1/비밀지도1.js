function solution(n, arr1, arr2) {
    var answer = [];
    for(let i=0; i<n; i++) {
        let bin=(arr1[i]|arr2[i]).toString(2);  //배열의 숫자들을 이진수로 변환하여 합함
        console.log(bin);
        let a = [];
        for(let j=bin.length-n; j<bin.length; j++) {
            bin[j] == 1 ? a.push('#') : a.push(" "); 
        }
        answer.push(a.join(""));
        console.log(answer);
    }
    // return answer;
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
console.log("\n");
solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10])