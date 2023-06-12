import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>i.split(" ").map(Number));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" ").map(Number));

let sum = inputData[0].reduce((i,j)=>i+j)
let ch = inputData[1]

console.log(ch*2 <= sum ? sum-ch*2 : sum)