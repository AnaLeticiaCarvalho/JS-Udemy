// Função em JS é First Class Object (Citizens)

// Higher-order function

// Criar a função de forma literal

function func() {
        
}
    
// Armazenar em variável

const fun2 = function () {
    
}

// Armazenar em um Array

const array = [function (a, b) { return a + b }, func, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de um objeto

const obj = {}
obj.falar = function () {
    return 'Opa'
}

console.log(obj.falar())

// Passar função como parâmetro para outra função

function run(fun2) {
    fun2()
}

// Uma função pode retornar/conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)