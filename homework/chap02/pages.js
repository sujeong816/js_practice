let studentCount = 31;
let pageSize = 10;

function calc(a, b) {
    let n;
    a%b==0 ? n = a/b : n = parseInt(a/b)+1;
    console.log("필요한 페이지 수: " + n);
}
calc(studentCount, pageSize);