import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>i.split(" ").map(Number));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" ").map(Number));

for(let i=0; i<inputData.length; i++) {
    let hour = inputData[i][3] - inputData[i][0]
    let min = inputData[i][4] - inputData[i][1]
    let sec = inputData[i][5] - inputData[i][2]
    
    if(sec < 0) {
        sec += 60
        min -= 1
    }
    if(min < 0) {
        min += 60
        hour -= 1
    }
    console.log(hour, min, sec)
}