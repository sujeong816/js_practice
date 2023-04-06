import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split('\n');
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=1; i<inputData.length; i++) {
    let arr = inputData[i].split(" ")
    let count = +arr[0]
    let str = ''
    for(let j=0; j<arr[1].length; j++) {
        for(let k=0; k<count; k++) { 
            str += arr[1].charAt(j)
        }
    }
    console.log(str)
}