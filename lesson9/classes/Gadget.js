export class Gadget {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }


    set year(newYear) {
        if (newYear >= 2000 && newYear <= 2026) {
            this._year = newYear
        } else {
            this._year = undefined
        }
    }

    get year() {
        return this._year
    }


    getInfo() {
        if (this._year === undefined) {
            return `Wrong year`
        }
        return `This gadget is a ${this.model} ${this.brand} of ${this._year} year`
    }

    static getOldestGadget(gadgetsArray) {
        let oldestGadget = gadgetsArray[0];
        for (let i = 1; i < gadgetsArray.length; i++) {
            if (gadgetsArray[i].year < oldestGadget.year) {
                oldestGadget = gadgetsArray[i];
            }
        }
        return oldestGadget;
    }
}
