const produtos = [
    { nome: 'notebook', preco: 3000, fragil: true },
    { nome: 'Ipad Pro', preco: 2500, fragil: true }, 
    { nome: 'copo de vidro', preco: 15.75, fragil: true },
    {nome: 'copo de plastico', preco: 5.25, fragil: false }
]

//console.log(produtos.filter(function (p) {
   // return p.preco > 100
//}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))