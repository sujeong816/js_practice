import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split('\n');
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=1; i<inputData.length; i++) {
    console.log(inputData[i].substring(0,1)+inputData[i].substring(inputData[i].length-1, inputData[i].length));    
}