function test1(f) {
    let result = f(3,4);
    console.log(result)
}

function add(a,b){
    return a+b
}

function multiply(a,b){
    return a*b
}

test1(add);
test1(multiply);

let add2 = (a,b)=> {return a+b}
let mul = (a,b) => {return a*b}

test1(add2)
test1(mul)