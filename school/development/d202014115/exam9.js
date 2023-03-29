// sum(a) 함수 구현 
function sum(a) {
    let res = 0;
    for(let i=0; i<a.length; i++) { 
        res += a[i].reduce((a,b)=>a+b);
    }
    return res;
}

let a1 = [[1, 2], [3, 4, 5]]; 
let a2 = [[1], [2, 3, 4], [5, 6]]; 
console.log(sum(a1)); 
console.log(sum(a2));