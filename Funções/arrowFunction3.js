let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //Mesmo usando o bind, o this vai continuar referenciando a função arrow
comparaComThisArrow(module.exports)// true