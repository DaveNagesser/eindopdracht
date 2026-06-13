import { Fish } from "./fish.js"
import { Resources } from "./resources.js"

export class TravisScottFish extends Fish {
    constructor(x, y, minY, maxY) {
        super(x, y, 18, Resources.TravisScottFish, minY, maxY, 65, 35)
    }
}
