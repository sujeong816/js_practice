function solution(my_string) {
    return [...my_string].filter((i, j) => my_string.indexOf(i) == j).join("");
}