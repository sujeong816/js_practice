import { readFileSync } from 'fs';
let inputData = readFileSync('/dev/stdin').toString().split(' ');

const n = parseInt(inputData[0]);
const index = parseInt(inputData[1])-1; 
let arr = [];

for(let i=1; i<=n; i++) {
    if(n%i==0) { arr.push(i); }
}

console.log(arr[index]);
