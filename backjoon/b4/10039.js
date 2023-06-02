import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

let count = 0
for(let i=0; i<inputData.length; i++) {
    inputData[i] < 40 ? count += 40 : count += inputData[i]
}
console.log(count/5)