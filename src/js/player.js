import { Actor, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Player extends Actor {

    constructor(x = 640, y = 150) {

        super({
            width: 80,
            height: 100,
        });

        this.sprite = Resources.Player.toSprite();
        this.graphics.use(this.sprite);

        this.scale = new Vector(0.3, 0.3);
        this.pos = new Vector(x, y - 50);
        this.z = 100;
    }

    onInitialize(engine) {
        if (this.pos.x === 640 && this.pos.y === 150) {
            this.pos = new Vector(engine.drawWidth / 2, engine.drawHeight * 0.35);
        }
    }
}