function solution(my, over, s) {
    my = my.split("")
    my.splice(s, over.length, over)
    return my.join("")
}