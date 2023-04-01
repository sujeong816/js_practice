import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().split(" ");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

let num = +inputData[0]; let arr =[]

for(let i=1; i<=num/4; i++) {
    arr.push('long');
}

console.log(arr.join(' '), 'int');