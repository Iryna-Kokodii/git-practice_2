// Function Declaration
function calculateSquare(width, height) {
    return width * height
}
console.log(calculateSquare(50, 10))

// Function Expression
const calculateSquare2 = function (width, height) {
    return width * height
}
console.log(calculateSquare2(20, 30))


// Arrow Function
const calculateSquare3 = (width, height) => width * height
console.log(calculateSquare3(10, 25))