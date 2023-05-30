const notas = [5.7, 8.5, 9.4, 6.8, 9.2, 7.9, 9, 9]

// Sem callback

let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

let notasAltas = []
for (let i in notas) {
    if (notas[i] >= 7) {
        notasAltas.push(notas[i])
    }
}

console.log(notasAltas)

// Com callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// Reescrevendo usando função arrow

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)