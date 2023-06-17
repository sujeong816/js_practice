import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim();
// let data = fs.readFileSync('/dev/stdin').toString().trim();

for(let i=0; i<Number(data); i++) {
    let star = ''
    for(let j=0; j<i; j++) {
        star += ' '
    }
    for(let j=0; j<Number(data)-i; j++) {
        star += '*'
    }
    console.log(star)
}