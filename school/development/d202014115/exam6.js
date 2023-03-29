function remove(a, index) {
    let res = a.splice(index, 1);
    return res;
}

let a = [1, 2, 3, 4, 5]; 
remove(a, 1); 
remove(a, 2); 
console.log(a);