let person={name:"홍길동", age:16}
let info={age:20,department:"소프", year:2}

Object.assign(person, info) //Object,assign(a,b) b를 a로 복사
console.log(person)

let person2=Object.assign({}, person)
console.log(person2)

console.log(Object.entries(person))

for(let a of Object.entries(person))
    console.log(a)

let a =['one', 'tos','three','four']
for(let i=0; i<a.length; ++i)
    console.log(a[i])

console.log(Object.keys(person))
console.log(Object.values(person))

//Object.freeze(person) person에 객체 추가 불가
//Object.isFrozen(person) person이 freeze 되었는지 t/f로 나타냄
