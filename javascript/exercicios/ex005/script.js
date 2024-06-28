// capture 10 itens para compor a lista de um supermercado e após imprima-os separando por vírgula.

let items = []

for (let i = 0; i < 10; i++) {
    let itemName = prompt("Digite o item " + (i + 1))
    items[i] = itemName
}

alert(items)