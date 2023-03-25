import fs from "fs";
//const fs = require('fs');
// let inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
let inputData = fs.readFileSync("./index.txt").toString().split("\n");

let arr = inputData[1].split(' ').map(i=>Number(i));
console.log(Math.min(...arr), Math.max(...arr));