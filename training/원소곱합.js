function solution(num_list) {
    let mul = num_list.reduce((i,j)=>i*j)
    let squr = num_list.reduce((i,j)=>i+j)
    
    return mul < squr*squr ? 1 : 0;
}