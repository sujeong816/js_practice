function solution(num_list) {
    let odd = []; let even = []
    for(let i=0; i<num_list.length; i+=2) { odd.push(num_list[i]) }
    for(let i=1; i<num_list.length; i+=2) { even.push(num_list[i]) }
    
    odd = odd.reduce((i,j)=>i+j)
    even = even.reduce((i,j)=>i+j)
    return odd > even ? odd : even
}