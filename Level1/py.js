function solution(s){
    s = s.split(""); let p =0 ; let y=0;

    for(let i=0; i<s.length; i++) {
        if(s[i]=='p' || s[i]=='P') { p++; }
        else if(s[i]=='y' || s[i]=='Y') { y++; }
    }

    return p == y ? true : false;
}