// move(a) 함수 구현 
function move(a) {
    let l = a.pop();
    a.unshift(l);
    return a;
}

let a = [1, 2, 3, 4, 5]; 
for (let i = 0; i < 3; ++i) { 
    move(a); 
    console.log(a); 
}