import fs from "fs";
//const fs = require('fs');
let data = fs.readFileSync("./index.txt").toString().trim().split("\n");
// let data = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>i.split(" "));

let stack = []; let res = []
for(let i=1; i<data.length; i++) {
    switch(data[i]){
        case 'pop':
            if(stack.length > 0) {
                res.push(stack.pop())
            } else (res.push(-1))
            break;
        case 'size':
            res.push(stack.length)
            break;
        case 'empty':
            res.push(stack.length == 0 ? 1 : 0)
            break;
        case 'top':
            res.push(stack.length == 0 ? -1 : stack[stack.length-1])
            break;
        default:
            stack.push(data[i].split(" ")[1])
            break;
    }
}
console.log(res.join('\n'))