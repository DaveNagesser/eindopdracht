import { Fish } from "./fish.js"
import { Resources } from "./resources.js"

export class Bomb extends Fish {
    constructor(x, y, minY, maxY) {
        super(x, y, 0, Resources.Bomb, minY, maxY, 40, 40)
        this.z = 0
    }
}
