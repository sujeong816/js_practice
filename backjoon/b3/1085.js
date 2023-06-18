import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim().split(' ').map(i=>Number(i));
// let data = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));

let curX = data[0]; let curY = data[1]; let X = data[2]; let Y = data[3]

let minx = 0; let miny = 0
curX - 0 < X - curX ? minx = curX - 0 : minx = X - curX
curY - 0 < Y - curY ? miny = curY - 0 : miny = Y - curY

console.log(minx < miny ? minx : miny)