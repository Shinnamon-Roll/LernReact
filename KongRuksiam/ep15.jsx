// const data = [10, 20, 30, 40]

// const newArr = data.filter (e => {
//     return e > 20
// })

// console.log(newArr)


const data = [
    {name : "Shinnamon", salary : 25000, department : "Programer"},
    {name : "Bell", salary : 20000, department : "Marketing"},
    {name : "Nut", salary : 10000, department : "Intern"},
    {name : "Jojo", salary : 30000, department : "Marketing"},
    {name : "Naphi", salary : 50000, department : "CEO"}
]

const result = data.filter (e => {
    return e.salary >= 30000
}).filter (e => {
    return e.department === "Marketing"
})

console.log(result)