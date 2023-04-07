import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

let arr = [];
for(let i=1; i<inputData.length; i++) {
    arr.push(inputData[i]);
}
console.log(arr);