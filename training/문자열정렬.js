function solution(myString) {
    myString = myString.split('')
    
    for(let i=0; i<myString.length; i++) {
        if(myString[i] == 'x') { myString[i] = ' '}
    }
    
    return myString.join('').trim().split(' ').filter(i=> i!=='').sort()
}