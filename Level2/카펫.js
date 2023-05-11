function solution(brown, yellow) {
    var arr = []; 
    let num = brown + yellow
    
    for(let i=2; i<num; i++) {
        if(num%i==0) //정답이 되는 약수는 3보다 커야 한다.
            arr.push(i)
    }
    
    if (arr.length == 1)
        return [arr[0], arr[0]]
    else {
        for(let i=0; i<arr.length/2; i++) {
            let a = arr[i]-2; let b = arr[arr.length-1-i]-2
            if(a*b == yellow) {
                return a+2 > b+2 ? [a+2, b+2] : [b+2, a+2]
            }
        }
    }
}
solution(8, 1)