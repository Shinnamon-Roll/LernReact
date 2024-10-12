const numbers = [10, 20, 30, 40, 50]

const result = numbers.map(element => {     //or element => element * 2
    const a = element * 2
    return a
})

console.log(result)