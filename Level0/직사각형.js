function solution(dots) {
    dots.sort((a, b) => { //dots[0][1]이 같으면 dots[0][1] 비교
      if (a[0] === b[0]) { return a[1] - b[1] }
      else { return a[0] - b[0] } })
    return Math.abs(dots[3][0]-dots[0][0]) * Math.abs(dots[3][1]-dots[0][1]);
}