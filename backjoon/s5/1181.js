import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim().split('\n');
// let data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
data.shift()

let set = new Set(data)
data = [...set]

//알파벳 순 정렬.길이 순 정렬
data = data.sort((i,j)=>i.localeCompare(j)).sort((i,j)=> i.length - j.length).join("\n")

console.log(data)