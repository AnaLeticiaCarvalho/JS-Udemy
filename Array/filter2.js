Array.prototype.filter2 = function (callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [
    { nome: 'notebook', preco: 3000, fragil: true },
    { nome: 'Ipad Pro', preco: 2500, fragil: true }, 
    { nome: 'copo de vidro', preco: 15.75, fragil: true },
    {nome: 'copo de plastico', preco: 5.25, fragil: false }
]



const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter2(caro).filter2(fragil))