function toArray(...arr) {
  let number = { 
    0 : '영', 1: '일', 2: '이', 3 : '삼', 4 : '사',
    5 : '오', 6: '육', 7: '칠', 8 : '팔', 9 : '구'};
  return arr.map(i=>number[i])
}

console.log(toArray(0, 1, 2, 3));
console.log(toArray(5, 8, 9));
console.log(toArray(7, 6));
console.log(toArray(4));
