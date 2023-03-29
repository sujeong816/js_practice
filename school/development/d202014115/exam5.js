function insert(a, index, value) {
    a.splice(index, 0, value);
    return a;
}

let a = [1, 2, 3]; 
insert(a, 1, "a"); 
insert(a, 3, "b"); 
console.log(a);