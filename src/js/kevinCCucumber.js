import { Fish } from "./fish.js"
import { Resources } from "./resources.js"

export class KevinCCucumber extends Fish {
    constructor(x, y, minY, maxY) {
        super(x, y, 15, Resources.KevinCCucumber, minY, maxY, 60, 30)
    }
}
