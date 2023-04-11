import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().split("\n").map(a=>a.split(" "));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const grade = { 'A+':4.5, 'A0':4.0, 'B+':3.5, 'B0':3.0, 'C+':2.5, 'C0':2.0, 'D+':1.5, 'D0':1.0, 'F':0.0 };
let sum = 0; let count = 0;
for(let [i,j,k] of inputData) {
    if(k=='P') continue;
    sum += j*grade[k]
    count += j*1
}
console.log(sum/count)