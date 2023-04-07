import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim();
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let phone = {
  "ABC" :2, "DEF" :3, "GHI" :4, "JKL" :5, "MNO" :6, "PQRS":7, "TUV" :8, "WXZY":9,
};
let res = 0;
for(let i=0; i<inputData.length; i++) {
    for(let x in phone) {
        if(x.includes(inputData[i])) {
            res += phone[x]+1;
        }
    }
}
console.log(res)