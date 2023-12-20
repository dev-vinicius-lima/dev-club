const list = [
    { name: 'vinicius', vip: true },
    { name: 'maria', vip: false },
    { name: 'joao', vip: true },
    { name: 'bruno', vip: false },
    { name: 'carla', vip: false },
    { name: 'ana', vip: true },
    { name: 'julio', vip: false },
]

const newList = list.map(client => {
    const newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? "black" : "Green"
    }
    return newList
})
console.log(newList)


const students = [
    { name: 'vinicius', testGrade: 7 },
    { name: 'maria', testGrade: 5 },
    { name: 'joao', testGrade: 8 },
    { name: 'bruno', testGrade: 9 },
    { name: 'carla', testGrade: 3 },
    { name: 'ana', testGrade: 2 },
    { name: 'julio', testGrade: 10 },
]

const approvedStudent = students.map(student => {
    let approvedNot
    if(student.testGrade >= 7) {
        approvedNot= 'Approved'
    } else {
        approvedNot = 'Disapproved'
    }
    const students = {
        name: student.name,
        finalResult: approvedNot
    }
    return students
})

console.log(approvedStudent)