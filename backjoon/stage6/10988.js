import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString();
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(inputData === inputData.split("").reverse().join("") ? 1 : 0)