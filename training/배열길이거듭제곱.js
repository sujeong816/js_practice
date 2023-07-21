function solution(arr) {
    while(true) {
        let bit = (arr.length).toString(2).split('')
        bit.shift()
        if(bit.every(i=> i=='0')) {
            return arr
        } else {
            arr.push(0)
        }
    }
}