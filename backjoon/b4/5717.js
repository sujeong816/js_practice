import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>i.split(" ").map(Number));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" ").map(Number));

inputData = inputData.map(i=> i.reduce((a,b)=> a+b))
for(let i=0; i<inputData.length-1; i++) {
    console.log(inputData[i])
}