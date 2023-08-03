class Avo{
    constructor(sobrenome) {
        this.sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Monteiro')
    }
}

const filho = new Filho
console.log(filho)