import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=0; i<inputData.length-1; i++) {
    let arr = inputData[i].split(" ")
    if (+arr[1] > 17 || +arr[2] >= 80)
        console.log(arr[0]+" Senior")
    else
        console.log(arr[0]+" Junior")
}