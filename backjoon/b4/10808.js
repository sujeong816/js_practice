import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('');

let alpha = 'abcdefghijklmnopqrstuvwxyz'
let count = new Array(26).fill(0)

for(let i of inputData) {
    count[alpha.indexOf(i)] += 1
}

console.log(count.join(" "))