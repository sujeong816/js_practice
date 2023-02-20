function solution(po) {
    var answer = ''; po = po.split(" "); let a = []; let n = []; let x=0;
    for(let i=0; i<po.length; i++) { //x 추출
        if(po[i].includes('x')) {
            let b = po[i].split("").filter(i => !isNaN(i)).join("");
            if(b == 0) { b=1;}
            a.push(Number(b));
        } else if(!isNaN(po[i])){ //상수 계산
            n.push(Number(po[i]));
        }
    }
    if(a.length==0) { x=0;}
    else { x = a.reduce((i,j)=>i+j); }
    
    if(x>1) { 
        if(n.length>0) { return x+'x + '+n.reduce((i,j)=>i+j); }
        else { return x+'x'; }
    } else if(x==1) {
        if(n.length>0) { return 'x + ' + n.reduce((i,j)=>i+j); }
        else { return 'x'; }
    } else if(x==0) {
        if(n.length>0) { return String(n.reduce((i,j)=>i+j)); }
        else { return 0;}
    }
}