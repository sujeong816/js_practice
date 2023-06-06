import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

let arr1 = []
let arr2 = []

for(let i=0; i<inputData.length; i++){
    i < 4 ? arr1.push(inputData[i]) : arr2.push(inputData[i])
}
let sum = (arr1.reduce((i,j)=>i+j) - arr1.sort((i,j)=> i-j)[0]) + (arr2.reduce((i,j)=>i+j) - arr2.sort((i,j)=> i-j)[0])
console.log(sum)