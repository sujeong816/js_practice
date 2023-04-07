import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString();
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +inputData;
for(let i=1; i<n; i++) {
    let none = ' '.repeat(n-i)
    let star = '*'.repeat(i+i-1)
    console.log(none+star)
}
for(let i=n; i>0; i--) {
    let none = ' '.repeat(n-i)
    let star = '*'.repeat(i+i-1)
    console.log(none+star)
}