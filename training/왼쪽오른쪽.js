function solution(str) {
    let left = str.indexOf('l')
    let right = str.indexOf('r')
    
    if((left == -1 && right == -1)||left == 0) { return [] }
    else {
        if(left == -1) { return str.slice(right+1) }
        else if(right == -1) { return str.slice(0, left) }
        else { return left < right ? 
                        str.slice(0, left) : str.slice(right+1)}
    }
}