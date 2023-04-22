let person={name:"홍길동",age:16}
console.log(person)
console.log(person.name)
console.log(person.age)

console.log("-------------------------")

let person1 = {}
person1.name="홍길동"
person1.age=16
console.log(person1)

console.log("-------------------------")

let person2={}
person2["name"]="홍길동"
person2["age"]=16
console.log(person2["name"])
console.log(person2["age"])

console.log("-------------------------")

function createPerson(s, i){
    return {name: s, age:i}
}
let person3=createPerson("홍길동",16)
let person4=createPerson("임꺽정", 18)
console.log(person3)
console.log(person4)

let p=person3
console.log(person3==person4)
console.log(person3==p)

let p1 = {name:"홍길동",age:16}
let p2={name:"홍길동",age:16}
function equals(p1, p2){
    return p1.name==p2.name&&p1.age==p2.age
}
console.log(equals(p1,p2))