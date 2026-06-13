import { Fish } from "./fish.js"
import { Resources } from "./resources.js"

export class TheDeep extends Fish {
    constructor(x, y, minY, maxY) {
        super(x, y, 30, Resources.TheDeep, minY, maxY, 80, 40)
    }
}
