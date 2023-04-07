import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(' ');
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let a = inputData[0].split("").reverse().join(""); let b = inputData[1].split("").reverse().join("")
console.log(Number(a)>Number(b) ? a : b)