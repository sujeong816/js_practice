import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString();
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

let sum = 0; let count = 0;

for(let i=1;; i++) {
    sum += i; count++;
    if(sum>Number(inputData)) {break;}
}
console.log(count-1);