import fs from "fs";
//const fs = require('fs');
const [[n, m], ...inputData] = fs.readFileSync("./index.txt").toString().trim().split("\n").map(x => x.split(" ").map(Number));
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [...Array(n+1).keys()];
for (let [i, j] of inputData) {
	for (let idx=i; idx<=(i+j)/2; idx++) {
		let bak = arr[idx];
		arr[idx] = arr[j-idx+i];
		arr[j-idx+i] = bak;
	}
}
console.log( arr.slice(1).join(" ") );
console.log(m);