import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

let sum = 0; let max = 0;

for(let i=0; i<inputData.length; i++) {
    let num = inputData[i].split(' ');
    sum += +num[1] - +num[0];
    if(max < sum) { max = sum; }
}
console.log(max);