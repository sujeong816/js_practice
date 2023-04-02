import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

let arr = inputData[1].split(" ").map(i=>Number(i)); let num = +inputData[2];
arr = arr.filter(i=>i==num);
console.log(arr.length);