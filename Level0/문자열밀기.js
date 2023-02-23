function solution(A, B) {
    A = A.split(""); B = B.split(""); let count = 0;
    
    if(A.join("") == B.join("")) { return 0; }
    else {
        while(1) {
            A.unshift(A.pop()); count++;
            if(A.join("") == B.join("")) {
                return count;
                break;
            }
            
            if (count>A.length) { count = 0; break; }
        }
        
        while(1) {
            A.push(A.shift()); count++;
            if(A.join("") == B.join("")) {
                return count; break;
            }
            if(count > A.length) {
                return -1; break;
            }
        }
    }
}