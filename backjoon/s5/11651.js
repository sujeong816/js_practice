import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>i.split(" ").map(Number));
// let data = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" ").map(Number));

data.shift()
data.sort((i,j)=>(i[1] == j[1] ? i[0] - j[0] : i[1] - j[1]))

let str = ''
for(let i=0; i<data.length; i++) {
    for(let j=0; j<data[i].length; j++) {
        str += data[i][j]+' '
    }
    str += '\n'
}
console.log(str)