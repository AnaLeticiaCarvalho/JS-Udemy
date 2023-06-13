const pessoa = {
    nome: 'Jordânia',
    idade: 30,
    peso: 70
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chava, valor]) => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'birthDate',{
    enumerable: true,
    writable: false,
    value: '13/11/1992'
})

// Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { b: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)