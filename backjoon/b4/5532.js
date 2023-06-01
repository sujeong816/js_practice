import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=> Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 방학일수, 총 국어, 총 수학, 하루 국어, 하루 수학
let kor = Math.ceil(inputData[1] / inputData[3])
let math = Math.ceil(inputData[2] / inputData[4])

kor >= math ? console.log(inputData[0]-kor) : console.log(inputData[0]-math)