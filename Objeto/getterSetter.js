const sequencia = {
    _valor: 1, //Colocar o underline antes da variável é uma convenção
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}