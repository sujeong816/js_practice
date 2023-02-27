function solution(arr, divisor) {
    arr = arr.sort((a,b)=>a-b).filter(i => i%divisor==0);
    return arr.length==0 ? [-1] : arr
}