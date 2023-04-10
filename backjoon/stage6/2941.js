import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split(" ");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
inputData=inputData[0]
let al = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let count = 0;
for(let i=0; i<al.length; i++) {
    while(inputData!==inputData.replace(al[i],'')) {
        count+=1;
        inputData = inputData.replace(al[i],' ')
    }
}
console.log(count + inputData.split(' ').join('').length);