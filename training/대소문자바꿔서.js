const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('')
}).on('close',function(){
    let answer = ''
    for(let i=0; i<input.length; i++) {
        answer += (input[i] == input[i].toUpperCase() ? 
                    input[i].toLowerCase() : input[i].toUpperCase())
    }
    console.log(answer)
});