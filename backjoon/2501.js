import fs from "fs";
//const fs = require('fs');
// let inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
let inputData = fs.readFileSync('./index.txt').toString().split(' ');

const n = parseInt(inputData[0]);
const index = parseInt(inputData[1])-1; 
let arr = [];

for(let i=1; i<=n; i++) {
    if(n%i==0) { arr.push(i); }
}
arr.length <= index ? console.log(0) : console.log(arr[index]);
