import { Fish } from "./fish.js"
import { Resources } from "./resources.js"

export class BetterShark extends Fish {
    constructor(x, y, minY, maxY) {
        super(x, y, 25, Resources.BetterShark, minY, maxY, 90, 45)
    }
}
