function generatePassword(length) {
    const characters = 'AakjfhkhafUWYGAYUWHAGVHVHJDB09876544321223173893029386109837AJBVSWKHJSVAJSkdsjnKHKHKHKHFKJSDNKJNSKHNsiudhf7e3y837y3456789'
    let password = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

console.log(generatePassword(8))        