import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().split(" ").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().split('\n').map(i=>Number(i));

let max = 0; 
for(let i=1; i<=inputData[0]*inputData[1]; i++) {
    if(inputData[0]%i==0 && inputData[1]%i==0) { max = i; }
}
console.log(max);
console.log((inputData[0]*inputData[1]) / max);