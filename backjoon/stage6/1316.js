import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = []

for (let i = 1; i < inputData.length; i++) {
    arr.push(inputData[i]);
  }
  
  let count = arr.length;
  let temp = '';
  
  arr.forEach((item) => {
    temp = item[0];
    for (let i = 1; i < item.length; i++) {
      if (temp.includes(item[i]) && item[i - 1] !== item[i]) {
        count--;
        break;
      }
      temp += item[i];
    }
  });
  
  console.log(count);
