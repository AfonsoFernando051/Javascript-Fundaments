const escola = [{
    alunos:[{
        nome: "Nando",
        nota: 10
    },
    {
        nome: "Gabriel",
        nota: 9
    }, {
        nome: "Turma 212",
       alunos:[ {
            nome: "Nanda",
            nota: 8
        },
        {
            nome: "Rafa",
            nota: 10
        }]
    },
]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotasDaTurma)
console.log(nota2)
