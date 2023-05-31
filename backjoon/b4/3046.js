import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(" ").map(i=> Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


console.log((inputData[1]*2)-inputData[0])