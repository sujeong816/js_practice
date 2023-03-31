import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(" ").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

console.log(inputData.reduce((i,j)=>i+j))