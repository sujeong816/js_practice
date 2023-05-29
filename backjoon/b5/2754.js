import fs from "fs";
//const fs = require('fs');
let inputData = fs.readFileSync("./index.txt").toString().trim().split("");
// let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

switch (inputData[0]) {
  case "A":
    if (inputData[1] == "+") {
      console.log("4.3");
    } else if (inputData[1] == "0") {
      console.log("4.0");
    } else console.log("3.7");
    break;
  case "B":
    if (inputData[1] == "+") {
      console.log("3.3");
    } else if (inputData[1] == "0") {
      console.log("3.0");
    } else console.log("2.7");
    break;

  case "C":
    if (inputData[1] == "+") {
      console.log("2.3");
    } else if (inputData[1] == "0") {
      console.log("2.0");
    } else console.log("1.7");
    break;

  case "D":
    if (inputData[1] == "+") {
      console.log("1.3");
    } else if (inputData[1] == "0") {
      console.log("1.0");
    } else console.log("0.7");
    break;
  default:
    console.log("0.0");
}
