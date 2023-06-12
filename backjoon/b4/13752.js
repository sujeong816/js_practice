import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

for(let i=1; i<inputData.length; i++) {
    let str = ''
    for(let j=0; j<inputData[i]; j++) {
        str += '='
    }
    console.log(str)
}