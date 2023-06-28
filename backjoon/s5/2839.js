import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim();
// let data = fs.readFileSync('/dev/stdin').toString().trim();

data = Number(data)

let count = 0 //5키로 개수
while(true) {
    if(data % 5 == 0){
        console.log(data/5 + count)
        break
    }

    if(0 > data) {
        console.log(-1)
        break
    }
    count++
    data -= 3
}