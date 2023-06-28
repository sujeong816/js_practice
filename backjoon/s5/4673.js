let arr = new Array(10000).fill(0).map((i,j)=> j+1)

let notSelfNum = []

for(let i=0; i<arr.length; i++) {
    let nums = arr[i].toString().split("").map(k => Number(k))
    nums.push(arr[i])
    notSelfNum.push(nums.reduce((i,j)=>i+j))
}

arr = arr.filter(i=> !notSelfNum.includes(i))
for(let i of arr) {
    console.log(i)
}