import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = [];

for(let i=1; i<inputData.length; i++) {
    let a = inputData[i].split(" ").map(a=>Number(a)).sort((a,b)=>b-a);
    arr.push(a[2]);
}
console.log(arr.join("\n"));