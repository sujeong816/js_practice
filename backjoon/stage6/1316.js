import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
for(let i=1; i<inputData.length; i++) {
    let arr = inputData[i].split(' ')
    if(arr.length == 1 || arr.length == 2) {
        count++
    } else {
        for(let j=0; j<arr.length; j++) {
            let str = arr[j];
            
        }
    }
}
console.log(count)