import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>i.split(" "))
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" "))

for(let i=0; i<inputData.length-1; i++) {
    let arr = []
    for(let j=0; j<inputData[i].length; j++) {
        arr.push(inputData[i][j].split("").reverse().join(""))
    }
    console.log(arr.reverse().join(" "))
}