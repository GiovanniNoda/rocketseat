/* 
Crie uma lista de pacientes
Cada paciente dentro da lista deverá conter:

nome 
idade 
peso 
altura

Escreva uma lista contendo o nome dos pacientes.
*/

// calcular imc dos pacientes peso / alturaˆ2

const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 80,
        height: 185
    },

    {
        name: "Gustavo",
        age: 23,
        weight: 72,
        height: 176
    },
    {
        name: "Matheus",
        age: 19,
        weight: 68,
        height: 172
    }
]

let patientsName = []

/*for (i = 0; i < patients.length; i++) {
    patientsName[i] = patients[i].name
} */
// pode ser feito usando o for of também

/*for (let patient of patients) {
    patientsName.push(patient.name)
}

alert(patientsName) */

function IMC(weight, height) {
   return (weight / (height / 100) ** 2).toFixed(2)
}

function printPatientsIMC(patient) {
   return `Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}`
}

for (let patient of patients) {
   let IMCmessage = printPatientsIMC(patient)
   alert(IMCmessage)
}