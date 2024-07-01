let option 
let items = []
let index = 0

while (option != 3) {
    option = Number(prompt(`
     Olá usuário! Digite o número da opção desejada:
     
     1. Cadastrar um item na lista;
     2. Mostrar itens cadastrado;
     3. Sair do programa;
`))

    if (option == 1) {
        items[index] = prompt("Digite o nome do item:")
        index++
    }

    else if (option == 2) {
        if (items.length == 0) {
            alert("Não existem itens cadastrados.")
        } else {
            alert(items)
        }
    } else if (option == 3) {
        alert("Encerrando programa.")
    } else {
        alert("Opção não encontrada.")
    }
}