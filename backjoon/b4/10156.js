import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(" ").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));

let num = inputData[0] * inputData[1]
console.log(num > inputData[2] ? num - inputData[2] : 0)