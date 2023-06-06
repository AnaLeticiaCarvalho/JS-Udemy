// Usando a notação literal

const obj1 = {

}

// Object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object

// Funções construtoras

function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)   

    }

}

const p1 = new produto('Caneta', 2.50, 0.15)
const p2 = new produto('Notebook', 3545, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Factory function

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
         }
    }
    
    
}

const f1 = criarFuncionario('Leticia', 18000, 2)    

// Object.create

const filha = Object.create(null)
filha.nome = 'Leh'

// Uma função famosa que retorna objetos

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)