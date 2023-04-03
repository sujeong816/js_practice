import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = new Array(30); for(let i=0; i<arr.length; i++) { arr[i] = i+1; }
for(let i=0; i<inputData.length; i++) {
    arr = arr.filter(a => a!=inputData[i])
}

console.log(arr.join('\n'));