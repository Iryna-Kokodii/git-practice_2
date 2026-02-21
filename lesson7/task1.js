const numbers = [1, 2, 3, 4, 0.3, 5, -3, -4, -5, 0, 0, 0, 0, 0]
let positiveNumbers = 0
let negativeNumbers = 0
let zeroNumbers = 0

for (const item of numbers) {
    if (item > 0) {
        positiveNumbers++
    } else if (item < 0) {
        negativeNumbers++
    } else {
        zeroNumbers++
    }
}

console.log(`Positive numbers: ${positiveNumbers}`)
console.log(`Negative numbers: ${negativeNumbers}`)
console.log(`Zero numbers: ${zeroNumbers}`)