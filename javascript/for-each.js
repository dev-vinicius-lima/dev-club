const students = [
    {name: 'vinicius', age: 25},
    {name:'maria', age: 43},
    {name:'joao', age: 21},
    {name: 'bruno', age: 43},
    {name:'carla', age: 13},
    {name:'ana', age: 20},
    {name:'julio', age: 26},
]

let allStudentsAge = 0

students.forEach( (student, index ) => {
    allStudentsAge += student.age
})

const averageAge = allStudentsAge / students.length

console.log(`A media dos alunos é de ${averageAge.toFixed()}`)