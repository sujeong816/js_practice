function solution(code) {
    let mode = 0; let answer = ''
    
    let empty = code.split('').filter(i=>i!=='1').length
    if(empty==0) return 'EMPTY'
    
    for(let i=0; i<code.length; i++) {
        if(code[i] == '1') { mode == 0 ? mode = 1 : mode = 0 }
        
        if(mode =='0' && code[i] !== '1') {
            i%2==0 ? answer += code[i] : answer += '2'
        } else if(mode == '1' && code[i]!='1') {
            i%2==1 ? answer += code[i] : answer += '2'
        }
    }
    return answer.split('').filter(i=>i!=='2').join('')
}