const quaseArray = { o: 'Rafael', 1: 'Ana', 2: 'Bia' }

// Simulando um array no console

Object.defineProperty(quaseArray, 'toString', {
    value: function () {
        return Object.values(this)
    }, enumerable: false
})