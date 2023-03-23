let a = [1,2]; let b=[3,4]; let c=[5,6];
let m=[a,b,c];
console.log(m.length);
console.log(m);

let n=[...a, ...b, ...c];
console.log(n.length);
console.log(n);

function print(...params) {
    console.log("\n 파라미터 수: ", params.length);
    for(let i=0; i<params.length; ++i)
        console.log(" "+ i + "번 파라미터: "+params[i]);
}
let a2 = ["one", "two", "three"];
print(a2);
print(...a2
    );