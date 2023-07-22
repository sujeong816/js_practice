function solution(arr) {
    let width = arr[0].length; let height = arr.length
    
    if(width < height) { 
        for(let i=0; i<height-width; i++){
            for(let j=0; j<arr.length; j++) { arr[j].push(0) }
        }
    }
    else if(width == height) { return arr }
    else {
        let tmp = new Array(width).fill(0)
        for(let i=0; i<width-height; i++) { arr.push(tmp) }
    }
    return arr
}