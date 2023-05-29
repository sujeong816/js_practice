import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = []
for(let i=0; i<inputData.length; i++) {
    inputData[i] == inputData[i].toUpperCase() ? 
        answer.push(inputData[i].toLowerCase()) : answer.push(inputData[i].toUpperCase())
}
console.log(answer.join(""))