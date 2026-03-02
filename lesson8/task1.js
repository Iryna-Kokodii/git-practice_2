const calculator = {
    lastResult: null,
    operationsCount: 0,

    add(a, b) {
        const sum = a + b
        this.lastResult = sum
        this.operationsCount++
        return this.lastResult
    },
    subtract(a, b) {
        const result = a - b
        this.lastResult = result
        this.operationsCount++;
        return this.lastResult;
    },

    multiply(a, b) {
        const result = a * b
        this.lastResult = result
        this.operationsCount++
        return this.lastResult
    },

    divide(a, b) {
        if (b === 0) {
            this.operationsCount++
            this.lastResult = null
            let errorMessage = 'Помилка: ділення на нуль неможливе.' //це для уникнення  undefined при виводі результату після помилки 
            return errorMessage
        } else {
            const result = a / b
            this.lastResult = result
            this.operationsCount++
            return this.lastResult
        }
    },

    reset() {
        this.lastResult = null
        this.operationsCount = 0
    }
}

console.log(calculator.add(5, 3))
console.log(calculator.subtract(10, 4))
console.log(calculator.multiply(6, 7))
console.log(calculator.divide(10, 0))
console.log(calculator.lastResult)
console.log(calculator.divide(200, 5))
console.log(calculator.lastResult)
console.log(calculator.operationsCount)
calculator.reset()
console.log(calculator.lastResult)
console.log(calculator.operationsCount)