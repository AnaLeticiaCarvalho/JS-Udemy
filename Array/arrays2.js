const pilotos = ['Vettel', 'Alonso', 'Raiikkonen', 'Massa']
pilotos.pop() //remove o último elemento do array

pilotos.push('Senna') //Adiciona elemento na última posição do array

pilotos.shift() //remove o primeiro elemento

pilotos.unshift('Hamilton') //adiciona elemento na primeira posição do array

// splice adiciona e remove elementos

// adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')

// remover

pilotos.splice(3, 1)// massa rodou dnv kkk

const algunsPilotos = pilotos.slice(2) // novo array a partir do índice [2]
