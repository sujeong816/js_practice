import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=1; i<inputData.length; i++) {
    let arr = inputData[i].split(" ")
    arr.splice(0,0,i+".")
    console.log(arr.join(" "))
}