// types 함수 구현 
function types(...arr) {
    let res = [];
    res.push(arr.map(i => typeof i));
    return res;
}
console.log(types([3, "hello", true])); 
console.log(types(["world", []]));