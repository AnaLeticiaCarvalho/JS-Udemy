const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Pablo',
        nota: 7.5
    }, {
        nome: 'Anair',
        nota: 8.7
    }],

    }, {
        nome: 'Turma M2',
        alunos: [{
            nome: 'Rebecca',
            nota: 9.5
        }, {
            nome: 'Lucas',
            nota: 8.5
        }]
    }
]


const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)

console.log(notas1)

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)