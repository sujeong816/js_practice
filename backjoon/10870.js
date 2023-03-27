import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = +inputData[0]
function solution(num) {
    if (num === 0) return 0;
    else if (num === 1 || num === 2) return 1;
    return solution(num - 1) + solution(num - 2);
}
console.log(solution(num));