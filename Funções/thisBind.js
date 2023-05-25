const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

// A função Bind "amarra" o this ao objeto que ele deve fazer referência, eu não tô sabendo explicar kkkkk pqp, tendi foi nada

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()