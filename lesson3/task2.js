// Створіть змінну age і присвойте їй випадкове значення від 10 до 30 (можете вручну або Math.random()).

let min = 10
let max = 30
let age = (Math.floor(Math.random() * (max - min + 1)) + min)

// console.log(age)
// Створіть булеву змінну isAdult, яка визначає, чи є особа повнолітньою (age >= 18).

let isAdult = age >= 18
// Виведіть значення isAdult
console.log(isAdult)