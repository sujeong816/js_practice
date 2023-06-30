import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim();
// let data = fs.readFileSync('/dev/stdin').toString().trim();

let title = 665

while(data > 0) {
    title++
    if(title.toString().includes('666')) {
        data--
    }
}
console.log(title)