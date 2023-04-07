// removes 함수 구현 
function removes(...arr) {
    let res = arr.filter((i) => i%3 !== 0);
    return res;
}

console.log(removes([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
console.log(removes([11, 12, 13, 14, 15]));