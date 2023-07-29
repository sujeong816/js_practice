import fs from "fs";
//const fs = require('fs');
let input = fs.readFileSync("./index.txt").toString().trim()
// let input = fs.readFileSync('/dev/stdin').toString().trim()


if(input == 0) { console.log(1) }
else {
    let arr = new Array(Number(input)).fill(0).map((i,j)=>j+1)
    console.log(arr.reduce((i,j)=>i*j))
}