let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
];

let maxAgePerson = persons.reduce(function(prev, current) {
  return (prev.age > current.age) ? prev : current;
});

console.log(maxAgePerson);