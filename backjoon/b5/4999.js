import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

inputData[0].split("").filter(i=> i=="a").length 
        >= inputData[1].split("").filter(i=> i=="a").length ?
            console.log("go") : console.log("no")