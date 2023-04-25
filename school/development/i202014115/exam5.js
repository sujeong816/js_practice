let persons = [
  { name: "홍길동", age: 16 },
  { name: "임꺽정", age: 17 },
  { name: "전우치", age: 18 },
  { name: "성춘향", age: 19 },
];

let a1 = persons.filter(person => person.age % 2 !== 0);
let a2 = persons.filter(person => person.age % 2 == 0);

console.log(a1)
console.log(a2)