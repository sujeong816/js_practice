function solution(str, n) {
    return str.split("").splice(str.length-n).join("");
}
