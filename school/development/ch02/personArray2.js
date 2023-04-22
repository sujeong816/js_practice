let persons = [];

for(let i=0; i<10; i++){
    persons.push(
        {name:"홍길동", age: 16+i}
    )
}

let persons2 = [];
Object.assign(persons2, persons)
console.log(persons2)