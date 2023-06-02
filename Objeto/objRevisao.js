// Coleçao dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'

// Outra forma usando array

produto['Marca do produto'] = 'Genérica'

produto.preco = 220

console.log(produto)

delete produto['Marca do produto']

const carro = {
    modelo: 'A4',
    valor: 89000,
    propietario: {
        nome: 'Ana Leticia Carvalho Monteiro',
        idade: 29,
        endereco: {
            logradouro: 'Avenida Augusto dos Anjos',
            numero: 240
        }

    },

    condutores: [{
        nome: "Jordânia Carvalho Monteiro",
        idade: 30
    },
        {
            nome: 'Ana Licia Carvalho',
            idade: 27
        }],
    
    calcularValorSeguro: function () {
        //...
    }

}

console.log(carro)