function solution(nums) {
    //n/2만큼 가져가는데 중복 제거하고 가져가는 경우의 수
    
    let answer = []
    answer.push(nums.length/2)
    
    const set = new Set(nums)
    answer.push(set.size)

    return Math.min(...answer)
    
}
console.log(solution([3,3,3,2,2,4]))
console.log(solution([3,3,3,2,2,2]))