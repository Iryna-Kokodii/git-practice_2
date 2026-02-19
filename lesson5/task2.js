function checkOrder(available, ordered) {
    if (ordered > available) {
        return "Your order is too large, we don’t have enough goods."
    } else if (ordered === 0) {
        return "Your order is empty"
    } else {
        return "Your order is accepted"
    }
}


console.log(checkOrder(100, 15))
console.log(checkOrder(10, 0))
console.log(checkOrder(10, 50))
console.log(checkOrder(131, 19387))
console.log(checkOrder(98273303, 3098324))
