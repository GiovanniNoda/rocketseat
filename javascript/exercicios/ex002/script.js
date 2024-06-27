function askName () {
    let name = prompt("Qual é o seu nome?")

    if (name == "" || name == null || name == undefined) {
        alert('O nome é obrigatório')
        askName()
    } else {
        alert(`Olá, ${name}!`)
    }
}

askName()