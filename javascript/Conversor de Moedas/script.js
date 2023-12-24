let valor = document.querySelector('#valor')
const btn = document.querySelector('#btn')
let real = document.querySelector('#currencyValorReal')
let select = document.querySelector('#select')


btn.addEventListener('click', () => {
    let inputValue = valor.value
    let dolar = valor.value * 4.86
    
    if (inputValue > 0 ) {

        currencyValorReal.innerHTML = `R$${inputValue}`
        currencyValorDolar.innerHTML = `US$ ${dolar.toFixed(2)}`
    } else {
        alert('Digite um Valor!')
    }
})


// let euro = valor.value * 5.36
