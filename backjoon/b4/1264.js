import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let aeiou = ["a", "e", "i", "o", "u", "A", "E", "I", "O", 'U']
for(let i=0; i<inputData.length-1; i++) {
    let answer = 0
    let arr = inputData[i].split("")
    for(let j=0; j<arr.length; j++) {
        if(aeiou.includes(arr[j])) 
            answer++
    }
    console.log(answer)
}