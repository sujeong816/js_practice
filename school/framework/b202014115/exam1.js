function print(a, b, c, d, e) {
    console.log('number ', a)
    console.log('string ', b)
    console.log('boolean ', c)
    console.log('object ', d)
    console.log('function ', e)
}

print(1, "2", true, { age: 20 }, () => 3)