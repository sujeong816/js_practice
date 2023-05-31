import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim();
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=+inputData; i>0; i--) {
    let answer = ''
    for(let j=0; j<i; j++) {
        answer += '*'
    }
    console.log(answer)
}