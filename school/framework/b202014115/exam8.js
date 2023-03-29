function sum(...arr) {
    let res = arr.reduce((i, j)=>i+j);
    return res;
}

console.log(sum(3, 4, 5));
console.log(sum(3, 4, 5, 6));