let dobro = function (a) {
    return 2 * a
}

// Recriando a função anterior como Arrow

dobro = (a) => {
    return 2 * a
}

// Função Arrow ainda mais reduzida com 1 único parâmetro

dobro = a => 2 * a // Return implícito  
console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola' // Para funções sem parâmetro, colocar apenas os parênteses