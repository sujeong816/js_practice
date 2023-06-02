import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>i.split(" ").map(Number));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" ").map(Number));

let min = inputData[0].reduce((i,j)=> i+j)
let man = inputData[1].reduce((i,j)=> i+j)

min >= man ? console.log(min) : console.log(man)