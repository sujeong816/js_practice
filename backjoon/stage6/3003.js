import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(" ");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [1, 1, 2, 2, 2, 8]; let res = []
for(let i=0; i<inputData.length; i++) {
    res.push(arr[i]-inputData[i])
}
console.log(res.join(" "))