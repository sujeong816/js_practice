import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

let buger = [inputData[0], inputData[1], inputData[2]]
let coke = [inputData[3], inputData[4]]

let setmenu = (buger.sort((i,j)=> i-j)[0] + coke.sort((i,j)=>i-j)[0]) - 50
console.log(setmenu)