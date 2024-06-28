function addition () {
    let number1 = prompt('Digite um número:')
    let number2 = prompt('Digite outro número:')

    number1 = Number(number1)
    number2 = Number(number2)

    if (isNaN(number1) || isNaN(number2)) {
        alert('Insira um número válido')
        addition()
    } else {
        alert(`A soma entre eles é: ${number1 + number2}`)
    }
}

addition()