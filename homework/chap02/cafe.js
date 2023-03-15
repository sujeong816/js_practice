function sum(...menu) {
    let result = 0;
    for(let i=0; i<menu.length; i++) {
        result += menu[i];
    }
    return "손님, " + result + "원 결제해드리겠습니다.";
}
console.log(sum(5000, 4000, 3000, 6000));
console.log(sum(5000, 2000, 6200));
console.log(sum(4200, 4600, 2500));