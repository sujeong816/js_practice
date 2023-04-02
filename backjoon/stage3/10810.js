import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let a = inputData[0].split(" ").map(i=>Number(i));
let arrNum = a[0]; let arr = new Array(arrNum).fill(0);

for(let i=1; i<inputData.length; i++) {
    let ball = inputData[i].split(" ").map(i=>Number(i));
    let start = ball[0]; let end = ball[1]; let ballNum = ball[2];
    for(let j=start-1; j<end; j++) { arr[j] = ballNum }
}    
console.log(arr.join(" "))