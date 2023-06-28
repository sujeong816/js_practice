import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim().split('').map(i=>Number(i));
// let data = fs.readFileSync('/dev/stdin').toString().trim().split('').map(i=>Number(i));

console.log(data.sort((i,j)=> j-i).join(""))