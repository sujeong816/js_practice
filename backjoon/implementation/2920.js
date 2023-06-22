import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim()
// let data = fs.readFileSync('/dev/stdin').toString().trim();

let result = { '1 2 3 4 5 6 7 8':'ascending', '8 7 6 5 4 3 2 1':'descending' }[data]

console.log(result || 'mixed')