function Pessoa(nome) {
    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}

p1 = new Pessoa('Kauã')
p1.falar()