import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=> Number(i));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = inputData.reduce((a,b)=> a+b)
let a = inputData[0]; let b = inputData[1]; let c = inputData[2]
if(sum == 180) {
    if(a==b && b==c && c==a)
        console.log("Equilateral")
    else if(a==b || b==c || c==a)
        console.log("Isosceles")
    else
        console.log("Scalene")
} else {
    console.log("Error")
}