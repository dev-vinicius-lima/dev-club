const student = {
    name: 'vinicius',
    age: 23,
    genre: 'male'
}

for (const propiedade in student) {
    console.log(student[propiedade])
}