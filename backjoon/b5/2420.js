import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(" ");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(Math.abs(inputData[0]-inputData[1]))