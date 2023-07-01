import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim().split(' ').map(i=>Number(i));
// let data = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));

let answer = []
let queue = new Array(data[0]).fill(0).map((i,j) => j+1)
let count = 1
while(answer.length < data[0]) {
    if(count == data[1]) {
        answer.push(queue.shift())
        count = 0
    } else {
        queue.push(queue.shift())
    }
    count++
}
console.log('<'+answer.join(", ")+'>')