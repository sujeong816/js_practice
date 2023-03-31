import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

let price = inputData[0]; let sum = 0;

for(let i=2; i<inputData.length; i++) {
    if(inputData[i]!=='') {
        let arr = inputData[i].split(" ").map(a=>Number(a)); 
        sum += arr[0]*arr[1];
    }
}
sum == price ? console.log("Yes") : console.log("No");