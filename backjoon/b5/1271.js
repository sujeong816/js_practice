import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(" ");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n1 = BigInt(inputData[0])
let n2 = BigInt(inputData[1])

console.log((n1/n2).toString())
console.log((n1%n2).toString())