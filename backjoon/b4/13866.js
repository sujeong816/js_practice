import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(" ").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));

inputData = inputData.sort((i,j)=> i-j)
let min = (inputData[0]+inputData[3])-(inputData[1]+inputData[2])
console.log(Math.abs(min))