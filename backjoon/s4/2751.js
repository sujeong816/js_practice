import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim().split('\n').map(i=>Number(i));
// let data = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

data.shift()
data = data.sort((i,j)=>i-j).join("\n")
console.log(data)