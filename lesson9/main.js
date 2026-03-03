import { Gadget } from "./classes/Gadget.js"
import { Smartphone } from "./classes/Smartphone.js"



const smartphone1 = new Smartphone('Apple', 'iPhone', 2025, 'iOS')
const smartphone2 = new Smartphone('Samsung', 'Galaxy', 2027, 'Android')
const smartphone3 = new Smartphone('Samsung', 'Galaxy', 2024, 'Windows')
const gadget1 = new Gadget('Apple', 'iPhone', 2003)
const gadget2 = new Gadget('Samsung', 'Galaxy', 1999)

console.log(smartphone1.getSmartphoneInfo())
console.log(smartphone2.getSmartphoneInfo())
console.log(smartphone3.getSmartphoneInfo())
console.log(gadget1.getInfo())
console.log(gadget2.getInfo())

const oldest = Gadget.getOldestGadget([gadget1, gadget2, smartphone1, smartphone2, smartphone3])

console.log(`The oldest gadget is: ${oldest.getInfo()}`)    