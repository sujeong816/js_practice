let person = { name: "홍길동", age: 16, email: "hong@skhu.net" };

let name = person.name;
let age = person.age;
let email = person.email;

console.log(name, age, email);

let { name2, age2, email2 } = person;
console.log(name2, email2, age2); //순서를 바꾸면 undefinde로 뜬다

let { name: nm, age: ag, email: em} = person;
console.log(nm, ag, em);

