function solution(ineq, eq, n, m) {
    switch(ineq) {
        case '>' :
            if(eq == '=') return n >= m ? 1 : 0
            else return n > m ? 1 : 0
        case '<' :
            if(eq == '=') return n <= m ? 1 : 0
            else return n < m ? 1 : 0
    }
}