import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>i.split(" ").map(Number));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" ").map(Number));

let x = inputData[1][0]
let result = 0;
for(let i=0; i<inputData[0].length; i++) {
    if(inputData[0][i] == x) 
        result = i+1
}
console.log(result)