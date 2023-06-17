import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim().split("\n").map(i=>i.split(" ").map(Number));
// let data = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" ").map(Number));

let result = ''
for (let i = 1; i < data.length; i++) {
    let H = data[i][0];
    let N = data[i][2];
  
    let num = parseInt(Math.ceil(N / H)); //호수
    if (N % H === 0) {// 마지막 층은 따로 처리해야한다.
      num += H * 100; //층수
    } else {
      num += (N % H) * 100; // 층수
    }
    result += num + "\n";
}
console.log(result)