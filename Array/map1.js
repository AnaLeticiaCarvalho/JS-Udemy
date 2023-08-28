const nums = [1, 2, 3, 4, 5]

// Nesse exemplo a função map percorreu o array, pegou cada elemento (e) e multiplicou por 2, gerando um array exatamente do mesmo tamanho, mas multiplicado por 2 cada elemento. A função map serve pra percorrer e transformar os elementos do array em alguma coisa. Porém gera um array do mesmo tamanho.

let resultado = nums.map(function (e) {
    return e * 2
})

//console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let resultados = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultados)