// const numbers = (number) => {
//     for(i=1; i <= number; i++ ) {
//         console.log('contando...', i)
//     }
// }

// numbers(10)

// tabuada de 1 a 10 
// const table = (number) => {
//     if(number > 10 || number < 1) {
//         console.log('Aceitamos apenas numeros de 1 a 10')
//         return
//     }
//     for(let i = 1; i <= 10; i++) {
//         console.log(`${i} x ${number} = ${i * number} `)
//     }
// }

// table(1)

// ver a hora do sistema

// console.log(new Date().toLocaleTimeString('pt-br'))


// const numbers = (number1, number2) => {
//     if(number1 > number2) console.log('O primeiro e maior')
//     else console.log('O segundo e maior !')
// }

// numbers(5,2)

function calculate(valorInicial, ValorAtual, tempo) {
    const juros = (ValorAtual - valorInicial) / (valorInicial * tempo)
    console.log((juros*100) .toFixed(2) * '%')
}
calculate(1000, 1200,10)