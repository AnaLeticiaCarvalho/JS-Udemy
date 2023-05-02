
let contador = 1

while (contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}

for (let i = 1; contador <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [9.0, 8.4, 9.9, 7.8, 8.3]

for (let i = 0; i < notas.length; i++){
    console.log(`Nota = ${notas[i]}`)
}
    



/*function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    
}

let opcao = 0

 do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${ opcao }.`)
}

while (opcao != -1)

console.log('Até a próxima!')*/
