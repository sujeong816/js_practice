let rectangle={
    width: 5,
    height: 7,
    area: function() {return this.width*this.height}
}
console.log(rectangle.area())

let person = { id: 101, name:"홍길동", age: 16}
console.log(person)
for(let key in person) {
    let value = person[key]
    console.log("%s: %s", key, value)
}
delete person.id
console.log(person)