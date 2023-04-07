import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split('\n');
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=0; i<inputData.length; i++) {
    console.log(inputData[i])
}