function solution(arr, n) {
    let abscheck = [];
    for(let i=0; i<arr.length; i++) {
        abscheck[i] = Math.abs(arr[i]-n);
    }
    let min = Math.min(...abscheck);
    arr.sort();
    
    for(let i=0; i<arr.length; i++) {
        if(Math.abs(arr[i]-n)==min) {
            return arr[i];
        }    
    }
}