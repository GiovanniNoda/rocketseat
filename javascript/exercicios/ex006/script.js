let result = prompt("Advinhe o número que eu estou pensando? Está entre 0 e 10")

const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente")  
    xAttempts++ 
}

let manyAttempts 

if(manyAttempts == 1) {
    manyAttempts = 'tentativa'
} else {
    manyAttempts = 'tentativas'
}

alert(`Parabéns! Você advinhou o número em ${xAttempts} ${manyAttempts}.`)