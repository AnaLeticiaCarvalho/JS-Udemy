//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'

const avo = {
    attr1: 'A'
}
const pai = {
    __proto__: avo,
    attr2: 'B'
}

const filho = {
    __proto__: pai,
    attr3: 'C'

}

console.log(filho.attr1)



const carro = {
    velAtual: 0,
    velMax: 200,

    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMax
        }
    },

    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 340
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)