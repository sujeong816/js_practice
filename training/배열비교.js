function solution(arr1, arr2) {
    if(arr1.length > arr2.length) { return 1 }
    else if(arr1.length == arr2.length) { 
        if(arr1.reduce((i,j)=> i+j) > arr2.reduce((i,j)=>i+j))
            return 1
        else if(arr1.reduce((i,j)=> i+j) < arr2.reduce((i,j)=>i+j))
            return -1
        else
            return 0
    }
    else { return -1 }
}