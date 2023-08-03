let aprovados = new Array('Kauã', 'Esther', 'Enzo')



aprovados[3] = 'Paulo'
aprovados.push = 'Ryan'
aprovados.sort()
console.log(aprovados)

aprovados.splice(4, 0, 'Max', 'Luna')// Explicando: a partir do índice 4, foram excluídos 0 e adicionado 2

console.log(aprovados)