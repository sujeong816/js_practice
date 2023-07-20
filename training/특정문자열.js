function solution(myString, pat) {
    let answer = []
    for (let i = 0; i < myString.length; i++) {
      let subStr = myString.slice(0, i + 1)
      if (subStr.endsWith(pat)) { answer.push(subStr) }
    }
    return answer[answer.length-1]
  }