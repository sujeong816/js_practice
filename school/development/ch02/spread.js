let person = { name:"홍길동", age: 16, eng:90, math:85, his:95}
let  {name,age,...score} = person
console.log("%s %d", name, age)
console.log(score)

let n = "홍길동"
let a =14
let scores={eng:90, math:85, his:95}

let person1={n,a,scores}
console.log(person1)

let person2={n,a,...scores}
console.log(person2)