import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));
let start = inputData[0]; let end = inputData[1]; let arr=[];

for(let i=start; i<=end; i++) {
    let res=0;
    for(let j=2; j<i; j++) {
        if(i%j === 0) { res++; }
    }
    if(res===0) { arr.push(i); }
}

if(arr.length === 0) {
    console.log(-1);
} else {
    console.log(arr.reduce((i,j)=>i+j));
    console.log(arr[0]);
}