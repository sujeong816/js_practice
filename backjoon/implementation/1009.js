import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>i.split(" ").map(Number));
// let data = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" ").map(Number));

for(let i=1; i<data.length; i++) {
    let a = data[i][0]
    let b = data[i][1]

    let num = 1
    for(let j=0; j<b; j++) {
        num = a * num % 10
    }
    console.log(num !== 0 ? num : 10)
}