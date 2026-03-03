import { Gadget } from "./Gadget.js"

export class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year)
        this.operatingSystem = operatingSystem

    }

    set operatingSystem(newOs) {
        if (newOs == 'iOS' || newOs == 'Android' || newOs == 'HarmonyOS') {
            this._operatingSystem = newOs
        } else {
            this._operatingSystem === undefined
        }
    }

    get operatingSystem() {
        return this._operatingSystem;
    }

    getSmartphoneInfo() {
        if (this._operatingSystem === undefined) {
            return `Not available operating system`
        }
        return `${this.getInfo()} and it runs on ${this._operatingSystem} operating system`
    }

}

