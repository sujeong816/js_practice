import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = []; 
let num = inputData[0].split(" ").map(i=> Number(i)).reduce((i,j)=> i*j) //상근이가 알고있는 참가자 수
let news = inputData[1].split(" ").map(i=> Number(i))

for(let i=0; i<news.length; i++) {
    answer.push(news[i]-num)
}
console.log(answer.join(" "))