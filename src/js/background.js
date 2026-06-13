import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Background extends Actor {
    onInitialize(engine) {
        this.backgroundSprite = Resources.BG.toSprite()
        this.graphics.use(this.backgroundSprite)
        this.anchor = new Vector(0.5, 0.5)
        this.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2)
        this.scale = new Vector(
            engine.drawWidth / this.backgroundSprite.width,
            engine.drawHeight / this.backgroundSprite.height
        )
        this.z = -1000
        this._lastSize = { width: engine.drawWidth, height: engine.drawHeight }
    }

    onPreUpdate(engine) {
        if (
            engine.drawWidth !== this._lastSize.width ||
            engine.drawHeight !== this._lastSize.height
        ) {
            this._lastSize.width = engine.drawWidth
            this._lastSize.height = engine.drawHeight
            this.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2)
            this.scale = new Vector(
                engine.drawWidth / this.backgroundSprite.width,
                engine.drawHeight / this.backgroundSprite.height
            )
        }
    }
}