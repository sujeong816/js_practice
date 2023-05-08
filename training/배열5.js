function solution(intStrs, k, s, l) {
    return intStrs.map(i=> i.split("").splice(s, l)
                       .join("")).filter(i=> i>k).map(i=>Number(i))
}