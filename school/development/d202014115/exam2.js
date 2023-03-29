// dice 함수 구현 
function dice(r) {
    r = Math.floor(Math.random()*6+1);
    return r;
}

for (let i = 0; i < 10; ++i) 
console.log(dice());