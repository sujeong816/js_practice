import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i=0; i<inputData.length-1; i++){
    for(let j=i+1; j<inputData.length; j++) {
        let sum = inputData.reduce((a,b)=>a+b);

        if(sum - inputData[i] - inputData[j] === 100) {
            inputData = inputData.filter(a => a !== inputData[i] && a !== inputData[j])
        }
    }
}
console.log(inputData.sort((i,j)=>i-j).join('\n'));