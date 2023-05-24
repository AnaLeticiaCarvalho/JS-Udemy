// Estratégia 1 para gerar valor padrão

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c

}

// Estratégias 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    
}

// valor padrão do es2015 (melhor opção para definir um valor padrão para o parâmetro caso não seja passado nenhum no momento que for chamada a função)

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c 
    
}