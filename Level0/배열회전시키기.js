function solution(numbers, direction) {
    if(direction === "right") {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    return numbers;
}

// function solution(numbers, direction) {
//     direction==="right" ? 
//     numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
//     return numbers;
// } 삼항연산자로도 풀 수 있음