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
                let newGrade = prompt(`Nota ${i + 1} inválida, por favor insira novamente:`)
                if (isNaN(newGrade) || newGrade < 0 || newGrade > 10) {
                    correctGrade()
                }
            }
        }
    }
}

// calcular a média do aluno 

let studentAverage = (grades[0] + grades[1] + grades[3]) / grades.length


