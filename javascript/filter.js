
const list = [
    { name: 'vinicius', vip: true },
    { name: 'maria', vip: false },
    { name: 'joao', vip: true },
    { name: 'bruno', vip: false },
    { name: 'carla', vip: false },
    { name: 'ana', vip: true },
    { name: 'julio', vip: false },
]

const justVips = list.filter(client => {
    return client.vip
})
console.log(justVips)



const students = [
    { name: 'vinicius', testGrade: 7 },
    { name: 'maria', testGrade: 5 },
    { name: 'joao', testGrade: 8 },
    { name: 'bruno', testGrade: 9 },
    { name: 'carla', testGrade: 3 },
    { name: 'ana', testGrade: 2 },
    { name: 'julio', testGrade: 10 },
]

const newList = students.filter(student => {
    return student.testGrade >= 7
})

console.log(newList)