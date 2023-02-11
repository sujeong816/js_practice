function solution(my_string) {
    let aeiou = "aeiou";
    return my_string.split("").filter((i) => (!aeiou.includes(i))).join("");
}