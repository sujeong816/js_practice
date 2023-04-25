function factory() {
    return function (a,b) {
        return a+b;
    }
}
const add = factory();
console.log(add(3, 4));
console.log(add(4, 5));
