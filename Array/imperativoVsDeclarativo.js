const alunos = [
    { nome: 'Jordania', nota: 10.0 },
    { nome: 'Leticia', nota: 9.5},
    {nome:  'Licia', nota: 9.9}
]

//imperativo

let total1 = 0

for (var i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)