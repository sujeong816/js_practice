import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

data.shift()
data.sort((i,j)=> i.split(" ")[0] - j.split(" ")[0])

for(let i of data) {
    console.log(i)
}