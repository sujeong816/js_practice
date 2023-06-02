import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

if(inputData[0] >= 2) {
    if(inputData[0] == 2 && inputData[1] == 18)
        console.log("Special")
    else if(inputData[0] == 2 && inputData[1] < 18)
        console.log("Before")
    else
        console.log("After")
} else
    console.log("Before")