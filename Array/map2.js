const carrinho = [
    '{"nome": "borracha", "preco": 3.45, "cor": "preta"}', 
    '{"nome": "caderno", "preco": 13.45, "cor": "azul"}',
    '{"nome": "kit de lapis", "preco": 41.22, "cor": "rosa"}',
    '{"nome": "caneta", "preco": 5.50, "cor": "vermelha"}'
]

const toObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const apenasNome = produto => produto.nome
const apenasCor = produto => produto.cor

const resultado = carrinho.map(toObj).map(apenasCor)

console.log(resultado)