import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let a = inputData[0].split(" ").map(i=>Number(i));
let arrNum = a[0]; let arr = new Array(arrNum);
for(let i=0; i<arr.length; i++) {
    arr[i] = i+1
}

for(let i=1; i<inputData.length; i++) {
    let num = inputData[i].split(" ").map(i=>Number(i)); 
    let start = num[0]-1; let end = num[1]-1;
    let tmp = arr[start]; arr[start] = arr[end]; arr[end] = tmp;
}    
console.log(arr.join(" "))