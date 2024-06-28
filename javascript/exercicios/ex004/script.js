// solicitar o nome e as 3 notas do bimestre.

let studentName = prompt("Nome:")
let grade1 = Number(prompt("Nota 1:"))
let grade2 = Number(prompt("Nota 2:"))
let grade3 = Number(prompt("Nota 3:"))

let grades =[grade1, grade2, grade3]

// verificar se as notas inseridas são válidas
checkGrade()

function checkGrade() {
    for (let i = 0; i < grades.length; i++){
        if (isNaN(grades[i]) || grades[i] < 0 || grades[i] > 10){
            correctGrade()
            function correctGrade() {
                let newGrade = Number(prompt(`Nota ${i + 1} inválida, por favor insira novamente:`))
                if (isNaN(newGrade) || newGrade < 0 || newGrade > 10) {
                    correctGrade()
                } else {
                    grades[i] = newGrade
                }
            }
        }
    }
}

// calcular a média do aluno 

let studentAverage = (grades[0] + grades[1] + grades[2]) / grades.length

// verificando se o aluno foi aprovado

if (studentAverage >= 7) {
    alert(`Parabéns ${studentName}! Você foi aprovado com média ${studentAverage}`) 
} else {
    alert(`${studentName}, você reprovou, sua média foi ${studentAverage.toFixed(2)}`)
}

