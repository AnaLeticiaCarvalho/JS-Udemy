const alunos = [
    { nome: 'John', nota: 8.5, bolsista: false },
    { nome: 'Marie', nota: 9.9, bolsista: true },
    { nome: 'Peter', nota: 7.8, bolsista: true },
    { nome: 'Astra', nota: 10.0, bolsista: true },
    {nome: 'Timmy', nota: 5.2, bolsista: false }
]

const resultados = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(r + acumulador, atual)
    return acumulador + atual
})
