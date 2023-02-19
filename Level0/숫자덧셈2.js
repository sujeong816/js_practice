function solution(my_string) {
    var answer = 0;
    let arr = my_string.match(/\d+/g);
    if(Array.isArray(arr)) {
        arr.map(i=>answer+=Number(i));
        return answer;
    } else {
        return 0;
    }
}