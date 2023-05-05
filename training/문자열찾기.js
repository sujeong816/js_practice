function solution(myString, pat) {
    var answer = 0; 
    myString = myString.toUpperCase();
    pat = pat.toUpperCase();
    
    return myString.includes(pat) == true ? 1: 0;
}