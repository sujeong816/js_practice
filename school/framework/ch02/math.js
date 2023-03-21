export function sum(...numbers) {
    let result = 0;
    for(let i of numbers) { result += i;  }
    return result;
}
export function average(...numbers) {
    return sum(...numbers) / numbers.length;
}
//--------------------------------
let PI = 3.141592;
function sum2(...numbers) {
    let result = 0;
    for(let i of numbers) { result += i;  }
    return result;
}
function average2(...numbers) {
    return sum(...numbers) / numbers.length;
}
export { average2, sum2, PI };
export default { average2, sum2, PI };