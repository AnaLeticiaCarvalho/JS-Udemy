const alunos = [
    { nome: 'John', nota: 8.5, bolsista: false },
    { nome: 'Marie', nota: 9.9, bolsista: true },
    { nome: 'Peter', nota: 7.8, bolsista: true },
    { nome: 'Astra', nota: 10.0, bolsista: true },
    {nome: 'Timmy', nota: 5.2, bolsista: false }
]

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))