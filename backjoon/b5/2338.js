import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let a = BigInt(inputData[0])
let b = BigInt(inputData[1])

console.log((a+b)+"\n"+(a-b)+"\n"+(a*b))