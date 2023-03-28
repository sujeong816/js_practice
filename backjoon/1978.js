import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = inputData[1].split(' ').map(i=>Number(i)); let count = 0;
for(let i=0; i<arr.length; i++) {
    let num = 0;
    for(let j=2; j<=arr[i]; j++) {
        if(arr[i]%j==0) { num++; }
    }
    if(num === 1) { count++; }
}
console.log(count)