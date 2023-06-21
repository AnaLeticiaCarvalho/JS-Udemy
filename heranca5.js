function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
        
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

//Simulando o new

function novo(f, ...params) {
    const obj = {}
    obj.__Proto__ = f.prototype
    f.apply(f, params)
    return obj
}

const aula3 = new novo('Bem vindo', 123)