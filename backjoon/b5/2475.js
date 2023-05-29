import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(" ").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));

let num = 0;
for(let i of inputData) {
    num += i*i
}
console.log(num%10)