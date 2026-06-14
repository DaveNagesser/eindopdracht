import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Fish extends Actor {

    constructor(x, y, points, sprite, minY, maxY) {
        const fishSprite = (sprite ?? Resources.Flopper).toSprite();
        const initialWidth = fishSprite.width;
        const initialHeight = fishSprite.height;
        super({
            width: initialWidth,
            height: initialHeight,
            collisionType: CollisionType.Passive
        });

        this.points = points;
        this.minY = minY;
        this.maxY = maxY;

        this.sprite = fishSprite;
        this.graphics.use(this.sprite);

        this.pos = new Vector(x, y);

        this.vel = new Vector(Math.random() * -100 - 50, 0);

        const sc = Math.random() * 0.5 + 0.2;
        this.scale = new Vector(sc, sc);
        this.z = 0;

        this.on("exitviewport", () => this.resetPosition());
    }

    resetPosition() {
        const rightside = this.scene.engine.drawWidth;
        const minY = this.minY ?? this.scene.engine.drawHeight * 0.4;
        const maxY = this.maxY ?? this.scene.engine.drawHeight - 20;

        this.pos = new Vector(
            Math.random() * 220 + rightside,
            Math.random() * (maxY - minY) + minY
        );

        this.vel = new Vector(
            Math.random() * -100 - 50,
            0
        );
    }
}
