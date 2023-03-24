import fs from "fs";
//const fs = require('fs');
// let inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");

let count = Number(inputData[0]);

for (let i = 1; i <= count; i++) {
    let bin = Number(inputData[i]).toString(2);
    let binArr = [...bin].reverse();

    let arr = [];

    for(let j=0; j<binArr.length; j++) {
        if(binArr[j]=='1') { arr.push(j) }
    }  
    console.log(arr.join(" "));
}
