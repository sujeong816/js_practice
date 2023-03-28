import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(" ").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = []; let num = 1; let count = 0;

while(arr.length<=inputData[1]) {
    arr.push(num); count++;
    if(count === num) {
        num++;
        count = 0;
    }
}
console.log(arr.slice(inputData[0]-1,inputData[1]).reduce((i,j)=>i+j));
