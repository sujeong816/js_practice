import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(' ').map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));

console.log(inputData.sort((i,j)=>i-j)[1])